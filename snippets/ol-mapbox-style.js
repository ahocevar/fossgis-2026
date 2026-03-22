// #region apply
import Map from 'ol/Map.js';
import LayerGroup from 'ol/layer/Group.js';
import View from 'ol/View.js';
import {fromLonLat} from 'ol/proj.js';
import {apply} from 'ol-mapbox-style';

const basemap = new LayerGroup();
apply(basemap, 'https://tiles.openfreemap.org/styles/liberty');

const map = new Map({
  target: 'map',
  layers: [basemap],
  view: new View({
    center: fromLonLat([9.93581, 51.54092]),
    zoom: 13,
  }),
});
// #endregion apply

// #region layerEdits
import {apply, addMapboxLayer, getMapboxLayer, updateMapboxLayer} from 'ol-mapbox-style';

apply(map, 'https://agraratlas.inspire.gv.at/map/style.json')
  .then(() => {
    updateMapboxLayer(map, {
      ...getMapboxLayer(map, 'invekos_schlaege_polygon-bio'),
      layout: {visibility: 'visible'},
    });
    addMapboxLayer(map, {
      id: 'vineyards',
      type: 'fill',
      source: 'agrargis',
      'source-layer': 'invekos_schlaege_polygon',
      filter: ['==', ['get', 'snar_bezeichnung'], 'WEIN'],
      paint: {'fill-color': 'rgba(160, 32, 240, 0.5)'},
    });
  });
// #endregion layerEdits
