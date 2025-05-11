const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { designTokens } = require('@vertify-ui/primitives'); // Must be a valid JSON or JS module exporting the typed object

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'primary-default': designTokens.colors.primary.default,
        'primary-light': designTokens.colors.primary.light,
        'primary-dark': designTokens.colors.primary.dark,

        'secondary-default': designTokens.colors.secondary.default,
        'secondary-light': designTokens.colors.secondary.light,
        'secondary-lighter': designTokens.colors.secondary.lighter,
        'secondary-dark': designTokens.colors.secondary.dark,

        'text-primary': designTokens.colors.text.primary,
        'text-secondary-default': designTokens.colors.text.secondary.default,
        'text-secondary-light': designTokens.colors.text.secondary.light,
        'text-secondary-dark': designTokens.colors.text.secondary.dark,
        'text-secondary-darker': designTokens.colors.text.secondary.darker,

        'warning-default': designTokens.colors.warning.default,
        'warning-lighter': designTokens.colors.warning.lighter,

        'background-default': designTokens.colors.background.default,
      },
      borderRadius: {
        DEFAULT: `${designTokens.radius.default.value}${designTokens.radius.default.unit}`,
      },
      fontSize: {
        subtitle: designTokens.typography.subtitle.default.fontSize,
      },
      lineHeight: {
        subtitle: designTokens.typography.subtitle.default.lineHeight,
      },
      letterSpacing: {
        subtitle: designTokens.typography.subtitle.default.letterSpacing,
      },
      fontFamily: {
        subtitle1: [designTokens.typography.subtitle.subtitle1.fontType],
        subtitle2: [designTokens.typography.subtitle.subtitle2.fontType],
        subtitle3: [designTokens.typography.subtitle.subtitle3.fontType],
      },
    },
  },
  plugins: [],
};
