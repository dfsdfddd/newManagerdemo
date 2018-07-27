const menu = {
  state: {
    menus: ''
  },

  mutations: {
    SET_MENUS: (state, menus) => {
      state.menus = menus
    }
  },

  actions: {
    // 获取用户信息
    setMenu({ commit }, menuList) {
      commit('SET_MENUS', menuList)
    }
  }
}

export default menu
