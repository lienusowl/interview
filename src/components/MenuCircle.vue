<template>
  <div>

    <div class="donut-menu" @wheel.prevent="onWheel">
      <div class="donut-border">
        <svg
            class="progress-ring"
            width="220"
            height="220"
            :class="{ animated: useTransitions }"
            :style="{transform: 'rotate('+donutRotation/2+'deg'}"
        >
          <circle
              class="circle-inner"
              stroke="#666"
              stroke-width="60"
              fill="transparent"
              r="80"
              cx="50%"
              cy="50%"
              v-for="(axis, key) in rays"
              v-bind:key="key"
              :stroke-dasharray="numRadiusDash(key)"
              :stroke-dashoffset="strokeDashoffset(key)"
              @click="goToTop(key)"
          />

        </svg>
      </div>

      <div class="menu"
           :class="{ animated: useTransitions }"
           :style="{'--menu-rotation': `${menuRotation}deg`}">

        <div v-for="(axis, key) in rays"
             v-bind:key="key"
             class="axis"
             :class="{ closed: !isMenuOpen, active: isActive(axis) }"
             :style="{'--axis-rotation': getDeg(key)+'deg'}">
          <a @click="goToTop(key)">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 9.12269C17.4145 8.38963 18 7.26319 18 6V18.5C18 18.8978 17.842 19.2794 17.5607 19.5607C17.2794 19.842 16.8978 20 16.5 20H3.5C3.10218 20 2.72064 19.842 2.43934 19.5607C2.15804 19.2794 2 18.8978 2 18.5V5.5C2 5.10218 2.15804 4.72064 2.43934 4.43934C2.72064 4.15804 3.10218 4 3.5 4L10.5351 4C10.2739 4.45161 10.0984 4.95903 10.0309 5.5H3.5V18.5H16.5V9.12269ZM17.8032 4.75719C17.931 4.98156 18 5.23722 18 5.5V6C18 5.56613 17.9309 5.14839 17.8032 4.75719ZM5.52583 17.3333H14.4252C15.1143 17.3333 15.5221 16.5625 15.1335 15.9925L11.7854 11.0819C11.7067 10.9666 11.601 10.8724 11.4775 10.8072C11.3541 10.742 11.2166 10.708 11.0771 10.708C10.9375 10.708 10.8 10.742 10.6766 10.8072C10.5532 10.8724 10.4475 10.9666 10.3687 11.0819L9.01749 13.0625L8.65624 12.5533C8.57694 12.4417 8.47207 12.3506 8.35038 12.2878C8.22869 12.2249 8.09372 12.1922 7.95676 12.1922C7.81981 12.1922 7.68484 12.2249 7.56315 12.2878C7.44146 12.3506 7.33659 12.4417 7.25729 12.5533L4.82646 15.9791C4.42334 16.5473 4.82938 17.3333 5.52583 17.3333Z" fill="black"/>
              <path d="M20.906 11.9689L20.906 11.9689C20.9675 12.0305 21.0163 12.1035 21.0496 12.1839C21.0829 12.2643 21.1 12.3505 21.1 12.4375C21.1 12.5245 21.0828 12.6107 21.0495 12.6911C21.0162 12.7714 20.9674 12.8445 20.9058 12.906L20.906 11.9689ZM20.906 11.9689L18.0441 9.10726L20.906 11.9689ZM20.0396 12.8353L19.9689 12.906L17.1073 10.0441C16.2176 10.7298 15.1249 11.1016 14 11.1C13.9999 11.1 13.9999 11.1 13.9998 11.1L14 11C11.2386 11 9 8.76137 9 5.99998C9 3.23858 11.2386 1 14 1L20.0396 12.8353ZM20.0396 12.8353L19.9689 12.906C20.0932 13.0302 20.2617 13.1 20.4374 13.1C20.6131 13.1 20.7816 13.0302 20.9058 12.906L20.0396 12.8353ZM10.225 5.99998C10.225 3.91459 11.9146 2.225 14 2.225C16.0854 2.225 17.775 3.91459 17.775 5.99998C17.775 8.08537 16.0854 9.77496 14 9.77496C11.9146 9.77496 10.225 8.08537 10.225 5.99998Z" fill="black" stroke="black" stroke-width="0.2"/>
            </svg>
            <span>{{axis}}</span>
          </a>
        </div>

      </div>

    </div>

  </div>
</template>

<script>


export default {
  name: 'MenuCircle',

  data: function () {
    return {
      useTransitions: true,
      isMenuOpen: true,
      rotation: -0,
      bCount: this.rays.length,
      radius: 80
    }
  },
  props: {
    rays: {type: Array}
  },
  computed: {


    axisRotations() {
      return Array.from({
        length: this.buttonsCount()
      }).map((_, i) => 360 * (this.buttonsCount() - i) / this.buttonsCount());
    },
    menuRotation: {
      get() {
        return this.rotation
      },
      set(val) {
        this.rotation = isNaN(Number(val)) ? -0 : Number(val)
      }
    },
    donutRotation: {
      get() {
        return this.rotation * 2 - 45
      },
      set(val) {
        this.rotation = isNaN(Number(val)) ? -45 : Number(val)
      }
    }
  },
  methods: {

    onWheel(event){
      const perDeg = 360 / this.rays.length / 10;
      if (event.deltaY < 0) {
        this.rotation -= perDeg;
      } else {

        this.rotation += perDeg;
      }
    },
    getDeg(key){
      return 360 * (key - 1) / this.bCount;
    },
    numRadiusDash(key) {
      let dash = Math.round(2*Math.PI*this.radius / this.bCount + (key*0));
      return `${dash} ` + 2*Math.PI*this.radius
    },
    strokeDashoffset(key) {
      let dash = Math.round(2*Math.PI*this.radius / this.bCount);
      return -dash*key
    },
    buttonsCount() {
      return `${this.rays.length}`
    },
    goToTop(axis) {

      let diff = this.degreesToTop(axis);

      diff = diff > 180
          ? diff - 360
          : diff <= -180
              ? diff + 360
              : diff;
      this.menuRotation = Math.round((this.menuRotation + diff) * 10) / 10;
    },
    degreesToTop(axis) {
      return (Math.round(this.axisRotations[axis - 1]) - this.menuRotation - 90) % 360;
    },
    isActive(axis) {
      return !(this.degreesToTop(axis));
    },

  }

};


</script>


<style>

.donut-menu {
  display: flex;
  height: 220px;
  position: relative;
  width: 220px;
  justify-content: center;
  align-items: center;
}
.donut-menu:before{
  content:'';
  width: 100px;
  height: 100px;
  background: transparent;
  border-radius: 50%;
  position: absolute;
  border: 60px solid #fff;
}

.donut-border{
  width: 100px;
  height: 100px;
  background: transparent;
  border-radius: 50%;
  position: relative;

}

.donut-border svg{
  border-radius:50%;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: 1;
}
.donut-border svg .circle-inner{
  /*stroke-dasharray: 1 20;*/
  fill:transparent;
  stroke: transparent;
  transition: all .3s;
}
.donut-border svg .circle-inner:hover{
  stroke: #222;
  opacity: .2;
  cursor: pointer;
}

.menu {
  width: 0;
  height: 0;
  top: 110px;
  left: 110px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(var(--menu-rotation));
  --menu-rotation: 0deg;
}

.menu .axis {
  position: absolute;
  width: 100px;
  left: 0;
  height: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transform-origin: 0 0;
  transform: rotate(var(--axis-rotation));

}



.animated .axis.axis {
  transition: all .54s cubic-bezier(.4, 0, .2, 1);
}

.menu .axis.closed {
  width: 27px;
  transform: rotate(calc(var(--axis-rotation) + 180deg));
  opacity: .1;
}

.axis.closed a,
.axis.active a {
  /*background: rgba(0, 0, 0, 0.2);*/
}

.axis.active:not(.closed) {
  z-index: 1;
}

.axis a {
  cursor: pointer;
  width: 45px;
  height: 45px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  transform: rotate(calc(calc(-1 * var(--axis-rotation)) - var(--menu-rotation))) translateZ(0);
  outline: none;
  flex-direction: column;
  font-size: 9px;
}

.axis a::selection {

  background: #fff;
}





.animated,
.animated .axis,
.animated .axis>* {
  transition: transform .3s linear;
}


.donut-segment {
  fill: transparent;
  animation-name: render;
  animation-duration: 1s;
  width: 240px;
  height: 240px;
}

.donut-segment:hover{
  stroke:#eee;
}



@keyframes render {
  0% {
    stroke-dasharray: 0 100;
  }
}
</style>
