<template>
  <div id="home">
    <Dashboard />
    <div class="login">
        <form class="form" @submit.prevent="onSubmit">
        <h2 class="para">Enter Country</h2>
        <input
            type="text"
            name="country"
            v-model="country"
            class="box"
            placeholder="Ex. India"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='Ex. India'"
        />
        <button id="buttn" class="btn" @click="submit">Submit</button>
        </form>
    </div>
    <div class="image">    
        <div v-if="value" class="dataclass">
            <h3 class="resulttitle">Showing results for: <span id="input"></span></h3>
            <h3 class="totalcases" >Total Cases: <span id="totalcases"></span></h3>
            <h3 class="activecases" >Active Cases: <span id="activecases"></span></h3>
            <h3 class="totalrecovered" >Total Recovered: <span id="totalrecovered"></span></h3>
            <h3 class="totaldeaths" >Total Deaths: <span id="totaldeaths"></span></h3>
        </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

import Dashboard from "./Dashboard.vue";
export default {
  name: "CurrentData",
  data() {
    return {
      // url_base: 'https://cdn-api.co-vin.in/api/v2/admin/location/states',
        country: "India",
        value: false
    };
  },
  components: {
    Dashboard,
  },
  methods: {
    async submit() {
        this.value = 1,
        fetch(`https://corona.lmao.ninja/v2/countries/${this.country}`)
        .then((response) => {
            return response.json();
        }).then((data) => {
            document.getElementById("input").innerHTML = data.country? data.country:'';
            document.getElementById("totalcases").innerHTML = data.cases? data.cases:'-';
            document.getElementById("activecases").innerHTML = data.active? data.active:'-';
            document.getElementById("totalrecovered").innerHTML = data.recovered? data.recovered:'-';
            document.getElementById("totaldeaths").innerHTML = data.deaths? data.deaths:'-';
        }) 
    },
  },
};
</script>
//https://api.covid19api.com/summary
//https://corona.lmao.ninja/v2/countries/India
//https://api.covid19api.com/dayone/country/${this.state}/status/confirmed
<style scoped>
#home {
    
}
#input {
    
}
.form {
    background-color: rgb(255, 255, 255, 0.5);
    padding: 10px;
    width: 400px;
    height: 300px;
}
.login {
    display: flex;
    justify-content: center;
    background-color: rgb(108, 95, 228);
    height: 800px;
    float: left;
    margin-left: 50px;
    margin-top: 10px;
    align-items: top;
}
.image {
    background-image: url('../assets/worldcovid.jpg');
    display: flex;
    justify-content: center;
    height: 800px;
    float: center;
    margin-left: 500px;
    margin-right: 50px;
    margin-top: 10px;
    align-items: center;    
}
.para {
    display: flex;
    justify-content: center;
    font-style: italic;
}
.form .box {
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    height: 50px;
    text-align: center;
    width: 385px;
    font-size: 20px;
    font-family: sans-serif;
}
.btn {
    width: 100%;
    font-size: 20px; 
    padding: 10px;
    background-color: blueviolet;
    color: white;
    border: none;
    margin: 20px 0;
}
.btn:hover {
    cursor: pointer;
    background-color: rgb(98, 23, 168);
}
.dataclass{    
    display: block;
    text-align: center;
    justify-content: center;
    float: bottom;
    align-items: bottom;
}
.totaldeaths {
    width: 400px;
    margin-left: auto;
    text-decoration: underline;
    margin-right: auto;
    margin-top: 2px;
    font-size: 30px;
    margin-bottom: 0px;
    color: white;
}
.activecases {
    width: 400px;
    margin-left: auto;
    text-decoration: underline;
    margin-right: auto;
    font-size: 30px;
    margin-top: 2px;
    margin-bottom: 0px;
    color: white;
}
.totalcases {
    width: 400px;
    margin-left: auto;
    text-decoration: underline;
    margin-right: auto;
    font-size: 30px;
    margin-top: 2px;
    margin-bottom: 0px;
    color: white;
}
.totalrecovered {
    width: 400px;
    margin-left: auto;
    text-decoration: underline;
    margin-right: auto;
    margin-top: 2px;
    font-size: 30px;
    margin-bottom: 0px;
    color: white;
}
.resulttitle {
    color: white;
    font-size: 40px;
}
</style>