import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var vm = new Vue({
    el: "#app",
    data:{
        msg: "hello World"
    },
})