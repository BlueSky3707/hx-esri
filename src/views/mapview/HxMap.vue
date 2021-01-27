<template>
  <div id="mapid"></div>
</template>
<script lang="ts">
import Map from "@arcgis/core/Map";
import HxMap from "../../maputils/HxMap";
import mapConfig from "../../maputils/mapConfig";
import "@arcgis/core/assets/esri/themes/dark/main.css";
import LayerUtils from "../../maputils/LayerUtils";
export default {
  mounted() {
    HxMap.mapids = "mapid";
    HxMap.getInstance();
    LayerUtils.addBaseLayers();
  },
};
</script>
<style>
#mapid {
  width: 100%;
  height: 100%;
  background-color: rgba(88, 162, 223, 0.2);
}
.esri-ui-inner-container {
  visibility: hidden;
}
.esri-view .esri-view-surface--inset-outline:focus::after {
  display: none;
}
</style>
