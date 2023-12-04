import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import mitt from 'mitt'

// console.log(import.meta.env.VITE_APP_TITLE, 'import.meta.env.VITE_APP_TITLE');

// import hello from './index.ts'
// console.log('hello', hello)
// const eventBus = mitt()



const app = createApp(App)
// 把 mitt 加入 Vue 的全域 Property，讓任何一個元件都能使用
// app.config.globalProperties.eventBus = eventBus;
app.mount('#app')
console.log(app.config.globalProperties,'app');

