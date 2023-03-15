<template>
  <div class="app" :class="mode">
    <NavBar :mode="mode" @toggle="toggle" />
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
  data() {
    return {
      mode: "light",
    };
  },
  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background: #f3f3f3;
  color: #15202b;
  width: 100vw;
  min-height: 100vh;
}
.dark {
  background: #192734;
  color: #f3f3f3;
}
</style>
