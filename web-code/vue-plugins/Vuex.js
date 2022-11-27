let _Vue = null

function install(Vue) {
  _Vue = Vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

class Store {
  constructor(options) {
    let { state = {}, mutations = {}, getters = {}, actions = {} } = options
    this.state = _Vue.Observable(state)

    this.getters = {}
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => getters[key](this.state, this.getters)
      })
    })

    this.mutations = mutations
    this.actions = actions
  }

  commit(type, payload) {
    this.mutations[type](this.state, payload)
  }

  dispatch(type, payload) {
    this.actions[type](this, payload)
  }
}

export default {
  install,
  Store
}
