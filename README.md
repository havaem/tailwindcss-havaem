# @tailwindcss-havaem

A plugin that provides a set of utilities for the [Havaem](https://havaem.com) design system.

## Installation

Install the plugin from npm:

```sh
npm i -D @havaem/tailwindcss-havaem
```

Then add the plugin to your `tailwind.config.js` file

```js
// tailwind.config.js
module.exports = {
    theme: {
        // ...
    },
    plugins: [
        require('@havaem/tailwindcss-havaem'),
        // ...
    ],
}
```

## Usage

```html
<div class="flex-center"></div>
<div class="flex-center-x"></div>
<div class="flex-center-y"></div>
<div class="inline-flex-center"></div>
<div class="inline-flex-center-x"></div>
<div class="inline-flex-center-y"></div>
<div class="absolute-center"></div>
<div class="absolute-center-x"></div>
<div class="absolute-center-y"></div>
```
