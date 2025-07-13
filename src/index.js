const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(
    ({ } = {}) => {
        return function ({ addVariant, addUtilities }) {
            addVariant('hocus', ['&:hover', '&:focus']);
            addVariant('inverted-colors', '@media (inverted-colors: inverted)');
            addVariant('not-first', '&:not(:first-child)');
            addVariant('not-last', '&:not(:last-child)');
            addVariant('fullscreen', '&:fullscreen');
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
                '.absolute-center': {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                },
                '.absolute-center-x': {
                    position: 'absolute',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                },
                '.absolute-center-y': {
                    position: 'absolute',
                    top: '50%',
                    transform: 'translate(0, -50%)',
                },
            });
        };
    },
    () => {
        return {
        };
    }
);
