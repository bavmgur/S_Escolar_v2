const appHome = new Vue({
  el: '#home',
  data: {
    options: [
      { id: 1, imgUrl: 'https://www.abcdelbebe.com/files/article_main/uploads/2018/02/16/5a8753feea35d.jpeg',  description: 'Padres', url: '' },
      { id: 2, imgUrl: 'http://www.minedu.gob.pe/minedu/img/politicas/politica-docencia.jpg',  description: 'Docentes', url: '' },
      { id: 3, imgUrl: 'https://www.eltelegrafo.com.ec/media/k2/items/cache/f4b5341c1bbcf62c3dc9daa330f48d43_XL.jpg',  description: 'Pagos', url: '' },
      { id: 4, imgUrl: 'https://img-aws.ehowcdn.com/877x500p/photos.demandstudios.com/getty/article/41/75/86523968.jpg',  description: 'Catalogo', url: '' },
      { id: 5, imgUrl: 'https://d1iibezb83drel.cloudfront.net/wp-content/uploads/2018/12/Calendario.jpg',  description: 'Calendario', url: '' },
      { id: 6, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuH8mFOvxYsbFqKFO9OiWf8Vq3zLgOgil4nEubjpXUJyl37AkJ',  description: 'Reportes', url: '' }
    ]
  },
  delimiters: ["[[","]]"]
})