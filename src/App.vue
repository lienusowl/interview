<template>
  <div id="app">
    <div>

      <MenuCircle v-if="info" :rays="info.data" v-draggable></MenuCircle>

    </div>
  </div>
</template>

<script>
import MenuCircle from './components/MenuCircle';
import axios from 'axios';



export default {
  name: 'App',
  components: {
    MenuCircle,

  },
  data() {
    return {
      info: null,
    };
  },
  beforeCreate() {
    axios
    .get('http://elma-test-task.tmweb.ru/radial-menu')
    .then(response => (this.info = response))
    .catch(error => console.log(error));
  },
  
}
</script>

<style>

body {
  background: #666;
}

</style>
