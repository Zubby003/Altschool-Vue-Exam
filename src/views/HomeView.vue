<template>
  <div class="altschool-wrapper" :mode="mode">
    <h3 class="welcome">
      Welcome 👋 <br />
      I'm Ahamefula Nzubechi (AltSchooler)
    </h3>
    <div>
      <h3 class="altschool-name">AltSchool Africa Third Semester Exam</h3>
      <p class="altschool-history">
        My Altschool Africa Third Semester Exam is a simple Counter App built
        with VueJs and CSS. it performs basic Incrememt,Decrement,Reset and set
        value functions.
      </p>
    </div>
    <button @click="redirect" class="project-btn">View Project</button>
  </div>
</template>

<script>
export default {
  props: ["mode"],
  methods: {
    redirect() {
      this.$router.push({ path: "/counter" });
    },
  },
};
</script>

<style scoped>
.altschool-wrapper {
  margin-top: 30px;
}
.dark p {
  color: #fff;
}
.welcome {
  padding-left: 10px;
  color: #4a9edb;
  line-height: 30px;
}
.altschool-name {
  text-align: center;
  color: #4a9edb;
  font-size: 16px;
  padding-left: 0px 10px;
}
.altschool-history {
  padding: 0px 10px;
  line-height: 32px;
  color: #75787a;
}
.project-btn {
  padding: 16px;
  background-color: #4a9edb;
  color: white;
  border: none;
  border-radius: 4px;
  margin: 10px;
}
</style>
