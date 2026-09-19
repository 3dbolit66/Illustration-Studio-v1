export type Fidelity = "high" | "medium" | "free";
export type Composition = "preserve" | "simplify" | "reinterpret";
export type Background = "preserve" | "simplify" | "redesign";
export type Intensity = "subtle" | "standard" | "strong";

export type StylePreset = {
  id: string;
  name: string;
  family: string;
  description: string;
  module: string;
  defaults?: {
    fidelity?: Fidelity;
    composition?: Composition;
    background?: Background;
    intensity?: Intensity;
  };
};

export const presets: StylePreset[] = [
  {
    id: "flat-pencil-editorial",
    name: "Flat + Pencil Editorial",
    family: "Editorial",
    description: "Color pla, contorn de llapis i aire editorial.",
    defaults: { fidelity: "high", composition: "simplify", background: "simplify", intensity: "standard" },
    module: `
Transform the source photograph into an elegant editorial illustration combining flat color blocks with visible hand-drawn pencil or fine ink linework.

VISUAL LANGUAGE
— clean simplified color areas
— visible hand-drawn contour lines
— delicate sketch marks inside forms
— subtle hatching for selected shadows and folds
— recognizable natural faces
— simplified but anatomically believable figures
— restrained editorial composition
— soft muted color palette
— warm off-white or beige paper-like background
— optional large flat circular or organic accent shape behind the principal figures

RENDERING BALANCE
Flat color should remain dominant.
Linework should enrich the illustration without turning it into a full pencil drawing.
Do not fully shade forms photographically.

AVOID
— photorealism
— 3D rendering
— glossy digital painting
— excessive gradients
— cartoon proportions
— generic faces
— heavy comic outlines
— over-detailed backgrounds
`
  },
  {
    id: "editorial-sketch",
    name: "Editorial Sketch",
    family: "Editorial",
    description: "Línia fina, textura de paper i color molt lleuger.",
    module: `
Elegant editorial sketch with fine graphite and ink linework, restrained muted color washes, visible paper texture, selective detail, airy negative space, and natural facial anatomy. The drawing should feel hand-made and finished, not photographic.
`
  },
  {
    id: "fashion-poster",
    name: "Fashion Poster",
    family: "Editorial",
    description: "Acabat de pòster de moda net i refinat.",
    module: `
Polished fashion-editorial illustration with graceful proportions, clean clothing detail, softly simplified faces, refined color harmonies, subtle shading and a carefully composed poster-like finish.
`
  },
  {
    id: "watercolor",
    name: "Watercolor",
    family: "Pintura",
    description: "Aquarel·la transparent sobre paper.",
    module: `
Traditional watercolor illustration on cold-pressed paper: transparent washes, pigment blooms, soft wet-on-wet edges, selective fine brush detail, visible paper grain, restrained highlights, and no digital airbrush finish.
`
  },
  {
    id: "gouache",
    name: "Gouache Editorial",
    family: "Pintura",
    description: "Pintura opaca, mat i editorial.",
    module: `
Editorial gouache painting with opaque matte color, softly simplified shapes, visible brush texture, restrained detail, confident silhouettes and a sophisticated printed-illustration feel.
`
  },
  {
    id: "flat-vector",
    name: "Flat Vector",
    family: "Gràfic",
    description: "Formes netes, color pla i molt poc ombrejat.",
    module: `
Clean flat vector-style illustration with crisp silhouettes, simplified shapes, smooth flat color areas, minimal linework and very limited shading. Modern editorial graphic design, not 3D.
`
  },
  {
    id: "minimal-portrait",
    name: "Minimal Portrait",
    family: "Gràfic",
    description: "Retrat reduït a formes netes i elegants.",
    module: `
Minimal portrait illustration using clean flat shapes, reduced facial planes, restrained palette, bold silhouette and almost no texture. Preserve recognizable proportions while simplifying details.
`
  },
  {
    id: "faceless",
    name: "Faceless Figures",
    family: "Gràfic",
    description: "Figura sense trets facials, centrada en postura i roba.",
    defaults: { fidelity: "free", composition: "simplify", background: "simplify", intensity: "standard" },
    module: `
Minimal faceless lifestyle illustration. Remove facial features intentionally while preserving hairstyle, body type, pose, clothing silhouette and scene role. Use muted flat colors, clean silhouettes and minimal shadows.
`
  },
  {
    id: "retro-poster",
    name: "Retro Poster",
    family: "Cartell",
    description: "Formes fortes i paleta retro limitada.",
    module: `
Retro-inspired flat poster illustration with simplified graphic shapes, limited warm/cool palette, bold silhouettes, clean scenic elements and subtle vintage print texture.
`
  },
  {
    id: "swiss-poster",
    name: "Swiss Poster",
    family: "Cartell",
    description: "Composició sòbria, neta i editorial.",
    module: `
Swiss-influenced editorial poster: disciplined composition, strong negative space, crisp simplified shapes, restrained color palette, clear hierarchy and clean modernist graphic treatment.
`
  },
  {
    id: "bauhaus",
    name: "Bauhaus Geometric",
    family: "Cartell",
    description: "Geometria, blocs de color i composició modernista.",
    module: `
Bauhaus-inspired geometric illustration using circles, rectangles, lines and simplified human forms. Strong red, blue, yellow, black and cream accents, balanced modernist composition, flat graphic treatment.
`
  },
  {
    id: "art-deco",
    name: "Art Deco Graphic",
    family: "Cartell",
    description: "Geometria elegant i acabat anys 20–30.",
    module: `
Elegant Art Deco graphic illustration with streamlined geometry, crisp silhouettes, refined symmetry and a black, cream, gold and deep green palette. Sophisticated 1920s–1930s poster mood.
`
  },
  {
    id: "risograph",
    name: "Risograph",
    family: "Impressió",
    description: "Tintes limitades, gra i lleuger desregistre.",
    module: `
Risograph-style print with a limited 2–4 ink palette, visible grain, halftone texture, slight registration offset, paper texture and strong editorial simplification.
`
  },
  {
    id: "screenprint",
    name: "Screenprint",
    family: "Impressió",
    description: "Color contundent i textura de serigrafia.",
    module: `
Hand-pulled screenprint poster style with bold flat colors, simplified shadow shapes, limited ink palette, subtle paper grain and slightly imperfect printed edges.
`
  },
  {
    id: "linocut",
    name: "Linocut",
    family: "Impressió",
    description: "Talls marcats i grans masses de negre.",
    module: `
Linocut print with bold carved marks, irregular cut lines, large black masses, strong positive/negative contrast, reduced tonal information and an unmistakable hand-printed block-print character.
`
  },
  {
    id: "etching",
    name: "Etching / Engraving",
    family: "Impressió",
    description: "Gravat fi, hatching i cross-hatching.",
    defaults: { fidelity: "high", composition: "preserve", background: "preserve", intensity: "standard" },
    module: `
Classic engraved etching in black or very dark sepia ink on warm cream paper. Fine flowing engraved lines, curved hatching following anatomy and fabric volume, dense cross-hatching, delicate stippling, subtle variation in line density, very little solid black, high facial fidelity and antique book-illustration finish.
`
  },
  {
    id: "paper-cut",
    name: "Paper Cut",
    family: "Paper",
    description: "Formes retallades i capes de paper.",
    module: `
Layered paper-cut illustration made from clean cut-paper shapes with shallow dimensional shadows, simplified forms, tactile matte paper texture and carefully separated depth layers.
`
  },
  {
    id: "paper-diorama",
    name: "Layered Paper Diorama",
    family: "Paper",
    description: "Escena en capes amb volum suau.",
    module: `
Soft layered paper diorama with multiple cut-paper planes, gentle cast shadows, pastel or restrained colors, shallow relief depth and a crafted miniature-stage feeling.
`
  },
  {
    id: "modern-cutout",
    name: "Abstract Modern Cutout",
    family: "Paper",
    description: "Retalls geomètrics i orgànics molt gràfics.",
    module: `
Modern abstract cut-paper composition using bold geometric and organic shapes, strong limited palette, simplified human forms and poster-like visual rhythm.
`
  },
  {
    id: "surreal-collage",
    name: "Surreal Collage",
    family: "Collage",
    description: "Fotografia, papers i elements inesperats.",
    module: `
Sophisticated surreal mixed-media collage using cut photographic fragments, torn paper, botanical elements, vintage ephemera and a few unexpected dreamlike objects. Keep the source scene legible beneath the collage construction.
`
  },
  {
    id: "botanical-collage",
    name: "Botanical Vintage Collage",
    family: "Collage",
    description: "Retalls botànics, paper antic i fotografia.",
    module: `
Botanical vintage mixed-media collage with muted photographic fragments, flowers and leaves, aged paper textures, handwriting fragments, stamps and delicate layered ephemera.
`
  },
  {
    id: "graphic-novel",
    name: "Graphic Novel",
    family: "Còmic",
    description: "Línia de tinta i ombres controlades.",
    module: `
Contemporary graphic-novel illustration with clean hand-inked contours, natural human proportions, simplified but recognizable faces, controlled flat colors and restrained cel-style shading.
`
  },
  {
    id: "ligne-claire",
    name: "Ligne Claire",
    family: "Còmic",
    description: "Contorn net, color pla i lectura clara.",
    module: `
European ligne-claire comic illustration: even clean ink outlines, precise readable forms, natural proportions, flat colors with almost no shading, clear architecture and uncluttered visual storytelling.
`
  },
  {
    id: "stained-glass",
    name: "Stained Glass",
    family: "Material",
    description: "Segments de color amb línies de plom.",
    module: `
Decorative stained-glass reinterpretation with segmented shapes, dark lead-came outlines, luminous jewel-like color blocks and simplified but readable human forms.
`
  },
  {
    id: "mosaic",
    name: "Mosaic",
    family: "Material",
    description: "Figura construïda amb petites tessel·les.",
    module: `
Decorative mosaic illustration constructed from many small tesserae with visible grout lines, simplified contours, carefully grouped color regions and a handcrafted tiled-surface appearance.
`
  },
  {
    id: "isometric",
    name: "Isometric Vector",
    family: "Digital",
    description: "Vector geomètric amb volum discret.",
    module: `
Clean isometric vector illustration with simplified geometric depth, neat planes, subtle dimensional shading, crisp edges and contemporary editorial clarity. Avoid realistic 3D rendering.
`
  },

  {
    id: "stencil",
    name: "Stencil",
    family: "Impressió",
    description: "Plantilla, masses planes i contrast dur.",
    module: `
Stencil-style illustration with hard-edged cut shapes, bold positive and negative areas, very limited tonal range, spray-paint or street-art influence, and strong silhouette readability.
Avoid soft gradients and painterly rendering.
`
  },
  {
    id: "chromolithography",
    name: "Chromolithography",
    family: "Impressió",
    description: "Estampa antiga en color, rica i lleugerament ornamental.",
    module: `
19th-century chromolithographic illustration with carefully layered color printing, delicate outlines, softly modeled forms, antique printed-paper feel, slightly ornamental detail, and a refined vintage palette.
`
  },
  {
    id: "kirigami",
    name: "Kirigami",
    family: "Paper",
    description: "Paper tallat i plegat amb volum delicat.",
    module: `
Kirigami-style paper illustration with cut and folded paper structures, crisp paper edges, delicate dimensional relief, layered depth, and a handmade sculptural paper-craft appearance.
`
  },
  {
    id: "knolling",
    name: "Knolling",
    family: "Composició",
    description: "Objectes ordenats zenitalment en graella molt neta.",
    defaults: { fidelity: "high", composition: "reinterpret", background: "redesign", intensity: "standard" },
    module: `
Knolling composition: arrange the main objects from the source image into a clean top-down organized layout, evenly spaced, visually aligned and neatly categorized. Minimal shadows, very clear object separation, and a precise editorial flat-lay feel.
If people are present, reinterpret them only if the scene logically allows it; otherwise prioritize objects and key props.
`
  },
  {
    id: "tilt-shift",
    name: "Tilt-Shift",
    family: "Fotogràfic",
    description: "Efecte miniatura amb focus selectiu.",
    module: `
Tilt-shift miniature effect with selective focus, shallow depth-of-field bands, toy-like scene perception, crisp focus in a narrow plane and gentle blur elsewhere. Colors may feel slightly clean and miniature-like, but keep the source scene recognizable.
`
  },
  {
    id: "daguerreotype",
    name: "Daguerreotype",
    family: "Fotogràfic",
    description: "Aire fotogràfic del segle XIX, metàl·lic i monocrom.",
    defaults: { fidelity: "high", composition: "preserve", background: "preserve", intensity: "standard" },
    module: `
Daguerreotype-style image with monochrome silver-toned rendering, delicate historical detail, subtle metallic plate character, soft contrast, antique photographic mood and slight exposure irregularities. Avoid modern color treatment.
`
  },
  {
    id: "banknote",
    name: "Banknote Style",
    family: "Impressió",
    description: "Gravat de bitllet, línia de seguretat molt fina.",
    defaults: { fidelity: "high", composition: "preserve", background: "simplify", intensity: "strong" },
    module: `
Banknote engraving style with ultra-fine guilloché-inspired linework, dense curved hatch lines, intaglio-like security-engraving detail, crisp ornamental precision and a currency-illustration finish. Strong monochrome or limited muted ink palette.
`
  },
  {
    id: "woodcut",
    name: "Xilografia",
    family: "Impressió",
    description: "Tall de fusta, textura fibrosa i contrast fort.",
    module: `
Woodcut print with carved wooden-block character, visible grain influence, bold contrast, irregular hand-cut edges, reduced tonal range and a traditional relief-print look distinct from smooth linocut.
`
  },
  {
    id: "dithering",
    name: "Dithering",
    family: "Digital",
    description: "Tramat digital de punts per simular to.",
    module: `
Dithered digital illustration using visible pixel or dot-based tonal transitions, reduced palette, retro-computing or print-simulation feel, and deliberate texture created through patterned dot distribution rather than smooth gradients.
`
  },
  {
    id: "line-art",
    name: "Line Art",
    family: "Dibuix",
    description: "Dibuix de línia net, quasi sense ombra.",
    module: `
Clean line-art illustration with elegant contour drawing, minimal fills, very limited shading, strong emphasis on outlines and internal structural lines, and an airy refined graphic finish.
`
  },
  {
    id: "cyanotype",
    name: "Cianotípia",
    family: "Fotogràfic",
    description: "Blau intens de còpia solar antiga.",
    module: `
Cyanotype-style rendering with deep Prussian blue tones, white highlights, contact-print character, slight chemical irregularity, paper texture and a historic blueprint-like photographic process appearance.
`
  },
  {
    id: "pinhole",
    name: "Pinhole",
    family: "Fotogràfic",
    description: "Fotografia estenopeica, suau i imperfecta.",
    module: `
Pinhole-camera aesthetic with soft focus, subtle vignetting, long-exposure feeling, slight distortion, dreamy atmospheric blur and an analog handmade-photography character.
`
  },
  {
    id: "coloring-book",
    name: "Coloring Book",
    family: "Dibuix",
    description: "Línia neta, formes tancades i sense color.",
    defaults: { fidelity: "high", composition: "preserve", background: "preserve", intensity: "standard" },
    module: `
Coloring-book illustration made from clean black linework on a pure white or warm-white background.

VISUAL LANGUAGE
— crisp black outlines
— closed, clearly defined shapes
— no color fills
— almost no shading
— no grayscale rendering
— minimal or no crosshatching
— readable facial features
— simplified but accurate anatomy
— clear clothing seams, folds and accessories
— decorative details retained when useful
— uncluttered white negative space

The result should look like a high-quality adult coloring-book page rather than a sketch.
Preserve the source person's identity, pose, clothing structure and scene composition.
Simplify photographic texture into clean drawable contours.

AVOID
— filled black shadows
— painterly marks
— gray washes
— photorealistic shading
— messy sketch lines
— comic-style heavy blacks
— color
`
  }

];

export const families = Array.from(new Set(presets.map((p) => p.family)));

export function getPreset(id: string) {
  return presets.find((p) => p.id === id) ?? presets[0];
}

function fidelityPrompt(value: Fidelity) {
  if (value === "high") return `
IDENTITY FIDELITY — HIGH
Preserve facial geometry, age, hairstyle, facial proportions, distinctive features and recognizable appearance.
Stylization must be applied over the person's identity rather than replacing it.
`;
  if (value === "medium") return `
IDENTITY FIDELITY — MEDIUM
Preserve recognizable facial structure, hairstyle, age range and body proportions, while allowing moderate simplification required by the style.
`;
  return `
IDENTITY FIDELITY — FREE
The selected style may simplify identity substantially. Preserve the subject's role, pose, hairstyle silhouette, clothing structure and overall visual relationship.
`;
}

function compositionPrompt(value: Composition) {
  if (value === "preserve") return `
COMPOSITION — PRESERVE
Keep the original framing, camera angle, pose, relative scale, spatial relationships and main object placement.
`;
  if (value === "simplify") return `
COMPOSITION — SIMPLIFY
Keep the source scene and pose relationship, but simplify secondary details and adjust spacing when needed for a cleaner illustration.
`;
  return `
COMPOSITION — REINTERPRET
Use the source photograph as the narrative basis but allow the composition to be redesigned to suit the selected illustration style.
`;
}

function backgroundPrompt(value: Background) {
  if (value === "preserve") return `
BACKGROUND — PRESERVE
Retain the original setting and its main architectural and environmental elements, translated into the selected style.
`;
  if (value === "simplify") return `
BACKGROUND — SIMPLIFY
Reduce the background to its essential visual elements. Remove distracting detail while keeping enough context to understand the scene.
`;
  return `
BACKGROUND — REDESIGN
Replace the original background with a coherent background designed specifically for the selected illustration style, while keeping the subjects and scene logic intact.
`;
}

function intensityPrompt(value: Intensity) {
  if (value === "subtle") return `
STYLE INTENSITY — SUBTLE
Keep more of the source photograph's natural proportions and detail. Apply the visual style lightly.
`;
  if (value === "strong") return `
STYLE INTENSITY — STRONG
Push the selected visual language clearly and consistently. Simplification, texture and graphic reinterpretation may be pronounced, while respecting the chosen identity setting.
`;
  return `
STYLE INTENSITY — STANDARD
Apply the selected style clearly while balancing recognizability, readability and visual transformation.
`;
}

export function buildPrompt(args: {
  styleId: string;
  fidelity: Fidelity;
  composition: Composition;
  background: Background;
  intensity: Intensity;
  notes?: string;
}) {
  const preset = getPreset(args.styleId);

  return `
PHOTO → ILLUSTRATION SYSTEM — v1.0

SOURCE IMAGE LOCK
The uploaded photograph is the sole source for:
— people and their identities
— age
— facial anatomy
— body proportions
— pose and gesture
— clothing and accessories
— objects
— spatial relationships
— scene content

Do not invent replacement people.
Do not beautify, rejuvenate or change age unless explicitly requested.
Do not add random accessories or irrelevant objects.
Keep anatomy correct.
The selected STYLE PRESET controls the rendering language.

${fidelityPrompt(args.fidelity)}
${compositionPrompt(args.composition)}
${backgroundPrompt(args.background)}
${intensityPrompt(args.intensity)}

STYLE PRESET
${preset.name}

${preset.module}

USER NOTES
${args.notes?.trim() || "No additional changes requested."}

FINAL REQUIREMENTS
The result must clearly read as an illustration, not a filtered photograph.
Preserve the semantic content of the source image.
Do not add text, labels, watermarks or logos unless explicitly requested.
`.trim();
}
