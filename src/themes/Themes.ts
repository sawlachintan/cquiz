export const getDesignTokens = () => ({
    palette: {
        primary: {
            main: "#CFB991",
        },
        secondary: {
            main: "#DDB945",
        },
        background: {
            default: "#000000",
            paper: "#000000",
        },
        text: {
            primary: "#CFB991",
            icon: "#CFB991",
        },
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        h1: {
            fontWeight: 800,
            fontSize: "2.5rem",
        },
        h2: {
            fontWeight: 600,
            fontSize: "2.15rem",
        },
        h3: {
            fontWeight: 600,
            fontSize: "2.15rem",
        },
        h4: {
            fontWeight: 500,
            fontSize: "1.45rem",
        },
        h5: {
            fontWeight: 500,
            fontSize: "1.15rem",
        },
        body1: {
            fontSize: "1.15rem",
            fontWeight: 500,
        },
        body2: {
            fontSize: "1.15rem",
            fontWeight: 600,
        },
    },
});
