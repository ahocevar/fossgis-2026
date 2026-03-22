# Project Guidelines

## Overview

Slidev presentation for FOSSGIS-Konferenz 2026: "Fortgeschrittene Web-Map Techniken rund um OpenLayers" by Andreas Hocevar. The talk covers OpenLayers, proj4js, geotiff.js, and PMTiles for advanced browser-based geodata processing.

## Language

- Presentation content and slide notes: **German**
- Code, variable names, and technical terms: English (as standard in the ecosystem)

## Build and Dev

- Install: `npm install`
- Dev server: `npm run dev` (opens <http://localhost:3030>)
- Build: `npm run build` (outputs to `dist/`)
- Export PDF: `npm run export`

## Slidev Conventions

- Main presentation: `slides.md` (frontmatter sets global config: theme `seriph`, 35min duration)
- Split slides into `pages/*.md` using `src:` frontmatter for large sections
- Slide separator: `---` between slides
- Use `v-click` for progressive reveals, `v-mark` for inline highlights
- Embed code with `<<< @/snippets/filename.js#region` using region markers (`// #region` / `// #endregion`)
- Interactive code demos use Monaco: `{monaco}` or `{monaco-run}`
- Custom Vue components go in `components/` (Vue 3 Composition API with `<script setup>`)

## Tech Context

- Key libraries referenced in slides: OpenLayers, ol-mapbox-style, proj4js, geotiff.js, pmtiles-protocol
- The PMTiles section focuses on the `pmtiles-protocol` package
- OpenLayers slides also showcase `ol-mapbox-style` for Mapbox Style integration
- When writing code examples, use idiomatic ES module imports
- Vanilla JavaScript for code snippets in `snippets/`
