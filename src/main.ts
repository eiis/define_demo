import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import hello from './index.ts'
console.log('hello', hello)

createApp(App).mount('#app')
