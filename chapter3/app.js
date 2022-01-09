Vue.createApp({
  data() {
    return {
      message: "Hello Vue.js!",
      myval: 0,
      fruits:[
          {id:1, name:'apple'},
          {id:2, name:'banana'},
          {id:3, name:'orange'},
          {id:4, name:'pear'}
      ]
    };
  },
  methods: {
    incremenent(){
        this.myval++;
    },
    removeItem(index){
        this.fruits.splice(index, 1);
    }
  },
}).mount("#app");