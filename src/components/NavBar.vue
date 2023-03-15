<template>
  <div class="nav-container">
    <header>
      <img
        alt="AltSchool logo"
        class="logo"
        src="@/assets/altschool_africa.png"
        width="125"
        height="125"
      />

      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/counter">Counter</router-link>|
      </nav>
      <Toggle :mode="mode" @toggle="$emit('toggle')" />
    </header>
  </div>
</template>

<script>
import Toggle from "./Toggle.vue";

export default {
  name: "NavBar",
  props: ["mode"],
  components: { Toggle },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
header {
  /* max-height: 100vh; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  /* max-width: 1440px; */
  /* vertical-align: center; */
  background: #a5cfed;
  /* margin: 0 auto; */
}
/* nav {
  padding: 30px;
} */

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
nav a:hover {
  background: crimson;
}

nav a.router-link-exact-active {
  color: #fff;
  background: crimson;
}

.dark header {
  background: #15202b;
}
</style>
