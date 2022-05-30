import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/layout/Layout";

import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

export let shiftkeyTheme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#349082",
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
