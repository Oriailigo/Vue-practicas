Vue.component("mostrar_precio",{
  props:['prop_object'],
  data(){
    return{
      showPrices:false,
      value:0,
    } 
  }, 
  methods:{
    toggleShowPrices(){
      this.showPrices=!this.showPrices
    }
  },
    //funciones computeadas
    computed:{
      convertValue(){
        if(this.value==0){
          return 0
        }
        return this.value/this.prop_object.plata
      }
    },
  
  template: `
      <div>
        <h1 v-bind:class="prop_object.plata > 0 ? 'red':'green' "> {{ prop_object.nom }} </h1>

        <img v-on:mouseover="toggleShowPrices"
        v-on:mouseout="toggleShowPrices"
        v-bind:src="prop_object.img" v-bind:alt="prop_object.name">

        <h1>
          <span v-on:click="toggleShowPrices">
              {{ prop_object.titulo }}
              {{ showPrices ? '🙉' : '🙈' }}
          </span>
        </h1>

        <input type="number" v-model="value">
        <span> {{convertValue}}</span>

        <ul v-show="showPrices">
            <li 
            v-bind:class="{orange: (prop_object.plata == p.value)}"
            v-for="(p,i) in prop_object.precios_con_dias"> <p>{{i}}-{{p.dia}}:{{p.value}}</p> </li>
        </ul>
      </div>
`
        
} )


// primeros pasos en vue
//1)
//crear instancia
new Vue({ // esta estructura se define asi por defecto
  el:'#api', // id=api u otro nombre puede ser
  data(){  // esta estructura se define asi por defecto
    return{
      btc:{
        titulo:'mostrar precios', // invento mi variable que quiero que cambie
        nom: 'Bitcoin',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        name: 'soy una imagen',
        plata: 234,
        precios_con_dias:[
          {dia:"Lunes",value:234},
          {dia:"martes",value:500},
          
        ],
        color: 'f4f4f4',
        symbol: 'BTC',
      },
      
    }
  },
  // //puedo crear metodos
  // methods:{
  //   toggleShowPrices(){
  //     this.showPrices=!this.showPrices
  //     this.color=this.color.split('').reverse().join('')
  //   }
  // },
  //funciones computeadas
  // computed:{
  //   convertValue(){
  //     if(this.value==0){
  //       return 0
  //     }
  //     return this.value/this.plata
  //   }
  // },
})

