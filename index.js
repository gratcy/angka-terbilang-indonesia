// Definisi Array Angka dan Satuan
const langArr = {
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
    koma: 'koma'
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
    nol: 'nol',
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
    tigabelas: 'thirteen'
  }
}

var arrAngka =  langArr.id.angka
var arrSatuan = langArr.id.satuan
var lang = 'id'

// toTerbilang Function
function toTerbilang(strAngka, config={dec: '.', lang: 'id'}) {
  strAngka = String(strAngka)
  angkaArr = strAngka.split(config.dec || '.', strAngka)
  
  if (config.lang === 'en') {
    arrAngka =  langArr.en.angka
    arrSatuan = langArr.en.satuan
    lang = 'en'
  }

  strA = ''
  for (let i=0;i<angkaArr.length;++i) {
    if (i === 1) {
      strA += ` ${langArr[lang].koma} ` + terbilang(angkaArr[i]) 
    } else {
      strA += terbilang(angkaArr[i])
    }
  }

  return strA.trim()
}

function replaceString(str, rep) {
  console.log(str, rep)
  return str.replace(rep, '');
}

function terbilang(strAngka) {
  // Jika Inputan Bukan Angka Maka Return Error
  if (isNaN(strAngka)) {
    return 'Error, input is not a valid number!'
  }

  // Cari Panjang Angka String
  const lenAngka = strAngka.length - 1

  // Jika Panjang Angka Nol dan Angka Pertama adalah Nol Maka Proses Nol
  if (lenAngka === 0 && Number(strAngka[0]) === 0) {
    return langArr[lang].nol
  }

  // Jika Angka Over dari Satuan Maka Return Error
  if ((lenAngka / 3) > arrSatuan.length) {
    return "Error, number is to big!"
  }

  // Set Variabel Hasil Konversi
  let resTerbilang = ''

  // Set Penghitung Nol
  let cntZero = 0

  // Loop Angka String dan Konversi
  for (let i=0; i <= lenAngka; i++) {
    // Set Variable Sementara Hasil Konversi
    let tmpTerbilang = ''

    // Cari Posisi Digit
    let posDigit = lenAngka - i
    let grpDigit = posDigit % 3

    // Konversi Angka String ke Angka Integer
    let intAngka = Number(strAngka[i])

    // Konversi Angka ke Bilangan
    switch (intAngka) {
      case 1:
        switch (grpDigit) {
          case 2:
            // Proses Ratusan
            tmpTerbilang += langArr[lang].seratus
            break

          case 1:
            // Konversi Angka String Selanjutnya ke Angka Integer Selanjutnya
            let nextIntAngka = Number(strAngka[i+1])

            switch (nextIntAngka) {
              case 1:
                // Proses Sebelas
                tmpTerbilang += langArr[lang].sebelas
                break

              case 0:
                // Proses Sepuluh
                tmpTerbilang += langArr[lang].sepuluh
                break

              default:
                // Proses Belasan
                if (lang === 'en') {
                  if (arrAngka[nextIntAngka] === 'two') {
                    tmpTerbilang += langArr[lang].duabelas
                  } else if (arrAngka[nextIntAngka] === 'three') {
                    tmpTerbilang += langArr[lang].tigabelas
                  } else {
                    tmpTerbilang += langArr[lang][arrAngka[nextIntAngka]] + langArr[lang].belas, arrAngka[nextIntAngka]
                  }
                } else {
                  tmpTerbilang += arrAngka[nextIntAngka] + ` ${langArr[lang].belas}`
                }
                break
            }

            // Skip Angka Selanjutnya
            i++

            // Cari Ulang Posisi Digit
            posDigit--
            grpDigit--
            break

          case 0:
            if ((intAngka === 1 && posDigit === 3) && (cntZero === 2 || lenAngka === 3)) {
              // Tambah Spasi
              if (resTerbilang !== '') {
                resTerbilang += ' '
              }

              // Proses Seribu
              resTerbilang += langArr[lang].seribu

              // Reset Penghitung Nol
              cntZero = 0
              continue
            } else {
              // Proses Satu
              tmpTerbilang += arrAngka[intAngka]
            }
        }
        break

      case 0:
        // Hitung Nol
        cntZero++
        break
      
      default:
        // Proses Angka
        tmpTerbilang += arrAngka[intAngka]
        switch (grpDigit) {
          case 2:
            // Proses Ratusan
            tmpTerbilang += ` ${langArr[lang].ratus}`
            break

          case 1:
            // Proses Puluhan
            if (lang === 'en') {
              tmpTerbilang += langArr[lang][arrAngka[intAngka]] + langArr[lang].puluh, arrAngka[intAngka]
              tmpTerbilang = replaceString(tmpTerbilang, arrAngka[intAngka])
            } else {
              tmpTerbilang += ` ${langArr[lang].puluh}`
            }
            break
        }
        break
    }

    // Prepand Spasi
    if (tmpTerbilang !== '') {
      // Tambah Spasi      
      if (resTerbilang !== '') {
        resTerbilang += ' ' + tmpTerbilang
      } else {
        resTerbilang += tmpTerbilang
      }
    }

    // Cari Posisi Satuan
    let posSatuan = posDigit / 3

    // Konversi Satuan
    if (grpDigit === 0 && posSatuan !== 0) {
      if (cntZero !== 3) {
        // Proses Satuan
        resTerbilang += ' ' + arrSatuan[posSatuan]
      }

      // Reset Pneghitung Nol
      cntZero = 0
    }
  }
  
  // Trim Hasil Konversi dan Return
  return resTerbilang
}

module.exports = {
  toTerbilang
}
