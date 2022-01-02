# Vue course

## Chapter 1
```javascript
Vue.createApp({

}).mount('#app')
```
## Chapter 2
1. Interpolation
```javascript
Vue.createApp({
 data:()=>{
     return{
         msg: "hello"
     }
 }
}).mount('#app')
```
```html
<p>{{ msg }}</p>
```
2. property binding
```javascript
Vue.createApp({
 data:()=>{
     return{
         imgurl: "https://google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"",
     }
 }
}).mount('#app')
```
```html
<img v-bind:src="imgurl" />
```
3. event binding
```javascript
Vue.createApp({
    methods:{
        onclick: function(){
            alert("hello")
        }
    }
}).mount('#app')
```
```html
<button v-on:click="onclick">Click me</button>
```
5. Outputing HTML
```javascript
Vue.createApp({
 data:()=>{
     return{
         msg: "<h1>Hello</h1>"
     }
 }
}).mount('#app')
```
```html
<p v-html="msg"></p>
```