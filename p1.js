new Vue({
    el: '#app',
    
    data () {
      return {
          courses:[],
          titulo:"",
          time:"",
      }
    },
    // funcion conmutada
    computed: {
        totalTime(){
            let suma=0
            this.courses.forEach(element => {
                suma=suma+ element.time
            });
            return suma
        } 

    },
    
    methods: {
        acumular_cursos(){
            this.courses.push({titulo:this.titulo, time:this.time})
        }

    }
  })