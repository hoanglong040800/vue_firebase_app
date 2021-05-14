const app = Vue.createApp({
  data() {
    return {
      title: 'Vue 3',
      age: '40',
      isLogin: false,
    }
  },

  methods: {
    increaseAge() {
      this.age++
    },

    decreaseAge() {
      this.age--
    },

    toggleLogin() {
      this.isLogin = !this.isLogin
    },
  },

  computed: {
    loginText() {
      return this.isLogin ? 'Logout' : 'Login'
    },
  },
})

app.mount('#app')
