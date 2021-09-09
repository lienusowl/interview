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

body {
  background: #666;
}

</style>
