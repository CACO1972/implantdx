import "../styles/globals.css";
import { useState, useEffect } from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export function App() {
  const [screen, setScreen] = useState("welcome");

  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/informe-revive.pdf";
    link.download = "informe-revive.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return null;
}