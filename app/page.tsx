"use client";

import { ChangeEvent, useMemo, useState } from "react";
import { families, presets, type Background, type Composition, type Fidelity, type Intensity } from "../lib/prompts";

const fidelityOptions: { value: Fidelity; label: string }[] = [
  { value: "high", label: "Alta" },
  { value: "medium", label: "Mitjana" },
  { value: "free", label: "Lliure" }
];

const compositionOptions: { value: Composition; label: string }[] = [
  { value: "preserve", label: "Conservar" },
  { value: "simplify", label: "Simplificar" },
  { value: "reinterpret", label: "Reinterpretar" }
];

const backgroundOptions: { value: Background; label: string }[] = [
  { value: "preserve", label: "Conservar" },
  { value: "simplify", label: "Simplificar" },
  { value: "redesign", label: "Redissenyar" }
];

const intensityOptions: { value: Intensity; label: string }[] = [
  { value: "subtle", label: "Suau" },
  { value: "standard", label: "Normal" },
  { value: "strong", label: "Forta" }
];

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState("");
  const [family, setFamily] = useState("Tots");
  const [styleId, setStyleId] = useState("flat-pencil-editorial");
  const [fidelity, setFidelity] = useState<Fidelity>("high");
  const [composition, setComposition] = useState<Composition>("simplify");
  const [background, setBackground] = useState<Background>("simplify");
  const [intensity, setIntensity] = useState<Intensity>("standard");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const selected = presets.find((p) => p.id === styleId) ?? presets[0];

  const visiblePresets = useMemo(() => {
    if (family === "Tots") return presets;
    return presets.filter((p) => p.family === family);
  }, [family]);

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const next = event.target.files?.[0] ?? null;
    setFile(next);
    setResult("");
    setError("");
    if (preview) URL.revokeObjectURL(preview);
    setPreview(next ? URL.createObjectURL(next) : "");
  }

  function selectStyle(id: string) {
    setStyleId(id);
    const p = presets.find((x) => x.id === id);
    if (!p?.defaults) return;
    if (p.defaults.fidelity) setFidelity(p.defaults.fidelity);
    if (p.defaults.composition) setComposition(p.defaults.composition);
    if (p.defaults.background) setBackground(p.defaults.background);
    if (p.defaults.intensity) setIntensity(p.defaults.intensity);
  }

  async function generate() {
    if (!file) {
      setError("Carrega una fotografia abans de generar.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      const form = new FormData();
      form.append("image", file);
      form.append("styleId", styleId);
      form.append("fidelity", fidelity);
      form.append("composition", composition);
      form.append("background", background);
      form.append("intensity", intensity);
      form.append("notes", notes);

      const response = await fetch("/api/generate", { method: "POST", body: form });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "No s'ha pogut generar la imatge.");
      setResult(data.image);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error inesperat.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="shell">
      <header className="topbar">
        <div>
          <div className="eyebrow">PHOTO → ILLUSTRATION</div>
          <h1>Illustration Studio</h1>
          <p>Transforma una fotografia amb presets d’il·lustració sense haver de tocar prompts.</p>
        </div>
        <div className="version">v1.0.1</div>
      </header>

      <section className="workspace">
        <div className="leftColumn">
          <section className="panel">
            <div className="sectionTitle">1. Fotografia</div>
            <label className="uploadBox">
              <input type="file" accept="image/png,image/jpeg,image/webp" onChange={handleFile} />
              {preview ? (
                <img src={preview} alt="Fotografia carregada" />
              ) : (
                <div className="uploadEmpty">
                  <span className="uploadPlus">＋</span>
                  <strong>Carrega una fotografia</strong>
                  <span>JPG, PNG o WEBP</span>
                </div>
              )}
            </label>
          </section>

          <section className="panel">
            <div className="sectionTitle">2. Estil</div>
            <div className="familyBar">
              {["Tots", ...families].map((f) => (
                <button
                  key={f}
                  className={family === f ? "family active" : "family"}
                  onClick={() => setFamily(f)}
                  type="button"
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="styleGrid">
              {visiblePresets.map((p) => (
                <button
                  type="button"
                  key={p.id}
                  className={styleId === p.id ? "styleCard selected" : "styleCard"}
                  onClick={() => selectStyle(p.id)}
                >
                  <div className={`swatch swatch-${p.id}`} />
                  <div className="styleMeta">
                    <strong>{p.name}{p.id === "flat-pencil-editorial" ? " ★" : ""}</strong>
                    <span>{p.description}</span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </div>

        <div className="rightColumn">
          <section className="panel sticky">
            <div className="sectionTitle">3. Ajustos</div>

            <Control label="Fidelitat" options={fidelityOptions} value={fidelity} setValue={setFidelity} />
            <Control label="Composició" options={compositionOptions} value={composition} setValue={setComposition} />
            <Control label="Fons" options={backgroundOptions} value={background} setValue={setBackground} />
            <Control label="Intensitat" options={intensityOptions} value={intensity} setValue={setIntensity} />

            <label className="notesLabel">
              Canvis addicionals
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ex.: conserva exactament la roba; elimina les flors; fons blanc..."
                rows={4}
              />
            </label>

            <div className="summary">
              <span>Preset</span>
              <strong>{selected.name}</strong>
            </div>

            <button className="generateButton" onClick={generate} disabled={loading || !file}>
              {loading ? "Generant…" : "Generar il·lustració"}
            </button>

            {error && <div className="error">{error}</div>}
          </section>
        </div>
      </section>

      {(preview || result) && (
        <section className="resultSection">
          <div className="sectionTitle">Resultat</div>
          <div className="compare">
            {preview && (
              <figure>
                <img src={preview} alt="Original" />
                <figcaption>Original</figcaption>
              </figure>
            )}
            {result && (
              <figure>
                <img src={result} alt="Il·lustració generada" />
                <figcaption>{selected.name}</figcaption>
              </figure>
            )}
          </div>

          {result && (
            <div className="resultActions">
              <a className="downloadButton" href={result} download={`illustration-${styleId}.png`}>
                Desar imatge
              </a>
              <button type="button" className="secondaryButton" onClick={generate} disabled={loading}>
                Tornar a generar
              </button>
            </div>
          )}
        </section>
      )}

      <footer>
        La clau de l’API només s’utilitza al servidor. No es desa al navegador.
      </footer>
    </main>
  );
}

function Control<T extends string>({
  label,
  options,
  value,
  setValue
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  setValue: (v: T) => void;
}) {
  return (
    <div className="control">
      <div className="controlLabel">{label}</div>
      <div className="segmented">
        {options.map((o) => (
          <button
            type="button"
            key={o.value}
            onClick={() => setValue(o.value)}
            className={value === o.value ? "active" : ""}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
