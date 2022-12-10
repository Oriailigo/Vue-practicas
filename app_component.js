Vue.component("counter",{
    data(){
        return{
            counter:0
        }
    },
    methods:{
        incrementar(){
            this.counter+=1
        }
    },
    template:`
    <div>
        <button v-on:click="incrementar">
            Click me!
        </button>
        <span> {{counter}}</span>
    </div>
    `

    

})


const app=new Vue({
    el: "#app_component",
    data(){
        return{
            title:"hola"
        }
    }
})