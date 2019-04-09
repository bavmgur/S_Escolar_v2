const appMenu = new Vue({
  el: '#menu',
  data: {
    isOpen: true
  },
  methods: {
    showOrHideSidebar: function() {
      this.isOpen = !this.isOpen
    }
  },
  //delimiters: ["[[","]]"]
})