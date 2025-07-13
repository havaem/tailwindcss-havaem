# @havaem/tailwindcss-havaem

A Tailwind CSS plugin that provides a set of layout utilities and custom variants for the [Havaem](https://havaem.com) design system.

## Installation

Install the plugin from npm:

```sh
npm i -D @havaem/tailwindcss-havaem
```

Then add the plugin to your main `style.css` file:

```diff
  @import "tailwindcss";
+ @plugin "@havaem/tailwindcss-havaem";
```

If you are still using **Tailwind CSS v3**, add the plugin to your `tailwind.config.js` file:

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

## Features

-   **Variants**:

    -   `hocus`: Applies styles on hover or focus (`:hover`, `:focus`)
    -   `inverted-colors`: Targets media with inverted colors
    -   `not-first`: Targets elements that are not the first child
    -   `not-last`: Targets elements that are not the last child
    -   `fullscreen`: Targets elements in fullscreen mode

-   **Utilities**:
    -   `.flex-center`, `.flex-center-x`, `.flex-center-y`
    -   `.inline-flex-center`, `.inline-flex-center-x`, `.inline-flex-center-y`
    -   `.absolute-center`, `.absolute-center-x`, `.absolute-center-y`

### Layout Utilities

-   **`.flex-center`**  
    Centers content both vertically and horizontally using `display: flex; align-items: center; justify-content: center;`.

-   **`.flex-center-x`**  
    Centers content horizontally only (`display: flex; justify-content: center;`).

-   **`.flex-center-y`**  
    Centers content vertically only (`display: flex; align-items: center;`).

-   **`.inline-flex-center`**  
    Same as `.flex-center` but uses `display: inline-flex;`.

-   **`.inline-flex-center-x`**  
    Same as `.flex-center-x` but uses `display: inline-flex;`.

-   **`.inline-flex-center-y`**  
    Same as `.flex-center-y` but uses `display: inline-flex;`.

-   **`.absolute-center`**  
    Absolutely positions the element at the center of its parent (`position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);`).

-   **`.absolute-center-x`**  
    Absolutely positions the element at the horizontal center (`position: absolute; left: 50%; transform: translateX(-50%);`).

-   **`.absolute-center-y`**  
    Absolutely positions the element at the vertical center (`position: absolute; top: 50%; transform: translateY(-50%);`).

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
