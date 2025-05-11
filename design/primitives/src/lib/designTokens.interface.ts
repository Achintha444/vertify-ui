/**
 * Design token structure for color definitions.
 */
export interface ColorTokens {
    primary: {
        default: string;
        light: string;
        dark: string;
    };
    secondary: {
        default: string;
        light: string;
        lighter: string;
        dark: string;
    };
    text: {
        primary: string;
        secondary: {
            default: string;
            light: string;
            lighter: string;
            dark: string;
            darker: string;
        };
    };
    warning: {
        default: string;
        lighter: string;
    };
    background: {
        default: string;
    };
}

/**
 * Token definition for border radius values.
 */
export interface RadiusTokens {
    default: {
        value: number;
        unit: string;
    };
}

/**
 * Token structure for subtitle typography styles.
 */
export interface SubtitleTypography {
    default: {
        letterSpacing: string;
        lineHeight: string;
        fontSize: string;
    };
    subtitle1: {
        fontType: string;
    };
    subtitle2: {
        fontType: string;
    };
    subtitle3: {
        fontType: string;
    };
}

/**
 * Typography design tokens.
 */
export interface TypographyTokens {
    subtitle: SubtitleTypography;
}

/**
 * Root interface for the entire design token system.
 */
export interface DesignTokens {
    colors: ColorTokens;
    radius: RadiusTokens;
    typography: TypographyTokens;
}
