import VueRouter from 'vue-router'
import Down from '../components/common/Down.vue'
import ShouYe from '../components/content/ShouYe.vue'
import FenLei from '../components/content/FenLei.vue'
import GouWuChe from '../components/content/GouWuChe.vue'
import WoDe from '../components/content/WoDe.vue'
import Detail from '../components/common/Detail/Detail.vue'

export default new VueRouter({
    routes: [{
        path: '/Down',
        component: Down,
        children: [{
            path: '/ShouYe',
            component: ShouYe
        }, {
            path: '/FenLei',
            component: FenLei
        }, {
            path: '/GouWuChe',
            component: GouWuChe
        }, {
            path: '/WoDe',
            component: WoDe
        }]
    }, {
        path: '/Detail/:iid', //路径后方是在动态传值
        component: Detail
    }]
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}