const fs = require('fs');
const html = fs.readFileSync('number-system-lab.html','utf8');
const core = html.split('/* ==================== CORE START ==================== */')[1].split('/* ==================== CORE END ==================== */')[0];
eval(core);

let fails = 0, n = 0;
function t(desc, actual, expected){
  n++;
  if(actual !== expected){ fails++; console.log('FAIL', desc, '=> got', JSON.stringify(actual), 'expected', JSON.stringify(expected)); }
}
// basic conversions
t('45 dec->bin', convert('45',10,2).str, '101101');
t('45 dec->oct', convert('45',10,8).str, '55');
t('45 dec->hex', convert('45',10,16).str, '2D');
t('156 dec->hex', convert('156',10,16).str, '9C');
t('156 dec->oct', convert('156',10,8).str, '234');
t('156 dec->bin', convert('156',10,2).str, '10011100');
t('1011.101 bin->dec', convert('1011.101',2,10).str, '11.625');
t('1101 bin->dec', convert('1101',2,10).str, '13');
t('745 oct->dec', convert('745',8,10).str, '485');
t('2F3 hex->dec', convert('2F3',16,10).str, '755');
t('101101 bin->oct', convert('101101',2,8).str, '55');
t('101101 bin->hex', convert('101101',2,16).str, '2D');
t('11011010 bin->hex', convert('11011010',2,16).str, 'DA');
t('11011010 bin->oct', convert('11011010',2,8).str, '332');
t('2F3 hex->oct', convert('2F3',16,8).str, '1363');
t('745 oct->hex', convert('745',8,16).str, '1E5');
t('745 oct->bin', convert('745',8,2).str, '111100101');
t('0.6875 dec->bin', convert('0.6875',10,2).str, '1011'.padStart(5,'0'));
t('13.625 dec->bin', convert('13.625',10,2).str, '1101.101');
t('25.625 dec->bin', convert('25.625',10,2).str, '11001.101');
t('0.625 dec->oct', convert('0.625',10,8).str, '0.5');
t('0.625 dec->hex', convert('0.625',10,16).str, '0.A');
t('255 dec->bin', convert('255',10,2).str, '11111111');
t('255 dec->hex', convert('255',10,16).str, 'FF');
t('77 oct->dec', convert('77',8,10).str, '63');
t('1A hex->dec', convert('1A',16,10).str, '26');
t('345 base7 -> dec', convert('345',7,10).str, '180');
t('2101 base3 -> dec', convert('2101',3,10).str, '64');
t('1000 dec->hex', convert('1000',10,16).str, '3E8');
t('1000 dec->oct', convert('1000',10,8).str, '1750');
t('1AC hex->bin', convert('1AC',16,2).str, '110101100');
t('435 oct->bin', convert('435',8,2).str, '100011101');
t('2C5 hex->oct', convert('2C5',16,8).str, '1305');
t('inverse: 45 dec->bin->dec', convert(convert('45',10,2).str,2,10).str, '45');
t('inverse: 156 dec->hex->dec', convert(convert('156',10,16).str,16,10).str, '156');
// validate
t('validate 8 in octal', typeof validate('289',8) === 'string', true);
t('validate 2 in binary', typeof validate('102',2) === 'string', true);
t('validate ok hex', validate('2F3',16), null);
t('validate ok bin', validate('1011',2), null);
// step content sanity: decimal->binary division steps exist
const r = convert('45',10,2);
t('has steps', r.steps.length > 0, true);
t('step has 45 ÷', r.steps[0].lines.join('\n').includes('45'), true);
// fraction non-terminating
const r2 = convert('0.35',10,2);
t('0.35 approx prefix', r2.str.startsWith('0.01011'), true);
// bases not in {2,8,16}
t('base7->base3', convert('345',7,3).value, 180);
t('base7->base3 str', convert('345',7,3).str, intToBaseStr(180,3));
function intToBaseStr(n,b){ let o=''; while(n>0){ o = DIGITS[n%b]+o; n=Math.floor(n/b);} return o||'0'; }
// round trip random tests across bases
const bases=[2,3,5,7,8,10,12,16];
for(let i=0;i<400;i++){
  const b = bases[Math.floor(Math.random()*bases.length)];
  const n = Math.floor(Math.random()*5000);
  const s = intToBaseStr(n,b);
  for(const tb of bases){
    const got = convert(s,b,tb).str;
    const exp = intToBaseStr(n,tb);
    if(got !== exp){ fails++; n_dummy=n; console.log('FAIL roundtrip', s, 'base', b, '->', tb, 'got', got, 'exp', exp); }
  }
}
console.log('tests run:', n, 'failures:', fails);
