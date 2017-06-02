const riot = require('riot')
import '../../componentes/header/header'
import '../../componentes/footer/footer'
import '../../componentes/headeroom/headeroom'
import '../../componentes/producto-uno/producto-uno'
import '../../componentes/producto-dos/producto-dos'
import '../../componentes/producto-tres/producto-tres'
import '../../componentes/quotes/quotes'
import '../../componentes/onscroll/onscroll'

<productos-page>

  <onscroll>
    <header class="{ (pos.top>-100)? 'block':'fixed' }"></header>
  </onscroll>
<headeroom></headeroom>
<quotes contenido={ quotePage }></quotes>
  <div class="text-center pad-top-50 container">


      <producto-uno contenido={ productoUno }></producto-uno>
      <hr>
      <blockquote>

        <h1>{ productoUno.titulo }</h1>

        <cite>{ productoUno.parrafo }</cite>
        <button> <a href={ productoUno.link }>{ productoUno.texto }</a></button>

      </blockquote>
  <hr>




  </div>
  <div class="text-center pad-top-50 container" >

      <producto-dos contenido={ productoDos }></producto-dos>
<hr>
<blockquote >
  <h1>{ productoDos.titulo }</h1>
  <cite>{ productoDos.parrafo }</cite>
  <button> <a href={ productoDos.link }>{ productoDos.texto }</a></button>

</blockquote>
<hr>




  </div>
  <div class="text-center pad-top-50 container">

    <producto-tres contenido={ productoTres }></producto-tres>

    <hr>
<blockquote >
  <h1>{ productoTres.titulo }</h1>

  <cite>{ productoTres.parrafo }</cite>
  <button> <a href={ productoTres.link }>{ productoTres.texto }</a></button>

</blockquote>
<hr>

  </div>
<footer></footer>

<script>
    this.quotePage = {quote:'hola vida como es, somos maravillos sabias?', autor:'el equipo cloudbit'}
    this.productoUno = {
      titulo: 'hola vida',
      parrafo:'blabalblabalbalbalblablablabla',
      link:'#/productos',
      texto:'de viaje a este producto',
      imagen:'./client/assets/img/centro.png',
    }
    this.productoDos = {
      titulo: 'hola vida',
      parrafo:'blabalblabalbalbalblablablabla',
      link:'#/productos',
      texto:'de viaje a este producto',
      imagen:'./client/assets/img/centro.png',
    }
    this.productoTres = {
      titulo: 'hola vida',
      parrafo:'blabalblabalbalbalblablablabla',
      link:'#/productos',
      texto:'de viaje a este producto',
      imagen:'./client/assets/img/centro.png',
    }
</script>

<style>
  .fixed{
    position: fixed;
    z-index:10;
    background-color: rgba(233, 233, 233, 0.92);
    box-shadow: 0em 0.24em 0.92em #051923;
    transition: all 2s;
    width: 100%;
    margin-top: -1em;

  }
  .block{
    position: absolute;
    z-index:10;
    transition: all 3s;
    background-color: transparent;
    width: 100%;
  }
  .si{

    opacity: 1;

    transition: all 5s;

  }
  .no{

    opacity: 0;

    transition: all 5s;

  }
</style>

</productos-page>
