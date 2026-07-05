# Vercel-Einstellungen

Im Vercel Dashboard muss das Projekt als Next.js-App konfiguriert sein.

- Framework Preset: Next.js
- Root Directory: ./
- Build Command: npm run build
- Install Command: npm install
- Output Directory: leer lassen / Vercel automatisch entscheiden lassen

Wenn Framework Preset auf Other steht, kann Vercel trotz fertigem Deployment eine 404-Seite ausliefern.
