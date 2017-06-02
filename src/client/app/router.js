import route from 'riot-route'

const riot = require('riot')
const renderHere = document.querySelector('#inicio')


route('/', () => {
  System.import('../pages/index/index-page').then( module => {
    // console.log( module.import );
    renderHere.innerHTML='<index-page></index-page>'
    riot.mount('*')


  }).catch( err => {
    console.log(err)
  })
})
route('/inicio', () => {
  System.import('../pages/home/home-page').then( module => {
    // console.log( module.import );
    renderHere.innerHTML='<home-page></home-page>'
    riot.mount('*')


  }).catch( err => {
    console.log(err)
  })
})
route('/servicios', () => {
  System.import('../pages/servicios/servicios-page').then( module => {
    // console.log( module.import );
    renderHere.innerHTML='<servicios-page></servicios-page>'
    riot.mount('*')


  }).catch( err => {
    console.log(err)
  })
})
route('/productos', () => {
  System.import('../pages/productos/productos-page').then( module => {
    // console.log( module.import );
    renderHere.innerHTML='<productos-page></productos-page>'
    riot.mount('*')


  }).catch( err => {
    console.log(err)
  })
})
route('/cultura', () => {
  System.import('../pages/cultura/cultura-page').then( module => {
    // console.log( module.import );
    renderHere.innerHTML='<cultura-page></cultura-page>'
    riot.mount('*')


  }).catch( err => {
    console.log(err)
  })
})
route('/contrataciones', () => {
  System.import('../pages/trabajos/trabajos-page').then( module => {
    // console.log( module.import );
    renderHere.innerHTML='<trabajos-page></trabajos-page>'
    riot.mount('*')


  }).catch( err => {
    console.log(err)
  })
})
route('/blog', () => {
  System.import('../pages/blog/blog-page').then( module => {
    // console.log( module.import );
    renderHere.innerHTML='<blog-page></blog-page>'
    riot.mount('*')


  }).catch( err => {
    console.log(err)
  })
})
route('/equipo', () => {
  System.import('../pages/people/people-page').then( module => {
    // console.log( module.import );
    renderHere.innerHTML='<people-page></people-page>'
    riot.mount('*')


  }).catch( err => {
    console.log(err)
  })
})
route('/contacto', () => {
  System.import('../pages/contacto/contacto-page').then( module => {
    // console.log( module.import );
    renderHere.innerHTML='<contacto-page></contacto-page>'
    riot.mount('*')


  }).catch( err => {
    console.log(err)
  })
})



//
// route.base('#!')
route.start(true)
