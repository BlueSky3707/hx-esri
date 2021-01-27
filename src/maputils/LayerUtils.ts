import BaseLayerUtils from "../maputils/BaseLayerUtils";
import mapConfig from "../maputils/mapConfig";
export default class LayerUtils extends BaseLayerUtils {
  static addBaseLayers = () => {
    LayerUtils.addTileLayer(mapConfig.imgVector, "sximagid");
    LayerUtils.hideLayerByid("sximagid");
    LayerUtils.addTileLayer(mapConfig.imgVectorL, "sximaglid");
    LayerUtils.hideLayerByid("sximaglid");
    LayerUtils.addTileLayer(mapConfig.dtVector, "sxtileid");
    LayerUtils.addTileLayer(mapConfig.dtVectorL, "sxtilelid");
  };
}
