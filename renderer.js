// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const esriLoader = require('esri-loader');

// NOTE: have to use <= v4.7 for now due to bug
// see: https://github.com/Esri/esri-loader/issues/147
const url = 'https://js.arcgis.com/4.7/';

// esri-loader options
const options = { url };

// load esri CSS for this version
esriLoader.loadCss(`${url}esri/css/main.css`)

// load esri JS modules
esriLoader.loadModules(['esri/views/MapView', 'esri/WebMap'], options)
.then(([MapView, WebMap]) => {
  // then we load a web map from an id
  var webmap = new WebMap({
    portalItem: { // autocasts as new PortalItem()
      id: 'f2e9b762544945f390ca4ac3671cfa72'
    }
  });
  // and we show that map in a container w/ id #viewDiv
  var view = new MapView({
    map: webmap,
    container: 'viewDiv'
  });
});
