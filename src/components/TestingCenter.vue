<template>
    <div class="top">
        <Dashboard />
        <div class="container">            
            <form action="" class="test-center">
                <img src="../assets/vaccine1.png" alt="">
                <h2 class="centers">Check Centers</h2>
                <div class="flex-input">
                    <label for="">Pin Code</label>
                    <input 
                    type="text"
                    v-model="pincode"
                    name="pincode"
                    />
                </div>
                <div class="flex-input">
                    <label for="">Date</label>
                    <input 
                    type="date"
                    v-model="date"
                    name="date"
                    id="datefield"                    
                    min="2022-01-11"
                    />
                </div>
                <input type="button" @click="submit" value="SEARCH">
            </form>
        </div>
        <div class="rightcontain">
            <div>
                <span id="centerdata"></span>
            </div>
            <div class="dataclass">
                <!-- <h3 style="text-decoration: none">Showing results for: <span id="input"></span></h3> -->
                <h3 class="centers" >Center Name:  <span id="centers"></span></h3>
                <h3 class="address" >Address: <span id="address"></span></h3>
                <h3 class="vaccine" >Vaccine: <span id="vaccine"></span></h3>
                <h3 class="slots" >Available Slots: <span id="slots"></span></h3>
            </div>
        </div>
    </div>
</template>

<script>

import Dashboard from './Dashboard.vue'
// import moment from 'moment'
export default {
    name:'TestingCenter',
    data () {
        return {
            pincode: '',
            date: '',
            newDate : (() => {
            var d = new Date(),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2) 
                    month = '0' + month;
                if (day.length < 2) 
                    day = '0' + day;

                return [day, month, year].join('-');
            }) (),
            // var newdate = this.date.getDate() + "-" + (this.date.getMonth() + 1) + "-" + this.date.getFullYear()
            // newdate: format_date(this.date)
            centers: {},
        }
    },
    components: {
        Dashboard
    },
    methods: {
        submit () {
            fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${this.pincode}&date=${this.newDate}`)
            .then(res => {
            return res.json();
            }).then((data) => {
                document.getElementById("centers").innerHTML = data.sessions[0].name;
                document.getElementById("address").innerHTML = data.sessions[0].address;
                document.getElementById("vaccine").innerHTML = data.sessions[0].vaccine;
                document.getElementById("slots").innerHTML = data.sessions[0].slots[0];
            });
        },
        // formatDate(date) {
        //     var d = new Date(date),
        //     month = '' + (d.getMonth() + 1),
        //     day = '' + d.getDate(),
        //     year = d.getFullYear();

        //     if (month.length < 2) 
        //         month = '0' + month;
        //     if (day.length < 2) 
        //         day = '0' + day;

        //     return [day, month, year].join('-');
        // },
        // dateBuilder() {

        //     let d = new Date(this.date);
        //     let dt = d.getDate();
        //     let mn = d.getMonth();
        //     let yr = d.getFullYear();
        //     return `${dt} - ${mn} - ${yr}`;

        // },
        // format_date (val) {
        //     if (val) {
        //         return moment(String(val).format('DDMMYYYY'))
        //     }
        // }
        // dateBuilder() {
        //     d = new Date(this.date);
        //     dt = d.getDate();
        //     mn = d.getMonth();
        //     yr = d.getFullYear();
        //     date1 = dt + " - " + mn + " - " + yr;
        //     return date1
        // }
    }
}
</script>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    background-color: salmon;
    height: 600px;
    float: left;
    margin-left: 50px;
    margin-top: 10px;
    align-items: center;
}
.test-center {
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
label {
    flex-basis: 130px;
    margin-top: 10px;
    font-size: 20px;
}
input[type="text"], [type="date"]{
  padding: 10px;
  font-size: 18px;
}
input[type="date"] {
    width: 220px;
}
.centers {
    display: flex;
    justify-content: center;
}
img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
}
input[type="button"] {
    width: 100%;
    font-size: 20px; 
    padding: 10px;
    background-color: blueviolet;
    color: white;
    border: none;
    margin: 20px 0;
}
input[type="button"]:hover {
  cursor: pointer;
  background-color: rgb(98, 23, 168);
}
.rightcontain {
    background-color: rgb(121, 224, 147);
    display: flex;
    justify-content: center;
    height: 600px;
    float: center;
    margin-left: 500px;
    margin-right: 50px;
    margin-top: 10px;
    align-items: center;
}
.table {
    border: yellow;
}
</style>