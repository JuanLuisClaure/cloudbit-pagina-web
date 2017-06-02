const riot = require('riot')
import '../../componentes/header/header'
import '../../componentes/footer/footer'
import '../../componentes/video/video'
import '../../componentes/servicios/servicios'
import '../../componentes/productos/productos'
import '../../componentes/cultura/cultura'
import '../../componentes/trabajos/trabajos'
import '../../componentes/contactanos/contactanos'
import '../../componentes/onscroll/onscroll'



<home-page>

  <onscroll>
    <header class="{ (pos.top>-100)? 'block':'fixed' }"></header>
  </onscroll>
    <video-componente></video-componente>
  <onscroll>
    <servicios class="{ (pos.top>215)? 'no':'si' }"></servicios>
  </onscroll>

    <productos></productos>

  <onscroll>
    <cultura class="{ (pos.top>316)? 'no':'si' }"></cultura>
  </onscroll>

    <trabajos></trabajos>

  <onscroll>

    <contactanos class="{ (pos.top>316)? 'no':'si' }"></contactanos>
  </onscroll>

<footer></footer>

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
    position: block;
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

    transition: all 1s;

  }
</style>

</home-page>
