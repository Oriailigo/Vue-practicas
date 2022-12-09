const app=new Vue({
  el: '#app',
  data(){
    return {name:"Bitcoin",
            img:"https://cryptologos.cc/logos/bitcoin-btc-logo.png",
            change_percent:-2,
            pricesWithDays: [
              { day: 'Lunes', value: 8400 },
              { day: 'Martes', value: 7900 },
              { day: 'Miercoles', value: 8200 },
              { day: 'Jueves', value: 9000 },
              { day: 'Viernes', value: 9400 },
              { day: 'Sabado', value: 10000 },
              { day: 'Domingo', value: 10200 },
            ],
            show_prices:false
          } 
  },
  methods:{
      togle_show_prices(){
          this.show_prices=!this.show_prices;
      }
  }
})