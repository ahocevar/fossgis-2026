// #region pmtiles
import {register as registerPMTilesProtocol} from 'pmtiles-protocol';
import {apply, addMapboxLayer, getMapboxLayer, updateMapboxLayer} from 'ol-mapbox-style';

registerPMTilesProtocol();

apply(map, 'https://agraratlas.inspire.gv.at/map/style-pmtiles.json')
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
// #endregion pmtiles
