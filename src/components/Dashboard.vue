<template>
    <div class="dashboard">
        <span class="span">COVID - 19</span>
        <div class="dashboard-2">
            <router-link class="dashclass" to="./Welcome">Home |</router-link>
            <router-link class="dashclass" to="./CurrentData">Current Data |</router-link>
            <router-link class="dashclass" to="./Variants">Variants |</router-link>
            <router-link class="dashclass" to="./TestingCenter">Nearest Centers |</router-link>
            <a class="logout" @click="logout">Logout</a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Dashboard',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
}
</script>

<style scoped>
    .dashboard {
        background-color: rgb(74, 149, 172);
        color: white;
        font-size: 25px;
        font-family: sans-serif;
        height: 70px;
        text-align: center;
    }
    .span {
        display: flex;
        float: left;
        margin-top: 15px;
        margin-left: 5px;
    }
    .logout {
        cursor: pointer;
    }
    .dashclass {
        color: white;      
        margin-top: 15px;
    }
    .dashboard-2 {
        background-color: rgb(74, 149, 172);
        color: white;
        font-size: 25px;
        font-family: sans-serif;
        height: 70px;
        margin-right: 15px;
        /* padding-top: 15px; */
        /* display: flex;
        float: right; */
        text-align: right;
    }
</style>
