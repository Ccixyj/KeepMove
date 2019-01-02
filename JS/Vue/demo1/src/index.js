import Vue from "vue"
import login from "./componets/login.vue"

new Vue({
    el: "#app",
    data: {
        msg: "hello vue"
    },
    components: {
        login
    },
    render: c => c(login)
})