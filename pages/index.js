import { useState, useEffect } from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export default function Home() {
  const [screen, setScreen] = useState("welcome");

  useEffect(() => {
    const link = document.createElement("a");
    link.href = "/informe-revive.pdf";
    link.download = "informe-revive.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div>
      <h1>ImplantDX MVP</h1>
      <p>Welcome to ImplantDX MVP - the PDF should download automatically.</p>
    </div>
  );
}