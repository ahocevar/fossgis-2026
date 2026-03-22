// #region geotiff
import GeoTIFF from 'ol/source/GeoTIFF.js';
import TileLayer from 'ol/layer/WebGLTile.js';

const source = new GeoTIFF({
  sources: [
    {url: 'https://ahocevar.com/bev/dtm.tif'},
    {url: 'https://ahocevar.com/bev/dsm.tif'},
  ],
  convertToRGB: false,
  normalize: false,
});

const layer = new TileLayer({source, style: {
  color: [
    'interpolate', ['linear'],
    ['-', ['band', 2], ['band', 1]],
    0, [0, 0, 0, 0],
    3, [255, 255, 178, 1],
    6, [254, 204, 92, 1],
    10, [253, 141, 60, 1],
    20, [240, 59, 32, 1],
    35, [189, 0, 38, 1],
  ],
}});
// #endregion geotiff
