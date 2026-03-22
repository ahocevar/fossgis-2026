// #region map
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4.js';
import {fromLonLat, get as getProjection} from 'ol/proj.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import Feature from 'ol/Feature.js';
import Polygon from 'ol/geom/Polygon.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import GeoJSON from 'ol/format/GeoJSON.js';

function equalEarth(lon0) {
  const code = `EqualEarth${lon0}`;
  if (!getProjection(code)) {
    proj4.defs(code,
      `+proj=eqearth +lon_0=${lon0} +R=6371008.7714 +units=m +no_defs +type=crs`);
    register(proj4);
    getProjection(code).setExtent([-17243959, -8392928, 17243959, 8392928]);
  }
  return getProjection(code);
}

const geojson = await (await fetch('ne_110m_land.geojson')).json();
const projection = equalEarth(0);

// The oval boundary is the same in projected coords for any lon_0
const oval = [];
for (let lat = -90; lat <= 90; lat++)
  oval.push(fromLonLat([-179.99, lat], projection));
for (let lat = 90; lat >= -90; lat--)
  oval.push(fromLonLat([179.99, lat], projection));
oval.push(oval[0]);
const big = [[-5e7, -5e7], [-5e7, 5e7], [5e7, 5e7], [5e7, -5e7], [-5e7, -5e7]];

const oceanLayer = new VectorLayer({
  source: new VectorSource({features: [new Feature(new Polygon([oval]))]}),
});
const landLayer = new VectorLayer({
  source: new VectorSource({
    features: new GeoJSON({featureProjection: projection}).readFeatures(geojson),
  }),
  extent: projection.getExtent(),
  wrapX: false,
});
const maskLayer = new VectorLayer({
  source: new VectorSource({features: [new Feature(new Polygon([big, oval]))]}),
});

const map = new Map({
  target: 'map',
  layers: [oceanLayer, landLayer, maskLayer],
  view: new View({projection, center: [0, 0], zoom: 0, showFullExtent: true}),
  controls: [],
});

// #region globe
import proj4 from 'proj4';
import {register} from 'ol/proj/proj4.js';
import {get as getProjection} from 'ol/proj.js';
function equalEarth(lon0) {
  const code = `EqualEarth${lon0}`;
  if (!getProjection(code)) {
    proj4.defs(code,
      `+proj=eqearth +lon_0=${lon0} +R=6371008.7714 +units=m +no_defs +type=crs`);
    register(proj4);
    getProjection(code).setExtent([-17243959, -8392928, 17243959, 8392928]);
  }
  return getProjection(code);
}
let lon = 0;
setInterval(() => {
  const p = equalEarth(lon = (lon + 2) % 360);
  landLayer.setSource(new VectorSource({
    features: new GeoJSON({featureProjection: p}).readFeatures(geojson),
  }));
  landLayer.setExtent(p.getExtent());
  map.setView(new View({
    projection: p, center: [0, 0], zoom: 0, showFullExtent: true,
  }));
}, 50);
// #endregion globe
