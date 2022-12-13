Vue.component('CoinDetail',{
  props:['coin'],
  data(){
    return {showPrices:false,
      price:8400,
      value:0,
    
    }
  },
  methods:{
    toggleShowPrices(){
        this.showPrices=!this.showPrices;
    }
  },
  computed:{
    convertValue(){
        if(!this.value){
          return 0;
        }
        return this.value/this.price;
    }
  },
  template:
    `
    <div>
        <h1 v-bind:class="price > 0 ? 'red':'green' "> {{ coin.name }} </h1>   
        
        <img v-on:mouseover="toggleShowPrices"
        v-on:mouseout="toggleShowPrices"
        v-bind:src="coin.img" v-bind:alt="coin.name">

        <h1>
          <span v-on:click="toggleShowPrices">
          mostrar precios
          {{ showPrices ? '🙉' : '🙈' }}
          </span>
        </h1>

        <ul v-show="showPrices">
          <li 
          v-bind:class="{orange: (price == p.value)}"
          v-for="(p,i) in coin.priceswithdays"> <p>{{i}}-{{p.day}}:{{p.value}}</p> </li>
        </ul>

        <input type="number" v-model="value">
        <span> {{convertValue}}</span> 
        
    </div>
    `
  
})

const app=new Vue({
  el: '#app',
  data(){
    return {
      btc:{
        img:"https://cryptologos.cc/logos/bitcoin-btc-logo.png",
            
        name:"Bitcoin",
        priceswithdays: [
          { day: 'Lunes', value: 8400 },
          { day: 'Martes', value: 7900 },
          { day: 'Miercoles', value: 8200 },
          { day: 'Jueves', value: 9000 },
          { day: 'Viernes', value: 9400 },
          { day: 'Sabado', value: 10000 },
          { day: 'Domingo', value: 10200 },
        ],
      }
     } 
  },

  
})