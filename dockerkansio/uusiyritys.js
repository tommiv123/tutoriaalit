var ostosLista = new Vue({
  el: '#ostosLista',
  data: {
    tuotteet: [
      { name: 'Kokista'},
      { name: 'Mikropizza'},
      { name: 'Kaljaa'},
      { name: 'Kissanruokaa'}
    ]
  },
  mounted() {
    if (localStorage.name){
      this.name=localStorage.name;
    }
  },
  watch: {
    name(newName) {
      localStorage.name=newName;
    }
  },

  methods: {
    lisaaTuote: function(e) {
      e.preventDefault();
      this.tuotteet.push({
        name: this.tuotteet.name,
      });
    },
    poistaTuote: function(tuote) {
      this.tuotteet.splice(this.tuotteet.indexOf(tuote), 1)
    }
  }
});
