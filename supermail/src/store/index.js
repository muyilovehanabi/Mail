import Vue from 'vue'
import vuex from 'vuex';
// Vuex得在这里引入，因为放在main.js来引入的话会导致引入的先后顺序报错而出错

const actions = {
    // ⬇下方函数的设计是通过Vuex把值传入进来后，然后创建一个旧商品
    // 然后通过循环把state中的购物车里已经存在的商品和新添加进来的商品逐一进行比较，如果有相同的，那么就把它判定为旧商品
    // 很明显如果不是则会跳出循环再做一轮比较，如果购物车里旧商品存在了那么我们就把旧商品传出去，数量相应加一即可
    // 如果购物车里不存在这个就商品那么就先把这个商品的数量定为1，然后再传出去添加进购物车中

    addToCartList(context, payload) {
        return new Promise((resolve) => {
            let oldProduct = null;
            for (let item of state.cartList) {
                if (item.iid === payload.iid) {
                    oldProduct = item;
                }
            }

            if (oldProduct) {
                context.commit('addcount', oldProduct);
                resolve('当前的商品数量+1')
            } else {
                payload.count = 1;
                context.commit('addnewProduct', payload)
                resolve('添加了新的商品')
            }
        })
    }
}

const mutations = {
    addcount(state, payload) {
        payload.count++;
    },
    addnewProduct(state, payload) {
        payload.checked = true;
        state.cartList.push(payload)
    }
}

const state = {
    cartList: [],
    // ⬆创建一个购物车数组，以便把商品添加进去


}

Vue.use(vuex);
const store = new vuex.Store({
    actions,
    mutations,
    state
})

export default store;