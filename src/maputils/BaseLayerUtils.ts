import HxMap from "../maputils/HxMap";
import TileLayer from "@arcgis/core/layers/TileLayer";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
export default class BaseLayerUtils {
  static getLayerByid(lyrid: string) {
    let pLayer = HxMap.getInstance().map.findLayerById(lyrid);
    return pLayer;
  }
  static hideLayerByid = (lyrid: string) => {
    let pLayer = BaseLayerUtils.getLayerByid(lyrid);
    pLayer.visible = false;
    return pLayer;
  };
  static showLayerByid = (lyrid: string) => {
    let pLayer = BaseLayerUtils.getLayerByid(lyrid);
    pLayer.visible = true;
    return pLayer;
  };
  static addTileLayer = (turl: string, ids: string) => {
    let pLayer = new TileLayer({
      url: turl,
      id: ids,
    });
    HxMap.getInstance().map.add(pLayer);
    return pLayer;
  };
  static addMapLayer = (murl: string, ids: string) => {
    let pLayer = new MapImageLayer({
      url: murl,
      id: ids,
    });
    HxMap.getInstance().map.add(pLayer);
    return pLayer;
  };
  static addFeatureLayer = (furl: string, ids: string) => {
    let pLayer = new FeatureLayer({
      url: furl,
      id: ids,
      outFields: ["*"],
    });
    HxMap.getInstance().map.add(pLayer);
    return pLayer;
  };
}
