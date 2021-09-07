<template>
  <div>

    <div class="flexer">
<!--      <div class="flexer-border"></div>-->
      <svg class="chart" width="240" height="240" viewBox="0 0 50 50" >
        <circle
            class="unit"
            :r="numRadius+'%'"
            cx="50%"
            cy="50%"
            v-for="axis in rays"
            v-bind:key="axis"
            :style="'stroke-dasharray:20;' + {'stroke-dashoffset:': getDeg(axis)}">
            </circle>
      </svg>

      <div class="menu"
           :class="{ animated: useTransitions }"
           :style="{'--menu-rotation': `${menuRotation}deg`}">

        <div v-for="(axis, key) in rays"
             v-bind:key="axis"
             class="axis"
             :class="{ closed: !isMenuOpen, active: isActive(axis) }"
             :style="{'--axis-rotation': getDeg(key)+'deg'}">
          <a @click="goToTop(axis)" >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 9.12269C17.4145 8.38963 18 7.26319 18 6V18.5C18 18.8978 17.842 19.2794 17.5607 19.5607C17.2794 19.842 16.8978 20 16.5 20H3.5C3.10218 20 2.72064 19.842 2.43934 19.5607C2.15804 19.2794 2 18.8978 2 18.5V5.5C2 5.10218 2.15804 4.72064 2.43934 4.43934C2.72064 4.15804 3.10218 4 3.5 4L10.5351 4C10.2739 4.45161 10.0984 4.95903 10.0309 5.5H3.5V18.5H16.5V9.12269ZM17.8032 4.75719C17.931 4.98156 18 5.23722 18 5.5V6C18 5.56613 17.9309 5.14839 17.8032 4.75719ZM5.52583 17.3333H14.4252C15.1143 17.3333 15.5221 16.5625 15.1335 15.9925L11.7854 11.0819C11.7067 10.9666 11.601 10.8724 11.4775 10.8072C11.3541 10.742 11.2166 10.708 11.0771 10.708C10.9375 10.708 10.8 10.742 10.6766 10.8072C10.5532 10.8724 10.4475 10.9666 10.3687 11.0819L9.01749 13.0625L8.65624 12.5533C8.57694 12.4417 8.47207 12.3506 8.35038 12.2878C8.22869 12.2249 8.09372 12.1922 7.95676 12.1922C7.81981 12.1922 7.68484 12.2249 7.56315 12.2878C7.44146 12.3506 7.33659 12.4417 7.25729 12.5533L4.82646 15.9791C4.42334 16.5473 4.82938 17.3333 5.52583 17.3333Z" fill="black"/>
              <path d="M20.906 11.9689L20.906 11.9689C20.9675 12.0305 21.0163 12.1035 21.0496 12.1839C21.0829 12.2643 21.1 12.3505 21.1 12.4375C21.1 12.5245 21.0828 12.6107 21.0495 12.6911C21.0162 12.7714 20.9674 12.8445 20.9058 12.906L20.906 11.9689ZM20.906 11.9689L18.0441 9.10726L20.906 11.9689ZM20.0396 12.8353L19.9689 12.906L17.1073 10.0441C16.2176 10.7298 15.1249 11.1016 14 11.1C13.9999 11.1 13.9999 11.1 13.9998 11.1L14 11C11.2386 11 9 8.76137 9 5.99998C9 3.23858 11.2386 1 14 1L20.0396 12.8353ZM20.0396 12.8353L19.9689 12.906C20.0932 13.0302 20.2617 13.1 20.4374 13.1C20.6131 13.1 20.7816 13.0302 20.9058 12.906L20.0396 12.8353ZM10.225 5.99998C10.225 3.91459 11.9146 2.225 14 2.225C16.0854 2.225 17.775 3.91459 17.775 5.99998C17.775 8.08537 16.0854 9.77496 14 9.77496C11.9146 9.77496 10.225 8.08537 10.225 5.99998Z" fill="black" stroke="black" stroke-width="0.2"/>
            </svg>
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
      bCount: this.rays.length
    }
  },
  props: {
    rays: {type: Array}
  },
  computed: {
    numRadius() {
      return 100 / this.rays.length;
    },
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
    }
  },
  methods: {
    getDeg(key){
      return 360 * (key - 1) / this.bCount;
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
  width: 54px;
  height: 54px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  transform: rotate(calc(calc(-1 * var(--axis-rotation)) - var(--menu-rotation))) translateZ(0);
  outline: none;
}

.flexer {
  display: flex;
  height: 220px;
  position: relative;
  width: 220px;
  justify-content: space-between;
  align-items: center;
}
.flexer-border{
  content: '';
  background: transparent;
  border: 55px solid #fff;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 5px;
  right: 0;
  top: 5px;
  bottom: 0;
}






input {
  width: 100%;
}

label input {
  width: auto;
}

label {
  display: block;
  margin-top: 1rem;
  cursor: pointer;
}

.animated,
.animated .axis,
.animated .axis>* {
  transition: transform .35s cubic-bezier(.4, 0, .2, 1);
}


.unit {
  fill: #fff;
  stroke-width: 10;
  animation-name: render;
  animation-duration: 1s;
  width: 220px;
  height: 220px;
}

.unit:hover{
  fill:#eee;

}

/*.unit:nth-child(1) {*/
/*  stroke: #fff;*/

/*}*/
/*.unit:nth-child(2) {*/
/*  stroke: #fff;*/

/*}*/
/*.unit:nth-child(3) {*/
/*  stroke: #eee;*/
/*}*/
/*.unit:nth-child(4) {*/
/*  stroke: #333;*/

/*}*/
/*.unit:nth-child(5) {*/
/*  stroke: #fff;*/

/*}*/
/*.unit:nth-child(6) {*/
/*  stroke: #333;*/

/*}*/
/*.unit:nth-child(7) {*/
/*  stroke: #eee;*/

/*}*/
/*.unit:nth-child(8) {*/
/*  stroke: #fff;*/

/*}*/
/*.unit:nth-child(9) {*/
/*  stroke: #333;*/

/*}*/
/*.unit:nth-child(10) {*/
/*  stroke: #eee;*/

/*}*/


@keyframes render {
  0% {
    stroke-dasharray: 0 100;
  }
}
</style>
