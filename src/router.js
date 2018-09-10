import Vue from 'vue'
import Router from 'vue-router'
import Favs from './components/Favs.vue'
import New from './components/New.vue'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'favs',
            component: Favs
        }, 
        {
            path: '/new/:name?',
            name: 'new',
            component: New
        }
    ]
})