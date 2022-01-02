Vue.createApp({
    data:()=>{
        return {
          // interpolation
          message: "Hello Vue.js!",
          imgURL: "https://www.fillmurray.com/640/360",
          html: "<h1>Hello Vue.js!</h1>",
          counter:0,
          name:''
        };
    },
    methods:{
        // event handler
        onClick:function(){
            console.log('onClick', this.message);
        },
        inc:function(){
            this.counter++;
        },
        dec:function(){
            this.counter--;
        },
        incby5:function(num){
            this.counter+=num;
        },
        setName:function($event){
            this.name = $event.target.value;
        }
    }
}).mount("#app");