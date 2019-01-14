// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// load esri modules
esriLoader.loadModules(['esri/views/MapView', 'esri/WebMap'])
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
