<template>
  <div id="app">
    <img src="./assets/logo.png">
    <transition :name="transitionName"> 
      <router-view/>
    </transition> 
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
        transitionName :'slide-forward'
    }
  },
watch: {  
'$route' (to, from) {  
   if (!this.map[to.path]) {
      this.map[to.path] = +new Date() + 1;
    }
    if (!this.map[from.path]) {
     this.map[from.path] = +new Date();
    }

    if (this.map[to.path] > this.map[from.path]) {
      this.transitionName = 'slide-forward';
    } else {
     this.transitionName = 'slide-back'
    } 
  }  
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-view {
  position: absolute;
  top: 0;
  left: 0;
}

.slide-forward-enter {
  transform: translate(100%);
}
.slide-forward-enter-active {
  transition: all 1s ease-in-out;
}
.slide-forward-leave-active {
  transform: translate(-100%);
  transition: all  1s ease-in-out;
}


.slide-back-enter {
  transform: translate(-100%);
}
.slide-back-enter-active {
  transition: all 1s ease-in-out;
}
.slide-back-leave-active {
  transform: translate(100%);
  transition: all  1s ease-in-out;
}
</style>
