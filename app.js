const app = Vue.createApp({
  data() {
    return {
      title: 'Computed Properties',
      books: [
        {
          title: 'Name of the wind',
          author: 'Partrick Rothfussss',
          isFav: true,
        },
        {
          title: 'The way of kings',
          author: 'Brandom Sanderson',
          isFav: false,
        },
        {
          title: 'The final Empire',
          author: 'Brandom Sanderson',
          isFav: false,
        },
        {
          title: '5 centimet per second',
          author: 'Someone write this',
          isFav: true,
        },
      ],
    }
  },

  methods: {
    toggleFav(index) {
      this.books[index].isFav = !this.books[index].isFav
    },
  },

  computed: {
    filterdBooks() {
      return this.books.filter(function (el) {
        return (el.isFav == true)
      })
    },
  },
  // 
})

app.mount('#app')
