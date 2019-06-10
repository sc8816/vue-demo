import App from './App.vue'
import Vue from 'vue'
import './styles/main.scss'

const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
    render: (h) => h(App)
}).$mount(root)