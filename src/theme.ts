import type { CSSProperties } from "react";
import { createTheme } from "@mui/material/styles";

// Palette carried over from the original theme file: dark grey ink on off-white
// paper with one blue accent for links. The accent is darker than the original
// #007BFF, which only reached 4.0:1 on white and failed WCAG AA for link text.
// #0A5BD3 is 5.8:1 on the page background and 6.1:1 under white text.
export const colors = {
    ink: "#333333",
    paper: "#FAFAFA",
    surface: "#FFFFFF",
    border: "#E0E0E0",
    accent: "#0A5BD3",
    muted: "#5C5C5C",
} as const;

const displayFont = '"Bebas Neue", "Arial Narrow", Impact, sans-serif';
const bodyFont = '"Montserrat Variable", system-ui, -apple-system, "Segoe UI", sans-serif';

declare module "@mui/material/styles" {
    interface TypographyVariants {
        tagline: CSSProperties;
    }
    interface TypographyVariantsOptions {
        tagline?: CSSProperties;
    }
}

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        tagline: true;
    }
}

const display = { fontFamily: displayFont, fontWeight: 400, letterSpacing: "0.01em" };

const theme = createTheme({
    palette: {
        primary: { main: colors.ink, contrastText: colors.paper },
        secondary: { main: colors.accent },
        background: { default: colors.paper, paper: colors.surface },
        text: { primary: colors.ink, secondary: colors.muted },
        divider: colors.border,
    },
    shape: { borderRadius: 6 },
    typography: {
        fontFamily: bodyFont,
        // Roles: h1 is the name, h2 a section heading, h3 a card title.
        h1: { ...display, fontSize: "clamp(3rem, 11vw, 6rem)", lineHeight: 1 },
        h2: { ...display, fontSize: "2.25rem", lineHeight: 1.1 },
        h3: { ...display, fontSize: "1.375rem", lineHeight: 1.15 },
        h4: { ...display, fontSize: "1.75rem", lineHeight: 1.15 },
        h5: { ...display, fontSize: "1.5rem", lineHeight: 1.2 },
        h6: { ...display, fontSize: "1.25rem", lineHeight: 1.2 },
        // The line under the name in the hero.
        tagline: { fontFamily: bodyFont, fontWeight: 400, fontSize: "clamp(1.5rem, 5vw, 2.75rem)", lineHeight: 1.15 },
        body1: { fontSize: "1rem", lineHeight: 1.6 },
        body2: { fontSize: "0.875rem", lineHeight: 1.5 },
        button: { textTransform: "none", fontWeight: 600 },
    },
    components: {
        MuiTypography: {
            defaultProps: { variantMapping: { tagline: "p" } },
        },
        MuiCard: {
            defaultProps: { variant: "outlined" },
        },
        MuiLink: {
            defaultProps: { underline: "hover" },
            styleOverrides: { root: { color: colors.accent, textUnderlineOffset: "0.15em" } },
        },
    },
});

export default theme;
