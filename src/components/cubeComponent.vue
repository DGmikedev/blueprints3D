<template>
  <div>
<br>
    <h3>Indicador de Contaminación</h3>
  <br>
    <canvas></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// import { BasicScene } from '../babylonScripts/BasicScene';
// import { MaterialsB } from '@/babylonScripts/MaterialsB';
// import { MaterialsPBR } from '@/babylonScripts/MaterialsPBR';
import { ImportModels } from '@/babylonScripts/ImportModels';

export default defineComponent({
  name: 'cubeComponent',
  mounted(){
    const canvas = document.querySelector("canvas")!;
    // new BasicScene(canvas);
    // new MaterialsPBR(canvas);
    new ImportModels(canvas);
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
