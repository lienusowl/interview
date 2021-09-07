<template>
  <div id="app">
    <MenuCircle v-if="info" :rays="info.data"></MenuCircle>
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
  background-color: #868686;
}

</style>
