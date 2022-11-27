let bus = new Vue()

let son = {
    template: `<div>兄弟数据为{{data}}</div>`,
    data() {
        return {
            data: null
        }
    },
    beforeCreate() {
        bus.$on('get', (data, num) => {
            this.data = data * num
        })
    }
}


let daughter = {
    template: `<div @click="send">点击此处传递数据</div>`,
    data() {
        return {
            num: 0
        }
    },
    created() {
        setInterval(() => {
            this.num++
        }, 1000)
    },
    methods: {
        send() {
            bus.$emit('get', this.num, 10)
        }
    }
}

let vm = new Vue({
    el: '#root',
    template: `<div>
        <son />
        <daughter />
    </div>`,
    components: {
        son,
        daughter
    }
})