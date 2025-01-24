<template>
  
  <CubeComponent/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CubeComponent from '@/components/cubeComponent.vue';


export default defineComponent({
  name: 'App',
  components: {
    CubeComponent
  }
});
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:aliceblue;
  padding:0;
  margin:0;
  background-image: url("../public/imgs/fondo.png");   
  background-size: cover;
  background-position:center;
  
 
} 
* {
  padding:0;
  margin:0;
  background-image: url("../public/imgs/fondo.png");   
  background-size: cover;
  background-position:center;
}
 /*
* {
  padding:0;
  margin:0;
  background-image: url("../public/imgs/fondo.png");   
  background-size: cover;
  background-position:center;
}

#app {
  width:100%;
  height:100%; 
  display:flex;
  justify-content: center;
  align-items: center; 
  margin-top:4rem;
}*/
</style>
