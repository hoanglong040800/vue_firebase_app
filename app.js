const app = Vue.createApp({
  data() {
    return {
      title: 'Mouse Events',
      event: true,
    }
  },

  methods: {
    handleEvent(event){
      console.log(`You ${event} the box`)
    }
  },

  computed: {

  },
})

app.mount('#app')
