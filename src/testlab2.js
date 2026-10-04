const fs = require('fs');
const html = fs.readFileSync('number-system-lab.html','utf8');
const core = html.split('/* ==================== CORE START ==================== */')[1].split('/* ==================== CORE END ==================== */')[0];
const helpers = html.split('function esc(t){')[1].split('function showSteps(){')[0];
eval(core);
eval('function esc(t){' + helpers);

let fails=0, n=0;
function t(d,a,e){ n++; if(a!==e){ fails++; console.log('FAIL',d,'=> got',JSON.stringify(a),'expected',JSON.stringify(e)); } }

// addBinDisplay checks
const cases = [["1011","0110","10001"],["1101","1011","11000"],["1111","1011","11010"],["1","1","10"],["10101","1111","100100"],["111","1","1000"]];
for(const [a,b,exp] of cases){
  const lines = addBinDisplay(a,b);
  const last = lines[4].replace(/\s/g,"");   // the sum line
  t('addBinDisplay '+a+'+'+b, last, exp);
}
// verify carry row matches a reference implementation
function refCarry(a,b){
  const len=Math.max(a.length,b.length); a=a.padStart(len,'0'); b=b.padStart(len,'0');
  let carry=0, sum=''; const carries=[];
  for(let i=len-1;i>=0;i--){ const s=+a[i]+ +b[i]+carry; carries[i]=carry; sum=(s%2)+sum; carry=s>=2?1:0; }
  return {sum:(carry?'1':'')+sum, row:(carry?'1 ':'  ')+carries.slice().reverse().join(' ')};
}
for(let i=0;i<500;i++){
  const L=1+Math.floor(Math.random()*7);
  let a='',b='';
  for(let j=0;j<L;j++){ a+=Math.floor(Math.random()*2); b+=Math.floor(Math.random()*2); }
  if(!/[1]/.test(a)) a='1'+a.slice(1);
  if(!/[1]/.test(b)) b='1'+b.slice(1);
  const lines = addBinDisplay(a,b);
  const ref = refCarry(a,b);
  t('random add sum '+a+'+'+b, lines[4].replace(/\s/g,""), ref.sum);
  t('random add carry '+a+'+'+b, lines[0].slice(3).trimEnd(), ref.row.trimEnd());
}
// complement round trip check
function compCheck(bits){
  let b="1"; for(let i=1;i<bits;i++) b += Math.floor(Math.random()*2);
  const inv = b.split("").map(c=>c==="0"?"1":"0").join("");
  const twos = intToBaseStr(intFromBase(inv,2)+1,2).padStart(bits,"0").slice(-bits);
  const tot = intFromBase(b,2)+intFromBase(twos,2);
  return {bits,b,inv,twos,tot,lenOk: twos.length===bits, sumZero: tot === Math.pow(2,bits)};
}
for(let i=0;i<300;i++){ const r=compCheck(6+Math.floor(Math.random()*3)); if(!r.lenOk||!r.sumZero){ fails++; console.log('FAIL comp',r);} }
console.log('tests run:', n, 'failures:', fails);
