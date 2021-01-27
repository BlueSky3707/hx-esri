<template>
  <div id="content">
    <HxMap></HxMap>
    <LayerSwitch></LayerSwitch>
  </div>
</template>

<script>
import HxMap from "../mapview/HxMap";
import LayerSwitch from "../mapview/LayerSwitch";
export default {
  components: {
    HxMap,
    LayerSwitch,
  },
  mounted() {},
};
</script>

<style>
#content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
