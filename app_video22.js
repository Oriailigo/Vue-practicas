Vue.component('modal', {
    data(){
        return{
            title:"soy el title del modal",
            
        }
    },
    methods: {
        close () {
          this.$emit('close')
        }
    },
    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{title}}</h3>
            
            <slot name="body"></slot>
            
            <footer>
              <button
              v-on:click="close"
              >Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`
  })
  
  new Vue({
    el: '#app',
    data(){
      return{
        showModal:false, 
      }
    },
    methods:{
      toggleModal(){
          this.showModal=!this.showModal;
          // this.$emit('change-color',this.showModal?'f4f4f4':'FF96C8')
      }
    },
  })