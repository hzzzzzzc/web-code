let _Vue = null

export default class VueRouter {

    static install(Vue) {
        if (this.install.installed) return
        this.install.installed = true
        _Vue = Vue

        Vue.mixin({
            beforeCreate() {
                if (this.$options.router) {
                    let self = this
                    Vue.prototype.$router = this.$options.router
                    this.$router.createComponents()
                    window.addEventListener('popstate', () => {
                        self.$router.data.current = window.location.pathname
                    })
                }
            }
        })

    }

    constructor(options) {
        this.options = options
        this.routeMap = {}
        this.data = _Vue.observable({
            current: '/about'
        })
        options.routes.forEach(route => {
            this.routeMap[route.path] = route.component
        })
    }

    createComponents() {
        _Vue.component("router-link", {
            props: ['to'],
            // template: `<a :href="to"><slot /></a>`
            render(h) {
                return h("a", {
                    attrs: {
                        href: this.to
                    },
                    on: {
                        click: this.handleClick
                    }
                }, [this.$slots.default])
            },
            methods: {
                handleClick(e) {
                    this.$router.data.current = this.to
                    history.pushState({},"",this.to)
                    e.preventDefault()
                }
            },
            beforeCreate() {
                console.log(this.$router);
            }
        })

        _Vue.component("router-view", {
            render: h => h(this.routeMap[this.data.current])
        })
    }
}