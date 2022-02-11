<template>
  <div>
    <Dashboard />
    <div class="body">
    <p class="hello">Welcome {{ name }}!</p>
    </div>
    <div class="body-right">
    <p class="hello-right"></p>
    </div>
  </div>
</template>

<script>
import Dashboard from "./Dashboard.vue";
export default {
  name: "Welcome",
  data() {
    return {
      name: '',
    };
  },
  components: {
    Dashboard,
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    this.name = JSON.parse(user).name;
    if(user) {
      this.$router.push({name:'Welcome'})
    }
  }
};
</script>

<style scoped>
    .hello {
        display: flex;
        align-content: center;
        justify-content: center;
        /* padding-bottom: 5em; */
        font-size: 50px;
        color: white;
        height: 100%;
        font-family: sans-serif;
    }
    .body {
        background-image: url('../assets/Login.jpeg');
        background-repeat: no-repeat;
        margin-top: 05px;
        background-size: 100% 100%;
        height: 550px;
        float: left;
        width: 49%;
    }
    .body-right {
        background-image: url('../assets/covid-saferathome.jpg');
        background-repeat: no-repeat;
        margin-top: 05px;
        background-size: 100% 100%;
        height: 550px;
        float: right;
        width: 49%;
    }
</style>