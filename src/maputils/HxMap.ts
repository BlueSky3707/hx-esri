import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import mapConfig from "../maputils/mapConfig";
import Extent from "@arcgis/core/geometry/Extent";
export default class HxMap {
  static mapids: string;
  static instance: MapView;
  static getInstance() {
    if (!HxMap.instance) {
      HxMap.instance = HxMap.intMap(HxMap.mapids);
    }
    return HxMap.instance;
  }
  static intMap(ids: string) {
    let map = new Map({});
    return new MapView({
      map: map,
      container: ids,
      extent: new Extent({
        xmax: mapConfig.mapExtent.xmax,
        xmin: mapConfig.mapExtent.xmin,
        ymax: mapConfig.mapExtent.ymax,
        ymin: mapConfig.mapExtent.ymin,
      }),
    });
  }
}
