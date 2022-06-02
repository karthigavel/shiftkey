import "../styles/globals.css";
// import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import React from "react";
import Layout from "../components/layout/Layout";
import { loadIcons } from "../config/icon-loader";

import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

loadIcons();

export let shiftkeyTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
      background: {
        default: "#F0F0F0",
      },
      text: {
        primary: "#777777",
      },
    },
    typography: {
      fontFamily: ["Catamaran", "sans-serif"].join(","),
      fontSize: 15,
      h1: {
        fontSize: "2.2rem",
        fontWeight: 800,
      },
      h2: {
        fontSize: "1.5rem",
        fontWeight: 800,
        color: "#222328",
      },
      button: {
        textTransform: "none",
        fontWeight: 700,
      },
    },
    // components: {
    //   MuiListItemText: {
    //     variants: [
    //       {
    //         props: {},
    //         style: {
    //           fontFamily: ["Montserrat", "sans-serif"].join(","),
    //         },
    //       },
    //     ],
    //   },
    // },
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ChakraProvider>
    <ThemeProvider theme={shiftkeyTheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    // </ChakraProvider>
  );
}
export default MyApp;
