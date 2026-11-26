const plugin = require('tailwindcss/plugin');

// withOptions (no options yet) keeps `require('@havaem/tailwindcss-havaem')()` working for v3 users
module.exports = plugin.withOptions(() => {
    return function ({ addVariant, addUtilities }) {
        addVariant('hocus', ['&:hover', '&:focus']);
        addVariant('hocus-visible', ['&:hover', '&:focus-visible']);
        addVariant('fullscreen', '&:fullscreen');
        // built into Tailwind v4.1+ (same output); kept so Tailwind v3 still has them
        addVariant('not-first', '&:not(:first-child)');
        addVariant('not-last', '&:not(:last-child)');
        addVariant('inverted-colors', '@media (inverted-colors: inverted)');
        addUtilities({
            '.flex-center': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            '.flex-center-x': {
                display: 'flex',
                justifyContent: 'center',
            },
            '.flex-center-y': {
                display: 'flex',
                alignItems: 'center',
            },
            '.inline-flex-center': {
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            '.inline-flex-center-x': {
                display: 'inline-flex',
                justifyContent: 'center',
            },
            '.inline-flex-center-y': {
                display: 'inline-flex',
                alignItems: 'center',
            },
            // `translate` property (not `transform`) so rotate/scale utilities don't override the centering
            '.absolute-center': {
                position: 'absolute',
                top: '50%',
                left: '50%',
                translate: '-50% -50%',
            },
            '.absolute-center-x': {
                position: 'absolute',
                left: '50%',
                translate: '-50% 0',
            },
            '.absolute-center-y': {
                position: 'absolute',
                top: '50%',
                translate: '0 -50%',
            },
        });
    };
});
