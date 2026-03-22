---
description: "Generate a new Slidev slide page with German content, proper frontmatter, and code embedding"
agent: "agent"
argument-hint: "Topic for the new slide (e.g., PMTiles, GeoTIFF reprojection)"
---

Create a new slide page for the Slidev presentation. Follow these rules:

- Write all presentation text and speaker notes in **German**
- Use `---` to separate slides within the page
- Apply appropriate Slidev layouts (`two-cols`, `image-right`, `center`, etc.)
- Use `v-click` for progressive reveals where it aids understanding
- If the slide includes a code example, create a matching snippet in `snippets/` with `// #region` / `// #endregion` markers and embed it with `<<< @/snippets/filename.js#region`
- Add the new page to `slides.md` using `src: ./pages/<name>.md` frontmatter

Reference the existing slides for style: [slides.md](../slides.md)
