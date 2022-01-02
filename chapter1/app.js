Vue.createApp({
    data(){
        return{
            item:'value',
            items:[]
        }
    },
    methods:{
        addItem(){
            this.items.push(this.item)
            this.item = ''
        }
    }
}).mount("#app");
