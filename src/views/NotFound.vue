<template>
  <div class="notfound">
    <h1>🚫</h1>
    <h2>404-Not Found</h2>
    <h3>Sorry,the page you are looking for cannot found</h3>
    <button @click="redirect">Back Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.notfound {
  margin: 60px;
}
.notfound button {
  background: red;
  margin: 30px;
  font-size: 20px;
}
</style>
