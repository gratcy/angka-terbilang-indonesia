// Definisi Array Angka dan Satuan
type LangKey = 'id' | 'en';
interface LangArr {
  [key: string]: {
    angka: string[];
    satuan: string[];
    sepuluh: string;
    sebelas: string;
    belas: string;
    seratus: string;
    seribu: string;
    puluh: string;
    ratus: string;
    nol: string;
    koma: string;
    two?: string;
    three?: string;
    four?: string;
    five?: string;
    six?: string;
    seven?: string;
    eight?: string;
    nine?: string;
    duabelas?: string;
    tigabelas?: string;
  };
}

const langArr: LangArr = {
  id: {
    angka: ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'],
    satuan: ['', 'ribu', 'juta', 'milyar', 'triliun', 'quadriliun', 'quintiliun', 'sextiliun', 'septiliun', 'oktiliun', 'noniliun', 'desiliun', 'undesiliun', 'duodesiliun', 'tredesiliun', 'quattuordesiliun', 'quindesiliun', 'sexdesiliun', 'septendesiliun', 'oktodesiliun', 'novemdesiliun', 'vigintiliun'],
    sepuluh: 'sepuluh',
    sebelas: 'sebelas',
    belas: 'belas',
    seratus: 'seratus',
    seribu: 'seribu',
    puluh: 'puluh',
    ratus: 'ratus',
    nol: 'nol',
    koma: 'koma',
  },
  en: {
    angka: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    satuan: ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecilion', 'quattuordecilion', 'quindecilion', 'sexdecilion', 'septendecilion', 'octodecilion', 'novemdesiliun', 'vigintillion'],
    sepuluh: 'ten',
    sebelas: 'eleven',
    belas: 'teen',
    seratus: 'one hundred',
    seribu: 'one thousand',
    puluh: 'ty',
    ratus: 'hundred',
    nol: 'zero',
    koma: 'and',
    two: 'twen',
    three: 'thir',
    four: 'for',
    five: 'fif',
    six: 'six',
    seven: 'seven',
    eight: 'eight',
    nine: 'nine',
    duabelas: 'twelve',
    tigabelas: 'thirteen',
  },
};

interface ToTerbilangConfig {
  dec?: string;
  lang?: LangKey;
}

let arrAngka: string[] = langArr.id.angka;
let arrSatuan: string[] = langArr.id.satuan;
let lang: LangKey = 'id';

export function toTerbilang(strAngka: string | number, config: ToTerbilangConfig = { dec: '.', lang: 'id' }): string {
  strAngka = String(strAngka);
  const angkaArr = strAngka.split(config.dec || '.');
  if (config.lang === 'en') {
    arrAngka = langArr.en.angka;
    arrSatuan = langArr.en.satuan;
    lang = 'en';
  } else {
    arrAngka = langArr.id.angka;
    arrSatuan = langArr.id.satuan;
    lang = 'id';
  }
  let strA = '';
  for (let i = 0; i < angkaArr.length; ++i) {
    if (i === 1) {
      strA += ` ${langArr[lang].koma} ` + terbilangDecimal(angkaArr[i]);
    } else {
      strA += terbilang(angkaArr[i]);
    }
  }
  return strA.trim();
}

function replaceString(str: string, rep: string): string {
  return str.replace(rep, '');
}

function terbilangDecimal (strAngka: string) : string {
  let angkaArr = strAngka.split('')
  let str = ''
  for(let i = 0; i <= angkaArr.length; ++i) {
    if (angkaArr[i] === '0') {
      str += ' ' + langArr[lang].nol
    } else {
      if (angkaArr[i]) {
        str += ' ' + langArr[lang].angka[parseInt(angkaArr[i])]
      }
    }
  }

  return str.trim()
}

function terbilang(strAngka: string): string {
  if (isNaN(Number(strAngka))) {
    return 'Error, input is not a valid number!';
  }
  const lenAngka = strAngka.length - 1;
  if (lenAngka === 0 && Number(strAngka[0]) === 0) {
    return langArr[lang].nol;
  }
  if (lenAngka / 3 > arrSatuan.length) {
    return 'Error, number is to big!';
  }
  let resTerbilang = '';
  let cntZero = 0;
  for (let i = 0; i <= lenAngka; i++) {
    let tmpTerbilang = '';
    let posDigit = lenAngka - i;
    let grpDigit = posDigit % 3;
    let intAngka = Number(strAngka[i]);
    switch (intAngka) {
      case 1:
        switch (grpDigit) {
          case 2:
            tmpTerbilang += langArr[lang].seratus;
            break;
          case 1: {
            let nextIntAngka = Number(strAngka[i + 1]);
            switch (nextIntAngka) {
              case 1:
                tmpTerbilang += langArr[lang].sebelas;
                break;
              case 0:
                tmpTerbilang += langArr[lang].sepuluh;
                break;
              default:
                if (lang === 'en') {
                  if (arrAngka[nextIntAngka] === 'two') {
                    tmpTerbilang += langArr[lang].duabelas;
                  } else if (arrAngka[nextIntAngka] === 'three') {
                    tmpTerbilang += langArr[lang].tigabelas;
                  } else {
                    // Type-safe teen prefix lookup
                    const teenPrefixes: Record<string, string | undefined> = {
                      one: '',
                      two: langArr[lang].two,
                      three: langArr[lang].three,
                      four: langArr[lang].four,
                      five: langArr[lang].five,
                      six: langArr[lang].six,
                      seven: langArr[lang].seven,
                      eight: langArr[lang].eight,
                      nine: langArr[lang].nine,
                    };
                    const prefix = teenPrefixes[arrAngka[nextIntAngka]] ?? '';
                    tmpTerbilang += prefix + langArr[lang].belas;
                  }
                } else {
                  tmpTerbilang += arrAngka[nextIntAngka] + ` ${langArr[lang].belas}`;
                }
                break;
            }
            i++;
            posDigit--;
            grpDigit--;
            break;
          }
          case 0:
            if ((intAngka === 1 && posDigit === 3) && (cntZero === 2 || lenAngka === 3)) {
              if (resTerbilang !== '') {
                resTerbilang += ' ';
              }
              resTerbilang += langArr[lang].seribu;
              cntZero = 0;
              continue;
            } else {
              tmpTerbilang += arrAngka[intAngka];
            }
            break;
        }
        break;
      case 0:
        cntZero++;
        break;
      default:
        tmpTerbilang += arrAngka[intAngka];
        switch (grpDigit) {
          case 2:
            tmpTerbilang += ` ${langArr[lang].ratus}`;
            break;
          case 1:
            if (lang === 'en') {
              // Type-safe puluh prefix lookup
              const puluhPrefixes: Record<string, string | undefined> = {
                one: '',
                two: langArr[lang].two,
                three: langArr[lang].three,
                four: langArr[lang].four,
                five: langArr[lang].five,
                six: langArr[lang].six,
                seven: langArr[lang].seven,
                eight: langArr[lang].eight,
                nine: langArr[lang].nine,
              };
              const prefix = puluhPrefixes[arrAngka[intAngka]] ?? '';
              tmpTerbilang += prefix + langArr[lang].puluh;
              tmpTerbilang = replaceString(tmpTerbilang, arrAngka[intAngka]);
            } else {
              tmpTerbilang += ` ${langArr[lang].puluh}`;
            }
            break;
        }
        break;
    }
    if (tmpTerbilang !== '') {
      if (resTerbilang !== '') {
        resTerbilang += ' ' + tmpTerbilang;
      } else {
        resTerbilang += tmpTerbilang;
      }
    }
    let posSatuan = posDigit / 3;
    if (grpDigit === 0 && posSatuan !== 0) {
      if (cntZero !== 3) {
        resTerbilang += ' ' + arrSatuan[posSatuan];
      }
      cntZero = 0;
    }
  }
  return resTerbilang;
}

export default toTerbilang; 