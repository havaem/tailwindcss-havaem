const { test, expect } = require('bun:test')
const { compile } = require('tailwindcss')

async function build(candidates) {
    const { build } = await compile('@plugin "plugin";\n@tailwind utilities;', {
        base: __dirname,
        loadModule: async () => ({ module: require('../src'), base: __dirname }),
    })
    return build(candidates)
}

test('utilities', async () => {
    const css = await build(['flex-center', 'inline-flex-center-y', 'absolute-center', 'absolute-center-x'])
    expect(css).toContain('.flex-center')
    expect(css).toContain('.inline-flex-center-y')
    expect(css).toMatch(/\.absolute-center \{[^}]*translate: -50% -50%/)
    expect(css).toMatch(/\.absolute-center-x \{[^}]*translate: -50% 0/)
    expect(css).not.toContain('transform')
})

test('variants', async () => {
    const css = await build(['hocus:underline', 'hocus-visible:underline', 'fullscreen:underline'])
    expect(css).toContain(':focus')
    expect(css).toContain(':focus-visible')
    expect(css).toContain(':fullscreen')
})
