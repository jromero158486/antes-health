# ANTES Health Landing Page

Landing page estática para ANTES Health, lista para publicar con GitHub Pages.

## Archivos

- `index.html`: contenido de la página.
- `styles.css`: diseño responsive.
- `script.js`: menú móvil.

## Cómo publicarla con GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo: `antes-health`.
2. Sube estos archivos a la raíz del repositorio.
3. En GitHub, entra a **Settings → Pages**.
4. En **Build and deployment**, selecciona:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Guarda. La página saldrá en una URL tipo:
   `https://TU-USUARIO.github.io/antes-health/`

## Formulario

El formulario usa Formspree como placeholder:

```html
action="https://formspree.io/f/REEMPLAZA_ESTE_ID"
```

Puedes reemplazarlo por:

- Formspree
- Tally
- Google Forms
- Typeform

## Personalización rápida

Edita variables de color en `styles.css`:

```css
:root {
  --primary: #146c5c;
  --accent: #c8efe2;
}
```

