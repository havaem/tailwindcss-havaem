# @tailwindcss-havaem

A plugin that provides a composable API for giving elements a fixed aspect ratio.

## Installation

Install the plugin from npm:

```sh
npm install -D @tailwindcss-havaem
```

Then add the plugin to your `tailwind.config.js` file

```js
// tailwind.config.js
module.exports = {
    theme: {
        // ...
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        require('@tailwindcss/tailwindcss-havaem'),
        // ...
    ],
}
```
