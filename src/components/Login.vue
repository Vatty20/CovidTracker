<template>
<div class="body">
  <h1 class="greet">COVID 19 Tracker</h1>
  <div class="container">
  <form class="loginform" @submit.prevent="creds">
    <h3 class="sign-in">Sign In:</h3>
    <div class="flex-input">
      <label for="">Username</label>
      <input 
        class="email"
        type="text" 
        v-model="email" 
        name="emailid" 
        placeholder="Enter Email"
        onfocus="this.placeholder=''" 
        onblur="this.placeholder='Enter Email'"
        required
      />
    </div>
    <div class="flex-input" required>
      <label for="">Password</label>
      <input 
        class="password"
        type="password" 
        v-model="password" 
        name="password" 
        placeholder="Enter Password" 
        onfocus="this.placeholder=''" 
        onblur="this.placeholder='Enter Password'"
        required
      />
    </div>
    <div id="parent">
      <button @click="submit">LOGIN</button>
      <!-- <input type="button" @click="submit" value="LOGIN"> -->
    </div>
  </form>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Login",
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async submit() {
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        )
        if(result.status == 200 && result.data.length > 0) {
          localStorage.setItem("user-info",JSON.stringify(result.data[0]))
          this.$router.push({name:'Welcome'})
        } else {
          let divElement = document.createElement('div');
          let divElementText = document.createTextNode("*Incorrect username or password");
          divElement.appendChild(divElementText);
          let parent = document.querySelector('#parent')
          parent.appendChild(divElement)
        }
        // console.warn(result)
        this.email='';
        this.password='';
      }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if(user) {
      this.$router.push({name:'Welcome'})
    }
  }
};
</script>

<style scoped>
#parent {
  color:red;
}
.container {
  display: flex;
  justify-content: center;
  height: 600px;
  align-items: center;
}
.sign-in {
  display: flex;
  justify-content: center;
}
.loginform {
  background-color: rgb(255, 255, 255, 0.5);
  padding: 10px;
  width: 400px;
  height: 300px;
}
.flex-input {
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}
input[type="text"], [type="password"]{
  padding: 10px;
  font-size: 18px;
}
label {
  flex-basis: 130px;
  margin-top: 10px;
  font-size: 20px;
}
button {
  width: 100%;
  font-size: 20px; 
  padding: 10px;
  background-color: blueviolet;
  color: white;
  border: none;
  margin: 20px 0;
}
button:hover {
  cursor: pointer;
  background-color: rgb(98, 23, 168);
}
.greet {
  text-align: center;
  text-decoration: underline;
  color: azure;
  display: flex;
  justify-content: center;
  padding-top: 90px;
}
.body {
  background-image: url('../assets/Login.jpeg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>