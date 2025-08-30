import { useState } from "react";

const regionesDeChile = [
  "Arica y Parinacota",
  "Tarapacá",
  "Antofagasta",
  "Atacama",
  "Coquimbo",
  "Valparaíso",
  "Región Metropolitana de Santiago",
  "O'Higgins",
  "Maule",
  "Ñuble",
  "Biobío",
  "La Araucanía",
  "Los Ríos",
  "Los Lagos",
  "Aysén",
  "Magallanes y de la Antártica Chilena"
];

export default function RegionSelector() {
  const [region, setRegion] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Selección de Región</h1>
      <label htmlFor="region">Seleccione su región:</label>
      <select
        id="region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        style={{ display: "block", marginTop: "1rem" }}
      >
        <option value="">-- Seleccione --</option>
        {regionesDeChile.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      {region && <p style={{ marginTop: "1rem" }}>Región seleccionada: {region}</p>}
    </div>
  );
}

