const riot = require('riot')
import '../../componentes/header/header'
import '../../componentes/footer/footer'
import '../../componentes/headeroom/headeroom'
import '../../componentes/cartas-personas/cartas-personas'
import '../../componentes/quotes/quotes'
import '../../componentes/onscroll/onscroll'

<people-page>

  <onscroll>
    <header class="{ (pos.top>-100)? 'block':'fixed' }"></header>
  </onscroll>
<headeroom></headeroom>

<section id="personas" class="text-center row">

  <div class="push-1-xl col-10-xl push-1-l col-10-l push-1-m col-10-m  nosotros-somos pad-top-10 pad-bottom-20">
    <ul>
      <li class="col-full"><embed src="./client/assets/img/networking-3.svg" width="50" height="50">
        <h3>Competividad</h3>
      <p class="parrafo">creamos un ambiente competitivo para inspiracion de nuestro equipo</p></li>
      <li class="col-full"><embed src="./client/assets/img/networking.svg" width="50" height="50">
        <h3>Liderazgo</h3>
      <p class="parrafo">Todos tienen el mismo peso de decision en unn gerencia democratica</p></li>
      <li class="col-full"><embed src="./client/assets/img/networking-5.svg" width="50" height="50">
        <h3>Compromiso</h3>
      <p class="parrafo">Se exige cumplimiento de las politicas y reglamento de Cloudbit</p></li>

    </ul>
  </div>
  <img src="./client/assets/img/equipo.jpg" alt="" class="pad-top-10 pad-bottom-20 img-fluid push-2-xl col-8-xl push-2-l col-8-l push-2-m col-8-m col-full">

</section>

<cartas-personas></cartas-personas>

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

</people-page>
