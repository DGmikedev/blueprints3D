<template>
  <div>
    <h3>Indicador de Contaminación</h3>
    <canvas></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { BasicScene } from '../babylonScripts/BasicScene';
import { MaterialsB } from '@/babylonScripts/MaterialsB';
export default defineComponent({
  name: 'cubeComponent',
  mounted(){
    const canvas = document.querySelector("canvas")!;
    //new BasicScene(canvas);
    new MaterialsB(canvas);
  }
  
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas{
  width: 70%;
  height:70%
}
</style>
