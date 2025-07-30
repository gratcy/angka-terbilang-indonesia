This fork from `https://github.com/dimaskiddo/angka-terbilang-nodejs`

# Angka to Terbilang [![NPM Version](https://img.shields.io/badge/npm-v6.13.4-blue)](https://www.npmjs.com/package/@gratcy/angka-terbilang-indonesia) [![Minified Size](https://img.shields.io/badge/minified_size-3.7Kib-blue)](https://www.npmjs.com/package/@gratcy/angka-terbilang-indonesia) [![NPM Downloads](https://img.shields.io/badge/downloads-464K-green)](https://www.npmjs.com/package/@gratcy/angka-terbilang-indonesia)
Mengkonversi angka ke dalam bilangan bahasa Indonesia dan bahasa Inggris. Misalnya dari `123`, menjadi `seratus dua puluh tiga`. Atau bisa juga `123.45` menjadi `seratus dua puluh tiga koma empat lima`. Bisa juga kedalam bahasa inggris menjadi `one hundred twenty three` dan `one hundred twenty three and four five`.

## Instalasi

### via **npm**:
```
npm install @gratcy/angka-terbilang-indonesia
```
### via **yarn**:
```
yarn add @gratcy/angka-terbilang-indonesia
```

atau langsung dari web browser

```html
<script src="https://unpkg.com/@gratcy/angka-terbilang-indonesia/build/index.min.js">
```

## Penggunaan
Javascript user
```js
'use strict'
const angkaTerbilang = require('@gratcy/angka-terbilang-indonesia')

console.log(angka.toTerbilang(1123)) // seribu seratus dua puluh tiga
console.log(angka.toTerbilang(1123, { dec: '.', lang: 'en'})) // one thousand one hundred twenty three
console.log(angka.toTerbilang(1123.57)) // seribu seratus dua puluh tiga koma lima tujuh
console.log(angka.toTerbilang(1123.57, { dec: '.', lang: 'en'})) // one thousand one hundred twenty three

```

Typescript user
```ts
'use strict'
import toTerbilang from '@gratcy/angka-terbilang-indonesia'

console.log(toTerbilang(1123, { dec: ',', lang: 'id' }))
console.log(toTerbilang(1123.57, { dec: ',', lang: 'en' }))

```

## Option Parameter
| Keterangan    | Parameter  | Value               |
| --------------|------------|---------------------|
| Bahasa        | `lang`     | `default: id `      |
|               |            | `id: Indonesia`     |
|               |            | `en: Inggris`       |
| Desimal   	| `dec`      | `default: .`        |

## Mendukung bilangan besar, hingga 10<sup>63</sup>.

| Angka           | Satuan           |
|:---------------:|:----------------:|
| 10<sup>1</sup>  | puluhan          |
| 10<sup>2</sup>  | ratusan          |
| 10<sup>3</sup>  | ribu             |
| 10<sup>6</sup>  | juta             |
| 10<sup>9</sup>  | milyar           |
| 10<sup>12</sup> | triliun          |
| 10<sup>15</sup> | quadriliun       |
| 10<sup>18</sup> | quintiliun       |
| 10<sup>21</sup> | sextiliun        |
| 10<sup>24</sup> | septiliun        |
| 10<sup>27</sup> | oktiliun         |
| 10<sup>30</sup> | noniliun         |
| 10<sup>33</sup> | desiliun         |
| 10<sup>36</sup> | undesiliun       |
| 10<sup>39</sup> | duodesiliun      |
| 10<sup>42</sup> | tredesiliun      |
| 10<sup>45</sup> | quattuordesiliun |
| 10<sup>48</sup> | quindesiliun     |
| 10<sup>51</sup> | sexdesiliun      |
| 10<sup>54</sup> | septendesiliun   |
| 10<sup>57</sup> | oktodesiliun     |
| 10<sup>60</sup> | novemdesiliun    |
| 10<sup>63</sup> | vigintiliun      |

## Catatan
Dibuat untuk kebutuhan Bareksa Payment Tribe

## License
Licensed under [Beerware](./LICENSE).