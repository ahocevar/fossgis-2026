---
description: "Create a vanilla JavaScript code snippet for embedding in slides, with region markers"
agent: "agent"
argument-hint: "What the snippet demonstrates (e.g., loading a PMTiles source in OpenLayers)"
---

Create a new vanilla JavaScript code snippet in `snippets/`. Follow these rules:

- Use idiomatic ES module imports
- Wrap the relevant code in `// #region <name>` / `// #endregion <name>` markers so it can be embedded in slides with `<<< @/snippets/filename.js#name`
- Keep it concise — slides show code at limited screen size
- Use meaningful variable names that read well on a slide
- Key libraries: OpenLayers (`ol`), proj4js (`proj4`), geotiff.js (`geotiff`), PMTiles (`pmtiles`)

Reference existing snippets for style: [snippets/](../snippets/)
