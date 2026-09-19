# Illustration Studio v1.0.1

App web per transformar una fotografia en diferents llenguatges d’il·lustració mitjançant l’API d’imatge d’OpenAI.

## Què inclou aquesta v1.0

- Pujada d’una fotografia JPG, PNG o WEBP.
- 25+ presets d’estil agrupats per famílies.
- `Flat + Pencil Editorial` marcat com a preset principal.
- Controls de:
  - fidelitat a la persona
  - composició
  - fons
  - intensitat de l’estil
- Camp lliure per demanar canvis addicionals.
- Generació al servidor: la clau de l’API no s’envia al navegador.
- Comparació visual entre original i resultat.
- Botó per desar el resultat.
- Disseny adaptable a iPhone, iPad i ordinador.
- Preparada per desplegar a Vercel.

## 1. Crear el repositori a GitHub

1. Crea un repositori nou a GitHub, per exemple `illustration-studio`.
2. Descomprimeix aquest ZIP.
3. Puja tot el contingut de la carpeta al repositori.
4. No pugis mai `.env.local`.

## 2. Provar-la en local

Necessites Node.js recent.

```bash
npm install
cp .env.example .env.local
```

Edita `.env.local`:

```env
OPENAI_API_KEY=la_teva_clau
OPENAI_IMAGE_MODEL=gpt-image-2
OPENAI_IMAGE_INPUT_FIDELITY=high
```

Després:

```bash
npm run dev
```

Obre `http://localhost:3000`.

## 3. Desplegar a Vercel

1. Entra a Vercel.
2. `Add New` → `Project`.
3. Importa el repositori de GitHub.
4. Afegeix les Environment Variables:
   - `OPENAI_API_KEY`
   - `OPENAI_IMAGE_MODEL` = `gpt-image-2`
   - `OPENAI_IMAGE_INPUT_FIDELITY` = `high`
5. Fes `Deploy`.

## Notes

La ruta `app/api/generate/route.ts` envia la fotografia a l'endpoint d'edició d'imatges. El model es configura mitjançant `OPENAI_IMAGE_MODEL`, de manera que es pot canviar sense tocar codi.

Si el teu compte/API retorna un error indicant que un paràmetre concret no és admès pel model configurat, elimina o ajusta aquell camp dins de `app/api/generate/route.ts`.

## On són els prompts

Tota la biblioteca de presets és a:

`lib/prompts.ts`

Cada estil és independent. Per afegir-ne un de nou només cal afegir un objecte nou a `presets`.

## Properes versions suggerides

- v1.1: miniatures reals per estil.
- v1.2: “Compare styles” amb 2 o 4 resultats simultanis.
- v1.3: historial local de generacions.
- v1.4: format de sortida 1:1 / 4:5 / 3:2 / 16:9.
- v1.5: segona imatge opcional com a referència d’estil.


## Nous estils afegits a v1.0.1

Stencil, Chromolithography, Kirigami, Knolling, Tilt-Shift, Daguerreotype, Banknote Style, Xilografia, Dithering, Line Art, Cianotípia, Pinhole i Coloring Book. Risograph ja formava part de la v1.0 i es manté.
