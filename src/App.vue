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
  directives: {
    draggable: {
      bind: function (el) {
        el.style.position = 'absolute';
        var startX, startY, initialMouseX, initialMouseY;

        function mousemove(e) {
          var dx = e.clientX - initialMouseX;
          var dy = e.clientY - initialMouseY;
          el.style.top = startY + dy + 'px';
          el.style.left = startX + dx + 'px';
          return false;
        }

        function mouseup() {
          document.removeEventListener('mousemove', mousemove);
          document.removeEventListener('mouseup', mouseup);
        }

        el.addEventListener('mousedown', function(e) {
          startX = el.offsetLeft;
          startY = el.offsetTop;
          initialMouseX = e.clientX;
          initialMouseY = e.clientY;
          document.addEventListener('mousemove', mousemove);
          document.addEventListener('mouseup', mouseup);
          return false;
        });
      }
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
body {
  background: url('https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') center top no-repeat;
  font-family: 'Open Sans', sans-serif;
}

</style>
