const fs=require('fs');
const html=fs.readFileSync('number-system-lab.html','utf8');
const core=html.split('/* ==================== CORE START ==================== */')[1].split('/* ==================== CORE END ==================== */')[0];
eval(core);
let fails=0,n=0;
function t(d,a,e){n++;if(a!==e){fails++;console.log('FAIL',d,a,e);}}
function addBinDisplay(a,b){
  const len=Math.max(a.length,b.length);
  const A=a.padStart(len,"0"),B=b.padStart(len,"0");
  const carries=new Array(len).fill(0); let carry=0,sum="";
  for(let i=len-1;i>=0;i--){const s=Number(A[i])+Number(B[i])+carry;carries[i]=carry;sum=(s%2)+sum;carry=s>=2?1:0;}
  const carryRow=(carry?"1":" ")+" "+carries.slice().reverse().join(" ");
  return {sum:(carry?"1":"")+sum, row:carryRow, carries, final:carry};
}
function refCarry(a,b){
  const len=Math.max(a.length,b.length);a=a.padStart(len,'0');b=b.padStart(len,'0');
  let carry=0,sum='';const carries=[];
  for(let i=len-1;i>=0;i--){const s=+a[i]+ +b[i]+carry;carries[i]=carry;sum=(s%2)+sum;carry=s>=2?1:0;}
  return {sum:(carry?'1':'')+sum,row:(carry?'1 ':'  ')+carries.slice().reverse().join(' ')};
}
for(let i=0;i<3000;i++){
  const L=1+Math.floor(Math.random()*8);
  let a='',b='';
  for(let j=0;j<L;j++){a+=Math.floor(Math.random()*2);b+=Math.floor(Math.random()*2);}
  a=(a.replace(/0/g,'')?a:'1'+a.slice(1)); b=(b.replace(/0/g,'')?b:'1'+b.slice(1));
  const got=addBinDisplay(a,b), ref=refCarry(a,b);
  t('sum '+a+'+'+b, got.sum, ref.sum);
  t('carry '+a+'+'+b, got.row, ref.row);
  t('dec '+a+'+'+b, intFromBase(a,2)+intFromBase(b,2), intFromBase(ref.sum,2));
}
console.log('addBinDisplay randomized tests:',n,'failures:',fails);
