---
theme: seriph
title: Fortgeschrittene Web-Map Techniken rund um OpenLayers
drawings:
  persist: false
transition: slide-left
comark: true
duration: 35min
---

# Fortgeschrittene Web-Map Techniken rund um OpenLayers

FOSSGIS-Konferenz 2026 · Göttingen

Andreas Hocevar

<!--
Begrüßung und kurze Einleitung zum Vortrag. Heute geht es um fortgeschrittene Techniken für Web-Maps, die über die Grundlagen von OpenLayers hinausgehen.
-->

---
layout: two-cols
layoutClass: gap-8
---

# Andreas Hocevar

- Open Source Geospatial Consulting
- Geschäftsführer der w3geo GmbH
- Aktivster OpenLayers-Entwickler
- <ph-map-pin class="inline mb-1" /> Graz, Österreich
<v-click>
<div class="mt-4 text-sm opacity-75">

**Code / Trail Statistik 2025**<br>
<ph-github-logo class="inline mb-1" /> 2.298 Contributions auf GitHub<br>
<ph-person-simple-bike class="inline mb-1" /> 140 Stunden / 1.540 km auf dem Mountainbike

</div>
</v-click>

::right::

<img src="https://avatars.githubusercontent.com/u/211514?v=4" class="rounded-full w-60 mt-12 mx-auto" />

<!--
Kurze Vorstellung: Ich bin Andreas Hocevar, Freelancer und Geschäftsführer der w3geo GmbH in Österreich. Ich bin der aktivste Entwickler von OpenLayers und betreue mehrere Open-Source-Bibliotheken im Geodaten-Ökosystem.
-->

---

# Bekannte Gesichter?

| Bibliothek | ⭐ Stars | Downloads/Woche | Mein Beitrag |
|---|---|---|---|
| OpenLayers | 12.400 | ~492.000 | #1 Contributor, Maintainer |
| proj4js | 2.200 | ~568.000 | #1 Contributor, Maintainer |
| geotiff.js | 1.000 | ~591.000 | #3 Contributor |
| ol-mapbox-style | 403 | ~257.000 | #1 Contributor, Maintainer |
| pmtiles-protocol | — | ~300 | Autor |

<div class="mt-4 text-sm opacity-75">

Stand: März 2026 · Quelle: npmjs.com / github.com

</div>

<!--
Das sind die Bibliotheken, die wir uns heute anschauen werden. An allen bin ich maßgeblich beteiligt. Bei OpenLayers, proj4js und ol-mapbox-style bin ich der aktivste Contributor. Bei geotiff.js bin ich auf Platz 3. pmtiles-protocol habe ich selbst geschrieben. Die Download-Zahlen zeigen, wie weit verbreitet diese Bibliotheken sind — zusammen kommen sie auf fast 2 Millionen Downloads pro Woche.
-->

---

# Kurzer Einschub, bevor es losgeht

Open-Source-Software zu pflegen ist **zeitaufwändig**, Sponsoring könnte diese Zeit teilweise abgelten

<v-click>

- Bugs triagieren und beheben
- Pull Request Reviews — oft in mehreren Iterationen
- Wartung von (teils fremdem) Code und Dokumentation
- Dependencies aktuell halten — besonders aufwändig in Zeiten von Supply-Chain-Attacks

</v-click>

<v-click>

<div class="mt-6 text-center">

## Fast 2 Millionen Downloads pro Woche — wahrscheinlich >20.000 aktive Anwendungen. Und wie viele Sponsoren?

</div>

</v-click>

<!--
Bevor wir in die Technik einsteigen, ein kurzer Einschub: Open-Source-Maintenance kostet Zeit — viel Zeit. Fast 2 Millionen Downloads pro Woche — und dahinter steckt kontinuierliche Arbeit: Bugs triagen, Pull Requests reviewen (die durch KI-Unterstützung immer zahlreicher werden), Abhängigkeiten aktuell halten (gerade in Zeiten von Supply-Chain-Angriffen sehr aufwändig), und Code von früheren Contributors weiterentwickeln. Also: was schätzt ihr — wie viele Sponsoren haben diese Bibliotheken?
-->

---

# Die Realität

<div class="flex gap-6 justify-center mt-2">

<GitHubSponsors
  name="Andreas Hocevar"
  login="ahocevar"
  avatar="https://avatars.githubusercontent.com/u/211514?v=4"
  description="Maintainer von OpenLayers, proj4js, ol-mapbox-style"
  :current="4"
  :past="19"
  :goal="50"
  :tiers="[
    { amount: 4, label: '🍺 Bier auf einer Konferenz' },
    { amount: 42, label: '💬 Support bei Fragen' },
    { amount: 200, label: '🚀 Feature-Wunsch' },
  ]"
/>

<GitHubSponsors
  name="OpenLayers"
  login="openlayers"
  avatar="https://avatars.githubusercontent.com/u/240579?s=200&v=4"
  description="12.400 ⭐ · Gelder fließen in Contributor-Sprints"
  :current="6"
  :past="13"
  :tiers="[
    { amount: 5, label: '🙏 Backer' },
    { amount: 100, label: '📍 Logo auf GitHub' },
    { amount: 200, label: '📍 Logo auf openlayers.org' },
  ]"
/>

</div>

<v-click>

<div class="mt-3 text-center text-lg font-bold">

<ph-hand-pointing class="inline mb-1" /> Jetzt sponsern — ab $1/Monat auf GitHub Sponsors!

</div>

</v-click>

<v-click>

<div class="mt-2 text-sm text-center">

GitHub stellt eine **Rechnung** aus (Reverse Charge für EU-Firmen)

</div>

</v-click>

<!--
Und hier ist die Antwort. Links meine persönliche Sponsors-Seite: 4 aktuelle Sponsoren, bei einem Ziel von 50. Das sind 8 Prozent. Rechts das OpenLayers-Projekt: 6 Sponsoren für ein Projekt mit über 12.000 Stars. Zur Einordnung: GitHub Sponsors macht es wirklich einfach. Man bekommt eine ordentliche Rechnung, ab 1 Dollar im Monat kann man dabei sein, und ab 4 Dollar gibt's ein Bier von mir auf Konferenzen.
-->

---
layout: two-cols
layoutClass: gap-6
---

# FOSS Contributor Funds

Open-Source-Nutzung spart Lizenzkosten. Ein FOSS Fund gibt strukturiert etwas zurück.

<v-click>

**So funktioniert's:**
FOSS Budget → Team nominiert Projekte/Maintainer → Abstimmung entscheidet

</v-click>

<v-click>

**Wer macht das?**
Spotify (SE) · **Septima** (DK)

</v-click>

<v-click>

**Fangt heute noch an.**

<div class="mt-2 text-sm opacity-75">

[fossfunders.com](https://fossfunders.com/)

</div>

</v-click>

::right::

<img src="/xkcd-dependency.png" class="h-88 mx-auto mt-2" alt="xkcd 2347: Dependency" />

<div class="text-xs opacity-60 text-center mt-1">

[xkcd #2347 „Dependency"](https://xkcd.com/2347/) — Randall Munroe, CC BY-NC 2.5

</div>

<!--
Das xkcd-Comic rechts zeigt das Problem: die gesamte moderne digitale Infrastruktur hängt an einem kleinen Projekt, das irgendeine Person ehrenamtlich betreut. Ein FOSS Fund ist eine einfache Antwort: Budget bereitstellen, Team nominiert Projekte, Abstimmung entscheidet. Spotify macht das jährlich. Ein konkretes Beispiel aus der Geospatial-Welt: Septima aus Dänemark — die sponsern meine Arbeit an OpenLayers direkt, weil sie täglich davon abhängen. Genau so soll es funktionieren. Fangt heute noch an.
-->

---
layout: statement
---

**OpenLayers** — offene Plattform für interaktive Karten, die mit den Anforderungen mitwächst.

<v-click>

Das Ökosystem drumherum macht's möglich.

</v-click>

<!--
OpenLayers als offene Plattform — das ist der rote Faden des Vortrags. Das Ökosystem drumherum — proj4js, ol-mapbox-style, pmtiles-protocol, geotiff.js — macht es erst möglich.
-->

---

# OpenLayers — eine Karte in wenigen Zeilen

<<< @/snippets/ol-osm.js#map {all|1-5|7-18|9-13|14-17}

<!--
Kommen wir zum technischen Teil. OpenLayers macht es einfach, eine Karte in die Webseite einzubinden. Wir importieren Map, TileLayer, OSM und View. Dann erstellen wir eine Map mit einem TileLayer, der OpenStreetMap-Kacheln als Source nutzt, und einer View, die den Startpunkt und Zoomstufe definiert. Das ist alles, was man für eine funktionierende Webkarte braucht.
-->

---

# OpenLayers — das Ergebnis

<DemoFrame src="./demos/ol-osm.html" title="OpenLayers OSM Karte" />

<!--
Und so sieht das Ergebnis aus: eine voll interaktive Karte mit OpenStreetMap-Kacheln. Man kann zoomen, pannen — alles funktioniert direkt im Browser. Das waren nur ein paar Zeilen Code.
-->

---

# OpenLayers — Stärken & Möglichkeiten

<v-click>

**Was OpenLayers ausmacht:**
- Vektordaten (GeoJSON, OGC APIs, MVT), Rasterdaten (XYZ, WMTS, WMS)
- Styling (Vector & Raster!), Animationen, Interaktionen
- Hit Detection, Feature-Selection
- Offene Architektur — eigene Sources, Renderer und Formate; passt zu jeder JS-Bibliothek

</v-click>

<v-click>

**Fortgeschrittene Themen:**
- Funktioniert mit allen Kartenprojektionen — auch für Raster!
- Mapbox/MapLibre Styles — nahtlos in OpenLayers integriert
- Cloud-native Formate (PMTiles, COG) — Vektor- und Rasterdaten per HTTP Range Request
- WebGL Raster-Styles — Berechnungen auf Rohdaten direkt in der GPU

</v-click>

<!--
OpenLayers ist das Schweizer Taschenmesser unter den Web-Map-Bibliotheken. Vektordaten, Rasterkacheln, WMS, WMTS — alles dabei. Das Canvas-Rendering ist schnell, und für sehr große Datemengen gibt es WebGL-Renderer. Wenn man OGC-Standards braucht oder maximale Kontrolle über jeden Pixel will, ist OpenLayers die richtige Wahl.
-->

---

# proj4js — Projektion für Deutschland

<<< @/snippets/ol-proj4.js#map {all|1-2,9-10|20-21}

<!--
Jetzt bringen wir proj4js ins Spiel. Wir registrieren EPSG:25832 — das ist UTM Zone 32 Nord, der Standard für Deutschland. Nach der Registrierung mit register() kann OpenLayers diese Projektion direkt verwenden. In der View setzen wir die Projektion und geben das Zentrum direkt in UTM-Koordinaten an — kein fromLonLat mehr nötig. OpenLayers kümmert sich automatisch um die Umprojektion der OSM-Kacheln.
-->

---

# proj4js — das Ergebnis

<DemoFrame src="./demos/ol-proj4.html" title="OpenLayers mit EPSG:25832" />

<!--
Das Ergebnis sieht auf den ersten Blick gleich aus — aber die Karte arbeitet intern jetzt in UTM-Koordinaten. Das ist wichtig, wenn man mit deutschen Geodaten arbeitet, die typischerweise in EPSG:25832 vorliegen. So kann man sie direkt ohne Umrechnung anzeigen.
-->

---

# proj4js — Erde in Bewegung

<<< @/snippets/ol-globe.js#globe {all|1-3|4-13|14-24}

<!--
Jetzt zeige ich euch, was mit proj4js noch möglich ist. Wir bauen eine rotierende Equal Earth Weltkarte. Die Imports kennt ihr schon. Die Funktion equalEarth() ist der Schlüssel: sie erzeugt dynamisch eine neue Projektion mit dem gewünschten Zentralmeridian lon_0. Die Proj4-Definition wird registriert, die Ausdehnung gesetzt, und das Projektionsobjekt zurückgegeben. Dann laden wir die GeoJSON-Landmassen und definieren eine Ozean-Fläche als simples Weltrechteck — in der Projektion wird daraus automatisch die typische Equal Earth Silhouette. Im setInterval-Loop verschieben wir alle 50 Millisekunden den Zentralmeridian um 2 Grad und lesen die Features neu ein. Das Ergebnis: die Erde dreht sich.
-->

---

# proj4js — Erde in Bewegung

<DemoFrame src="./demos/ol-globe.html" title="Spinning Globe" />

<!--
Eine rotierende Erde — direkt im Browser, ohne Plugin, ohne Server. Das sind proj4js, OpenLayers und ein paar Zeilen Code.
-->

---

# proj4js — Stärken & Möglichkeiten

<v-click>

**Was proj4js kann:**
- Unzählige Projektionen via `proj4.defs()`
- Unterstützt proj Strings, WKT1, WKT2 und PROJJSON
- Transformationsgrids im GSB oder TIF Format
- Direkte Koordinatentransformation: `proj4('EPSG:25832', 'EPSG:4326', coord)`
- Integration in OpenLayers via `register()` — danach transparent nutzbar

</v-click>

<v-click>

**Typische Anwendungsfälle:**
- Koordinaten aus Formularen oder APIs umprojizieren
- Karten direkt in lokalen Projektionen anzeigen
- Überlagern von Layern mit verschiedenen Ausgangsprojektionen

</v-click>

<v-click>

**Tipp:** EPSG-Definitionen von [spatialreference.org](https://spatialreference.org) kopieren.

</v-click>

<!--
proj4js macht Projektionsregistrierung trivial. Man kopiert die Projektionsdefinition von spatialreference.org, übergibt sie an proj4.defs() und ruft register() auf — fertig. OpenLayers kann die Projektion dann direkt in der View, in Layern und bei Transformationen verwenden. Besonders nützlich für Behördendaten, die fast immer in ETRS89/UTM oder Gauß-Krüger geliefert werden.
-->

---

# Mapbox/MapLibre Style Spec

Die Idee des einstigen OGC Web Map Context (WMC) Standards weitergedacht


<v-click>

**Mapbox/MapLibre Style Spec** — ein JSON-Dokument, das eine komplette Karte beschreibt:
- Datenquellen (Vector Tiles, Raster, GeoJSON, **Raster-DEM**)
- Layer mit Rendering-Regeln (Farben, Breiten, Filter)
- Fonts, Sprites, Hintergrundfarbe

</v-click>

<v-click>

**Vector Tiles:** Rendering im Browser → Style-Wechsel ohne Neuladen von Kacheln

**Raster:** vorgerenderte Bilder — oder auch Rohdaten:
- `raster-dem` Source + `hillshade` Layer → Geländeschummerung aus rohem DEM

</v-click>

<!--
Wir haben gerade die OSM-Kacheln gesehen — vorgerenderte Raster-Kacheln, fixer Look. Wer sich an die FOSSGIS-Konferenzen vor zehn, fünfzehn Jahren erinnert: da gab es immer wieder Vorträge über WMC — OGC Web Map Context — ein XML-Standard, der beschreiben soll, was eine Karte zeigt. Gute Idee, aber so kompliziert, dass er kaum jemand produktiv eingesetzt hat. Die Mapbox/MapLibre Style Spec hat dasselbe Problem viel eleganter gelöst: ein JSON-Dokument, das eine komplette Karte deklarativ beschreibt — Sources, Layer, Fonts, Sprites. Und als Quelltypen gibt es Vector Tiles, Raster, GeoJSON und auch Raster-DEM. Ein digitales Geländemodell als Rohdaten-Raster, und der Style rendert daraus direkt eine Geländeschummerung im Browser. ol-mapbox-style bringt diese gesamte Spec nach OpenLayers — alle gängigen paint und layout properties sowie expressions von Mapbox und MapLibre, unterstützt beide Varianten, und lässt sich mit allen anderen OL-Layern kombinieren.
-->

---

# ol-mapbox-style — apply() macht's möglich

<<< @/snippets/ol-mapbox-style.js#apply {all|5|7-8|12}

<!--
Und so sieht das im Code aus. Der entscheidende Import ist apply aus ol-mapbox-style. Wir erstellen eine LayerGroup — die wird unsere Basiskarte. apply() holt den Style und befüllt die Gruppe mit allen nötigen Sources und Layern. Diese Gruppe geben wir der Map als erstes Element in layers[]. Das Entscheidende: die Map kann danach beliebige weitere OL-Layer aufnehmen — WMS, GeoJSON, was auch immer — einfach als nächstes Element in layers[].
-->

---

# ol-mapbox-style — OpenFreeMap mit Style-Wechsel

<DemoFrame src="./demos/ol-mapbox-style.html" title="OpenFreeMap mit ol-mapbox-style" />

<!--
Das ist die gleiche Gegend wie bei der OSM-Karte von vorhin — Göttingen. Jetzt aber mit Vector Tiles von OpenFreeMap, einem freien Hosting-Dienst für OpenStreetMap-basierte Vektorkacheln. Mit den drei Buttons könnt ihr den Style wechseln: Liberty ist ein detailreicher OpenStreetMap-Style, Positron ist ein minimalistischer Grauton-Style. Und der Hillshade-Button kombiniert Liberty mit einer Geländeschummerung — ein zweites LayerGroup-Objekt, das einen Raster-DEM-Style mit dem neuen Igor-Hillshade-Algorithmus über die Vektorkarte legt. Kein einziger neuer Kachel-Download beim Style-Wechsel — nur das Rendering im Browser ändert sich.
-->

---

# ol-mapbox-style — ganzer Style, gezielte Kontrolle

<<< @/snippets/ol-mapbox-style.js#layerEdits {all|1|3-4|5-8|9-16}

<!--
Zweites Beispiel: apply() auf die Map — ol-mapbox-style übernimmt die ganze Karte. Der Style kommt vom Agraratlas Österreich, einem öffentlichen INSPIRE-Dienst. Nach dem Laden rufen wir updateMapboxLayer() auf: getMapboxLayer() holt den bestehenden Layer-Descriptor, wir spreaden ihn und überschreiben nur die Sichtbarkeit — visibility: visible. Dann addMapboxLayer() für den Weinbau-Layer: komplett neu definiert mit Source, Source-Layer, Filter auf snar_bezeichnung gleich WEIN (WI), und einer lila Füllfarbe. Kein Neuladen des Style, kein Tile-Download — nur Browser-Rendering.
-->

---

# ol-mapbox-style — Wein & Bio in Grinzing

<DemoFrame src="./demos/ol-mapbox-style-agrar.html" title="Agraratlas mit Biolandwirtschaft" />

<!--
Grinzing, ein Weinbaugebiet im Norden Wiens — bekannt für seine Heurigen. Die Basiskarte kommt komplett aus dem Agraratlas-Style des österreichischen Landwirtschaftsministeriums. Der knallrote Layer zeigt INVEKOS-Schläge unter Biolandbau — er war im Style vorhanden, aber unsichtbar, und wurde mit updateMapboxLayer() eingeschaltet. Der lila Layer ist neu: addMapboxLayer() mit einem Filter auf snar_bezeichnung gleich WEIN (WI) — das sind die Weinbauflächen. Mit den Checkboxen lassen sich beide Layer ein- und ausschalten, jeweils wieder mit updateMapboxLayer().
-->

---

# ol-mapbox-style — Stärken & Möglichkeiten

<v-click>

Mapbox + MapLibre Style Spec + volle OpenLayers API — das beste von allen dreien.
- Kompatibel mit MapTiler, OpenFreeMap, eigenen Kacheln, ...
- Volle Interaktivität: Attributdaten oder Pixel abfragen, Feature-Selection
- Kombinierbar mit allen von OpenLayers unterstützten Layern, Datenquellen und Styles

</v-click>

<v-click>

**Wann Mapbox GL / MapLibre GL?**
Wenn 3D-Terrain, Gebäude-Extrusion oder maximale Rendering-Performance entscheidend sind.

</v-click>

<!--
Der einzigartige Vorteil von ol-mapbox-style: man bekommt die volle Mapbox Style Spec und die volle OpenLayers API in einem — das bietet keine andere Bibliothek. Behördendaten, INSPIRE-Dienste, eigene Tile-Server, Feature-Selection, Hit-Detection, WMS-Layer on top — alles kombinierbar. Mapbox GL und MapLibre GL sind die richtige Wahl, wenn 3D-Terrain, Gebäude-Extrusion oder maximales Rendering-Performance im Vordergrund stehen.
-->

---

# PMTiles — eine Datei, alle Tiles


```
https://agraratlas.inspire.gv.at/map/tiles/{z}/{x}/{y}.pbf
```

<PMTilesDiagram />

<div class="text-sm opacity-60 mt-2">

Erzeugt mit tippecanoe, GDAL, QGIS · Hosting: S3, Cloudflare R2, GitHub Pages<sup><a href="https://github.com/jshttp/mime-db/pull/454">*</a></sup>

<small><sup>*</sup> sobald <a href="https://github.com/jshttp/mime-db/pull/454">jshttp/mime-db#454</a> gemergt ist</small>

</div>

<!--
PMTiles wurde von Brandon Liu (Protomaps) entwickelt. Das Format ist cloud-native: alle Tiles landen in einer einzigen Datei. Intern hat die Datei einen B-Tree-Index, sodass jede Tile mit maximal 2 HTTP Range Requests gezielt geladen werden kann — zuerst der Index, dann die Tile selbst. Kein Server muss die Kacheln extrahieren, CDNs können cachen, statisches Hosting reicht.
-->

---

# pmtiles-protocol — Tiles ohne Server

Das Decoding der PMTiles-Datei wandert vom Server in den Browser.

<small>Serverless-Variante: <a href="https://github.com/ahocevar/do-function-pmtiles">github.com/ahocevar/do-function-pmtiles</a></small>

```diff
  "agrargis": {
    "type": "vector",
-   "url": "https://agraratlas.inspire.gv.at/map/tiles.json"
+   "url": "pmtiles://https://agraratlas.inspire.gv.at/map/tiles/agraratlas.pmtiles"
  }
```

<!--
Der Agraratlas-Tileserver liefert XYZ-PBF-Tiles — aber der Server dahinter ist nur ein dünner Wrapper: eine serverless Funktion, die einzelne Kacheln aus der PMTiles-Datei liest und ausliefert. pmtiles-protocol macht genau das im Browser — fetch(), XMLHttpRequest und Image werden gepatcht, sodass pmtiles://-URLs direkt aus der Datei gelesen werden. Der Server wird überflüssig.
-->

---

# pmtiles-protocol — Browser als Decoder

<<< @/snippets/pmtiles-protocol.js#pmtiles {all|1|4|6}

<!--
pmtiles-protocol ist eine kleine Bibliothek, die ich selbst geschrieben habe. Inspiriert von MapLibre's Custom Protocol Support und Protomaps' pmtiles://-Implementierung für MapLibre. registerPMTilesProtocol() patcht fetch(), XMLHttpRequest und Image im Browser — danach werden pmtiles://-URLs transparent aufgelöst, direkt aus der PMTiles-Datei. Der Rest des Codes ist identisch mit dem Agraratlas-Beispiel von vorhin — nur die Style-URL zeigt jetzt auf style-pmtiles.json, das die pmtiles://-Quelle enthält. Kein Server notwendig.
-->

---

# pmtiles-protocol — Wein & Bio in Grinzing

<DemoFrame src="./demos/ol-pmtiles-agrar.html" title="Agraratlas mit PMTiles" />

<!--
Dasselbe Beispiel wie vorhin — aber diesmal kommen alle Vektorkacheln direkt aus einer PMTiles-Datei im Browser. Kein Tile-Server im Betrieb. Die Checkboxen für Bio- und Weinbau funktionieren identisch.
-->

---

# Rasterdaten — mehr als Bilder

<v-click>

<div class="flex gap-8 items-start">
<div>

- PNG-Tiles können RGB-codierte Daten enthalten
- **Igor Hillshade** — der Hillshade-Button von vorhin — Höhenwerte als Terrarium-Encoding in PNG-Kacheln

</div>
<img src="/screenshots/terrarium-tile.png" class="w-40 rounded shadow" alt="Terrarium-encoded elevation PNG tile" />
</div>

</v-click>

<v-click>

- Für echte Rasterverarbeitung: **Cloud Optimized GeoTIFF** (COG)
- HTTP Range Requests — nur der benötigte Ausschnitt wird geladen

</v-click>

<v-click>

- **Mehrere GeoTIFFs kombinieren** — eine GeoTIFF-Source, mehrere Bänder
- **Raster-Styles** — beliebige Berechnungen auf Rohdaten im Browser

</v-click>

<!--
Bisher haben wir Vektordaten und Kartenstyles betrachtet. Aber was ist mit Rasterdaten? PNG-Tiles können nicht nur Bilder sein — sie können auch Daten in den RGB-Werten codieren. Das haben wir beim Igor Hillshade schon gesehen: Höhenwerte werden als Terrarium-Encoding in PNG-Kacheln gespeichert, und OpenLayers rendert daraus Schummerung. Aber um die volle Leistung der Rasterverarbeitung auszuschöpfen, brauchen wir Cloud Optimized GeoTIFFs. COGs unterstützen HTTP Range Requests — der Browser lädt nur den benötigten Ausschnitt. Und das Beste: OpenLayers kann mehrere GeoTIFFs in einer einzigen Source kombinieren, jede Datei wird zu einem Band. Mit Raster-Styles können wir dann beliebige Berechnungen auf diesen Rohdaten ausführen — direkt im Browser.
-->

---

# geotiff.js — Rasterverarbeitung im Browser

<v-click>

- OpenLayers nutzt **geotiff.js** zum Lesen von Cloud Optimized GeoTIFFs
- `DataTile`-Source: speichert Rohdaten (in "Bändern") statt Bilder

</v-click>

<v-click>

- **Beispiel: [BEV](https://bev.gv.at/) Airborne Laserscanning**
  - DTM (Geländemodell) — natürlicher Boden ohne Bewuchs
  - DSM (Oberflächenmodell) — mit Vegetation und Gebäuden

</v-click>

<v-click>

- **DSM − DTM = Objekthöhen** (Bäume, Gebäude, …)
- 1 m Auflösung, EPSG:3035, CC-BY-4.0

</v-click>

<!--
Die GeoTIFF-Source in OpenLayers nutzt intern die geotiff.js-Bibliothek. geotiff.js wurde ursprünglich von Fabian Schindler entwickelt und wird heute von Daniel Dufour und mir betreut. Die Daten werden als DataTile gespeichert — das heißt, es sind echte numerische Werte, keine Bilder. Als Beispiel verwenden wir das Airborne Laserscanning des BEV — das österreichische Bundesamt für Eich- und Vermessungswesen. Die stellen zwei Höhenmodelle als Cloud Optimized GeoTIFFs bereit: das DTM, also das digitale Geländemodell — das ist der natürliche Boden ohne Bewuchs — und das DSM, das digitale Oberflächenmodell mit Vegetation und Gebäuden. Wenn wir die Differenz bilden — DSM minus DTM — erhalten wir die Höhe von Objekten: Bäume, Gebäude und so weiter. Die Daten haben 1 Meter Auflösung und sind frei verfügbar unter CC-BY-4.0.
-->

---

# geotiff.js — DSM minus DTM

<<< @/snippets/geotiff.js#geotiff {all|1-3|4-11|12-24}

<!--
Schauen wir uns den Code an. Wir importieren GeoTIFF als Source und WebGLTile als Layer. Dann erstellen wir eine GeoTIFF-Source mit zwei Dateien: das DTM als Band 1 und das DSM als Band 2. convertToRGB muss auf false stehen, damit wir die Rohdaten bekommen. Der WebGLTile-Layer bekommt einen Raster-Style: wir berechnen die Differenz von Band 2 minus Band 1, also DSM minus DTM, und interpolieren linear über eine Farbskala. Werte nahe 0 sind transparent — da ist kein Objekt. Ab 3 Meter wird es grün — das sind Büsche. 10 Meter ist gelb, typisch für Bäume. Und ab 35 Meter rot — das sind hohe Gebäude.
-->

---

# geotiff.js — Objekthöhen in Wien

<DemoFrame src="./demos/ol-geotiff.html" title="DSM minus DTM — Objekthöhen" />

<!--
Hier sehen wir das Ergebnis für Wien. Die Differenz aus DSM und DTM zeigt uns die Objekthöhen im Gelände. Gelb sind niedrige Strukturen — Büsche und ein- bis zweistöckige Gebäude. Orange markiert Bäume und dreistöckige Bauten. Dunkelrot sind die höchsten Gebäude. Man kann auf die Karte klicken und bekommt die tatsächlichen Höhenwerte — Gelände, Oberfläche und Differenz — direkt aus den GeoTIFF-Rohdaten. All das passiert im Browser: geotiff.js liest die Cloud Optimized GeoTIFFs per Range Request, OpenLayers kombiniert die zwei Bänder und berechnet die Differenz mit WebGL — in Echtzeit.
-->

---

# Fazit: Geoinformation für alle — direkt im Browser

<v-click>

**Kein Server. Keine Client-Software. Nur der Browser.**<br>
Rohdaten werden zu Geoinformation — zugänglich für alle.

</v-click>
<v-click>

OpenLayers als Plattform macht es möglich:<br>
proj4js · ol-mapbox-style · pmtiles-protocol · geotiff.js

</v-click>
<v-click>

Weitere Beispiele für diesen Trend:
- **FlatGeobuf** — Vektordaten per HTTP Range Request, direkt in OpenLayers via `flatgeobuf/ol`
- **GeoZarr** — N-dimensionale Rasterwürfel (Zeitreihen, Höhenstufen, Bänder) — experimentell in OpenLayers

</v-click>

<!--
Der Trend ist eindeutig: kein Server, keine Spezialsoftware — Geodaten werden direkt im Browser verarbeitet. Rohdaten werden zu Geoinformation, zugänglich für alle. OpenLayers als Plattform hat das heute gezeigt: proj4js für Projektion, ol-mapbox-style für Vektorkacheln, PMTiles ohne Tile-Server, geotiff.js für Rasterdaten. Zwei Beispiele, die diesen Trend fortsetzen: FlatGeobuf ist ein effizientes Binärformat für Vektordaten — das flatgeobuf-npm-Paket enthält ein OL-Subpackage, das loader-Funktionen für VectorSource bereitstellt und so räumliche Abfragen per HTTP Range Request ermöglicht, ganz ohne eigenen Server. GeoZarr geht in dieselbe Richtung für Rasterdaten: N-dimensionale Datenwürfel — Zeitreihen, Höhenstufen, mehrere Bänder — direkt im Browser. Die Richtung ist klar.
-->

---
layout: two-cols
layoutClass: gap-8
---

# Danke! <ph-hands-clapping class="inline mb-1" />

<ph-chat-circle-dots class="inline mb-1" /> Fragen? Feedback?

<div class="mt-8 space-y-3">

<ph-github-logo class="inline mb-1" /> [github.com/ahocevar](https://github.com/ahocevar)

<br>

<ph-envelope class="inline mb-1" /> [ahocevar@w3geo.at](mailto:ahocevar@w3geo.at)

</div>

<div class="mt-8 text-sm opacity-60">

Diese Präsentation:<br>[github.com/ahocevar/fossgis-2026](https://github.com/ahocevar/fossgis-2026)

</div>

::right::

<img src="https://avatars.githubusercontent.com/u/211514?v=4" class="rounded-full w-60 mt-12 mx-auto" />

<QRCode value="https://github.com/ahocevar/fossgis-2026" class="mx-auto mt-6 w-40" />

<!--
Vielen Dank für eure Aufmerksamkeit! Ich freue mich über Fragen, Feedback und Gespräche — gerne auch nach dem Vortrag oder per E-Mail.
-->
