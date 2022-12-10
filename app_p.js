const app_p=new Vue({
    el:'#app_p',
    data(){
        return{
        
            title:'',
            time:'',
            courses :[],
            show_courses:false,
            show_messaje:true
        }
    },
    methods: {
        addCourse() {
          this.courses.push({ title: this.title, time: this.time });
          this.show_courses=true;
          this.show_messaje=false;
        },
    },
    computed:{
        totalTime () {
            if (!this.courses.length) {
                this.show_messaje=true; 
                return 0 
            }
            
            return this.courses.reduce((a, b) => a + parseInt(b.time), 0)
          
            

        }
      }

})