[![NPM](https://nodei.co/npm/@gratcy/angka-terbilang-indonesia.svg?style=compact&color=brightgreen)](https://nodei.co/npm/@gratcy/angka-terbilang-indonesia/)

# Number or Amount to Words

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

| Power | Unit (Indonesian) | English Equivalent |
| ----- | ----------------- | ------------------ |
| 10¹   | puluhan           | tens               |
| 10²   | ratusan           | hundreds           |
| 10³   | ribu              | thousands          |
| 10⁶   | juta              | millions           |
| 10⁹   | milyar            | billions           |
| 10¹²  | triliun           | trillions          |
| 10¹⁵  | kuadriliun        | quadrillions       |
| 10¹⁸  | kuintiliun        | quintillions       |
| 10²¹  | sekstiliun        | sextillions        |
| 10²⁴  | septiliun         | septillions        |
| 10²⁷  | oktiliun          | octillions         |
| 10³⁰  | noniliun          | nonillions         |
| 10³³  | desiliun          | decillions         |
| 10³⁶  | undesiliun        | undecillions       |
| 10³⁹  | duodesiliun       | duodecillions      |
| 10⁴²  | tredesiliun       | tredecillions      |
| 10⁴⁵  | quattuordesiliun  | quattuordecillions |
| 10⁴⁸  | quindesiliun      | quindecillions     |
| 10⁵¹  | seksdesiliun      | sexdecillions      |
| 10⁵⁴  | septendesiliun    | septendecillions   |
| 10⁵⁷  | oktodesiliun      | octodecillions     |
| 10⁶⁰  | novemdesiliun     | novemdecillions    |
| 10⁶³  | vigintiliun       | vigintillions      |

---

## Notes

This package was originally created for internal use in the **Bareksa Payment Tribe**.

---

## Forked & Modified From

Original repository: [dimaskiddo/angka-terbilang-nodejs](https://github.com/dimaskiddo/angka-terbilang-nodejs)

---

## License

This project is licensed under the [Beerware License](./LICENSE).
