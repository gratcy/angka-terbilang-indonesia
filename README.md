This fork from `https://github.com/dimaskiddo/angka-terbilang-nodejs`

# Angka-terbilang-indonesia [![NPM Version](https://img.shields.io/badge/npm-v6.13.4-blue)](https://www.npmjs.com/package/@gratcy/angka-terbilang-indonesia) [![Minified Size](https://img.shields.io/badge/minified_size-1.3Kib-blue)](https://www.npmjs.com/package/@gratcy/angka-terbilang-indonesia) [![NPM Downloads](https://img.shields.io/badge/downloads-464K-green)](https://www.npmjs.com/package/@gratcy/angka-terbilang-indonesia)
Mengkonversi angka ke dalam bilangan bahasa Indonesia. Misalnya dari `123`, menjadi `seratus dua puluh tiga`. Atau bisa juga `123.45` menjadi `seratus dua puluh tiga koma empat puluh lima`

## Instalasi

```
npm install angka-terbilang-indonesia
```

atau langsung dari web browser

```
<script src="https://unpkg.com/@gratcy/angka-terbilang-indonesia/index.min.js">
```

## Penggunaan

```js
'use strict'
const angkaTerbilang = require('angka-terbilang-indonesia')

console.log(angka.toTerbilang(10123))
console.log(angka.toTerbilang(10123.57))
```

## Catatan
Dibuat untuk kebutuhan Bareksa Payment Tribe