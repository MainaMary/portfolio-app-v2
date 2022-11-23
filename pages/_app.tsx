import "../styles/globals.css";
import React, { useState } from "react";
import type { AppProps } from "next/app";
import ThemeContext from "./components/ThemeContext";
import { ThemeProps } from "../pages/components/AppTheme";
function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<string>("light");
  const themeStyles: ThemeProps = {
    dark: {
      background: "#000000",
      color: "#fff",
    },
    light: {
      background: "#ECF0F3",
    },
    common: {
      transition: "all 1s ease",
    },
  };
  const allThemeStyles = {
    ...themeStyles.common,
    ...(theme === "light" ? themeStyles.light : themeStyles.dark),
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, allThemeStyles }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
