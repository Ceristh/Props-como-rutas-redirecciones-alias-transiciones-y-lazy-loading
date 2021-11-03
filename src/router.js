import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Post from './components/Post'
import NotFound from './components/NotFound'
import Administrador from './components/Administrador.vue'
import Simple from './components/Simple.vue'
import Avanzado from './components/Avanzado.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio,
        },
        {
            path:'/home',
            component: Inicio,
            redirect:'/',
        },
        {
            path:'/portada',
            component: Inicio,
            redirect:'/',

        },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: () => import ('./components/SobreMi.vue'),
            alias:['/acerca']
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: () => import ('./components/Contacto.vue'),
            alias:['/contactame']

        },
        {
            path: '/administrador',
            name: 'administrador',
            component: Administrador,
        },
        {
            path: '/administrador/simple',
            name: 'simple',
            component: Simple,
        },
        {
            path: '/administrador/avanzado',
            name: 'avanzado',
            component: Avanzado,
        },
        {
            path: '/post',
            name: 'post',
            component: Post,
            children: [
                {
                    path: ':articulo',
                    component: () => import ('./components/Articulo.vue'),
                }
            ]
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})