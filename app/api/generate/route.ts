import { NextResponse } from "next/server";
import { buildPrompt, type Background, type Composition, type Fidelity, type Intensity } from "../../../lib/prompts";

export const runtime = "nodejs";
export const maxDuration = 60;

function stringField(form: FormData, name: string, fallback: string) {
  const value = form.get(name);
  return typeof value === "string" && value.trim() ? value : fallback;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Falta OPENAI_API_KEY a les variables d'entorn." }, { status: 500 });
    }

    const form = await request.formData();
    const image = form.get("image");

    if (!(image instanceof File)) {
      return NextResponse.json({ error: "No s'ha rebut cap imatge vàlida." }, { status: 400 });
    }

    const styleId = stringField(form, "styleId", "flat-pencil-editorial");
    const fidelity = stringField(form, "fidelity", "high") as Fidelity;
    const composition = stringField(form, "composition", "simplify") as Composition;
    const background = stringField(form, "background", "simplify") as Background;
    const intensity = stringField(form, "intensity", "standard") as Intensity;
    const notes = stringField(form, "notes", "");

    const prompt = buildPrompt({
      styleId,
      fidelity,
      composition,
      background,
      intensity,
      notes
    });

    const upstream = new FormData();
    upstream.append("model", process.env.OPENAI_IMAGE_MODEL || "gpt-image-2");
    upstream.append("image", image, image.name || "source.png");
    upstream.append("prompt", prompt);
    upstream.append("size", "1024x1024");
    upstream.append("quality", "high");
    upstream.append("input_fidelity", process.env.OPENAI_IMAGE_INPUT_FIDELITY || "high");

    const response = await fetch("https://api.openai.com/v1/images/edits", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      body: upstream
    });

    const data = await response.json();

    if (!response.ok) {
      const message =
        data?.error?.message ||
        data?.message ||
        `Error de l'API d'imatges (${response.status}).`;
      return NextResponse.json({ error: message }, { status: response.status });
    }

    const first = data?.data?.[0];
    if (!first) {
      return NextResponse.json({ error: "L'API no ha retornat cap imatge." }, { status: 502 });
    }

    if (first.b64_json) {
      return NextResponse.json({
        image: `data:image/png;base64,${first.b64_json}`,
        prompt
      });
    }

    if (first.url) {
      return NextResponse.json({
        image: first.url,
        prompt
      });
    }

    return NextResponse.json({ error: "Format de resposta d'imatge no reconegut." }, { status: 502 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error inesperat.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
