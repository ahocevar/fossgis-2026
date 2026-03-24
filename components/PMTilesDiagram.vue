<template>
  <div class="w-full flex flex-col items-center mt-4">
    <svg viewBox="0 0 660 230" class="w-full max-w-2xl" font-family="ui-sans-serif,sans-serif" font-size="16">

      <defs>
        <marker id="arr-amber" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#d97706" />
        </marker>
        <marker id="arr-blue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
        </marker>
      </defs>

      <!-- File label -->
      <text x="330" y="18" text-anchor="middle" style="font-size:12px" opacity="0.5" font-family="ui-monospace,monospace">map.pmtiles</text>

      <!-- Outer file border -->
      <rect x="16" y="26" width="628" height="56" fill="none" stroke="#6b7280" stroke-width="2" rx="5" />

      <!-- Index block -->
      <rect x="18" y="28" width="110" height="52" fill="#fef3c7" stroke="#d97706" stroke-width="2" rx="4" />
      <text x="73" y="50" text-anchor="middle" style="font-size:13px;font-weight:bold" fill="#92400e">Index</text>
      <text x="73" y="65" text-anchor="middle" style="font-size:11px" font-family="ui-monospace,monospace" fill="#92400e">(z/x/y)</text>

      <!-- Regular tile blocks -->
      <rect x="130" y="28" width="72" height="52" fill="#dbeafe" stroke="#93c5fd" stroke-width="1" rx="3" />
      <text x="166" y="50" text-anchor="middle" style="font-size:11px" font-family="ui-monospace,monospace" fill="#1e40af">14/8802</text>
      <text x="166" y="64" text-anchor="middle" style="font-size:11px" font-family="ui-monospace,monospace" fill="#1e40af">/5679</text>

      <rect x="204" y="28" width="72" height="52" fill="#dbeafe" stroke="#93c5fd" stroke-width="1" rx="3" />
      <text x="240" y="50" text-anchor="middle" style="font-size:11px" font-family="ui-monospace,monospace" fill="#1e40af">14/8802</text>
      <text x="240" y="64" text-anchor="middle" style="font-size:11px" font-family="ui-monospace,monospace" fill="#1e40af">/5680</text>

      <!-- Highlighted tile -->
      <rect x="278" y="24" width="82" height="60" fill="#bfdbfe" stroke="#2563eb" stroke-width="3" rx="4" />
      <text x="319" y="50" text-anchor="middle" style="font-size:11px;font-weight:bold" font-family="ui-monospace,monospace" fill="#1e3a8a">14/8803</text>
      <text x="319" y="64" text-anchor="middle" style="font-size:11px;font-weight:bold" font-family="ui-monospace,monospace" fill="#1e3a8a">/5680</text>

      <rect x="362" y="28" width="72" height="52" fill="#dbeafe" stroke="#93c5fd" stroke-width="1" rx="3" />
      <text x="398" y="50" text-anchor="middle" style="font-size:11px" font-family="ui-monospace,monospace" fill="#1e40af">14/8803</text>
      <text x="398" y="64" text-anchor="middle" style="font-size:11px" font-family="ui-monospace,monospace" fill="#1e40af">/5681</text>

      <!-- Ellipsis -->
      <text x="462" y="61" text-anchor="middle" style="font-size:18px" fill="#9ca3af">…</text>

      <rect x="492" y="28" width="72" height="52" fill="#dbeafe" stroke="#93c5fd" stroke-width="1" rx="3" />
      <text x="528" y="50" text-anchor="middle" style="font-size:11px" font-family="ui-monospace,monospace" fill="#1e40af">15/4401</text>
      <text x="528" y="64" text-anchor="middle" style="font-size:11px" font-family="ui-monospace,monospace" fill="#1e40af">/2840</text>

      <!-- Arrow 1: index fetch -->
      <line x1="73" y1="148" x2="73" y2="84" stroke="#d97706" stroke-width="2" marker-end="url(#arr-amber)" />
      <rect x="8" y="150" width="136" height="40" fill="#fffbeb" stroke="#d97706" stroke-width="1.5" rx="5" />
      <text x="76" y="167" text-anchor="middle" style="font-size:11px" font-family="ui-monospace,monospace" fill="#92400e">GET Range: 0–16 KB</text>
      <text x="76" y="182" text-anchor="middle" style="font-size:11px" fill="#78350f">① Index laden</text>

      <!-- Arrow 2: tile fetch -->
      <line x1="319" y1="148" x2="319" y2="90" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue)" />
      <rect x="244" y="150" width="158" height="40" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5" rx="5" />
      <text x="323" y="167" text-anchor="middle" style="font-size:11px" font-family="ui-monospace,monospace" fill="#1e40af">GET Range: bytes=N–M</text>
      <text x="323" y="182" text-anchor="middle" style="font-size:11px" fill="#1e3a8a">② genau eine Kachel laden</text>

      <!-- Footer note -->
      <text x="330" y="220" text-anchor="middle" style="font-size:11px" opacity="0.55">max. 2 HTTP Range Requests pro Tile · CDN-kompatibel · statisches Hosting genügt</text>
    </svg>
  </div>
</template>
