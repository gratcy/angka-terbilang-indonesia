[![NPM](https://nodei.co/npm/@gratcy/angka-terbilang-indonesia.svg?style=compact&color=brightgreen)](https://nodei.co/npm/@gratcy/angka-terbilang-indonesia/)

# Angka to Terbilang

Convert numbers into their word representation in **Bahasa Indonesia** or **English**.

Examples:

- `123` → `seratus dua puluh tiga` (Indonesian)
- `123.45` → `seratus dua puluh tiga koma empat lima`
- `123` → `one hundred twenty three` (English)
- `123.45` → `one hundred twenty three and four five`

## Installation

### Using **npm**

```bash
npm install @gratcy/angka-terbilang-indonesia
```

### Using **yarn**

```bash
yarn add @gratcy/angka-terbilang-indonesia
```

### Using **CDN**

```html
<script src="https://unpkg.com/@gratcy/angka-terbilang-indonesia/build/index.min.js"></script>
```

---

## Usage

### JavaScript

```js
"use strict";
const angka = require("@gratcy/angka-terbilang-indonesia");

console.log(angka.toTerbilang(1123)); // seribu seratus dua puluh tiga
console.log(angka.toTerbilang(1123, { dec: ".", lang: "en" })); // one thousand one hundred twenty three
console.log(angka.toTerbilang(1123.57)); // seribu seratus dua puluh tiga koma lima tujuh
console.log(angka.toTerbilang(1123.57, { dec: ".", lang: "en" })); // one thousand one hundred twenty three and five seven
```

### TypeScript

```ts
"use strict";
import toTerbilang from "@gratcy/angka-terbilang-indonesia";

console.log(toTerbilang(1123, { dec: ",", lang: "id" }));
console.log(toTerbilang(1123.57, { dec: ",", lang: "en" }));
```

---

## Options

| Option | Type     | Description                                         | Default |
| ------ | -------- | --------------------------------------------------- | ------- |
| `lang` | `string` | Language: `'id'` for Indonesian, `'en'` for English | `'id'`  |
| `dec`  | `string` | Decimal separator character                         | `'.'`   |

---

## Supports Large Numbers (up to 10⁶³)

| Power | Unit             |
| ----- | ---------------- |
| 10¹   | puluhan          |
| 10²   | ratusan          |
| 10³   | ribu             |
| 10⁶   | juta             |
| 10⁹   | milyar           |
| 10¹²  | triliun          |
| 10¹⁵  | quadriliun       |
| 10¹⁸  | quintiliun       |
| 10²¹  | sextiliun        |
| 10²⁴  | septiliun        |
| 10²⁷  | oktiliun         |
| 10³⁰  | noniliun         |
| 10³³  | desiliun         |
| 10³⁶  | undesiliun       |
| 10³⁹  | duodesiliun      |
| 10⁴²  | tredesiliun      |
| 10⁴⁵  | quattuordesiliun |
| 10⁴⁸  | quindesiliun     |
| 10⁵¹  | sexdesiliun      |
| 10⁵⁴  | septendesiliun   |
| 10⁵⁷  | oktodesiliun     |
| 10⁶⁰  | novemdesiliun    |
| 10⁶³  | vigintiliun      |

---

## Notes

This package was originally created for internal use in the **Bareksa Payment Tribe**.

---

## Forked & Modified From

Original repository: [dimaskiddo/angka-terbilang-nodejs](https://github.com/dimaskiddo/angka-terbilang-nodejs)

---

## License

This project is licensed under the [Beerware License](./LICENSE).
