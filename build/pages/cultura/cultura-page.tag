const riot = require('riot')
import '../../componentes/header/header'
import '../../componentes/footer/footer'
import '../../componentes/headeroom/headeroom'
import '../../componentes/cartas-cultura/cartas-cultura'
import '../../componentes/cartas-cultura/cartas-jobs'
import '../../componentes/cartas-cultura/cartas-works'
import '../../componentes/quotes/quotes'
import '../../componentes/onscroll/onscroll'
<cultura-page>
  <onscroll>
    <header class="{ (pos.top>-100)? 'block':'fixed' }"></header>
  </onscroll>

<headeroom></headeroom>




<quotes contenido={ quotePage }></quotes>

<div class="row text-justify pad-top-50 pad-bottom-50">
  <h1 class="text-center ">NUESTROS VALORES</h1>
  <hr style="  width:30%;
    color:blue;
    border: 0.24em solid;">
  <div class="push-1-xl col-5-xl push-1-l col-5-l push-1-m col-5-m col-full">
  <p class="parrafo">
  Somos una empresa comprometida con la calidad de nuestros productos, en el
  camino hemos desarrollado valores de trabajo en los cuales creemos por que
  nos convierten en la fabrica de softaware mas innovadora de Bolivia
  </p>
  <p class="parrafo">
  Comenzamos estandarizando nuestros procesos de tal manera que encontramos
  las falencias de forma puntual ayudandonos a seguir mejorando con cada nuevo
  proyecto
  </p>
  </div>
  <div class="push-1-xl col-5-xl push-1-l col-5-l push-1-m col-5-m col-full">
    <p class="parrafo">
      Cultivamos la investigacion como valor del conocimiento y logranmos una curva
      de aprendizaje exponecial porque en cada nuevo proyecto aplicamos nuestros
      estandares de codificacion convitiendo el conocimieto en algo reutilizable
    </p>
  <p class="parrafo">
    Por eso en Cloudbit cultivamos los siguientes valores como pilares sobre los
    cuales utlizamos la creatividad para dar las mejores soluciones
  </p>
  </div>
</div>
<div class="justo-ahora">
  <cartas-cultura></cartas-cultura>
</div>
<div class="row text-justify pad-top-50 pad-bottom-50">
  <h1 class="text-center ">NUESTROS TRABAJOS REALIZADOS</h1>
  <hr style="  width:30%;
    color:blue;
    border: 0.24em solid;">
  <div class="push-1-xl col-5-xl push-1-l col-5-l push-1-m col-5-m col-full">
  <p class="parrafo">
  En el progreso de nuestra trayectoria hemos sido protagonistas en el desarrollo
  de software a medida para empresas de alto prestigio en Santa Cruz - Bolivia
  </p>
  <p class="parrafo">
    Conseguimos finalizar con extrema profesionalidad y otorgamos una solucion
    que en su conclusion fue engranaje coloborador en el aumento de la rentabilidad
    de nuestros clientes
  </p>
  </div>
  <div class="push-1-xl col-5-xl push-1-l col-5-l push-1-m col-5-m col-full">
  <p class="parrafo">
    Fuimos parte de la historia de innovacion y compartimos historias de superacion
    de ambas partes que dejaron una gratificante emocion de complicidad
  </p>
  <p class="parrafo">
    A continuación presentamos los desarrollos y un poco de la historia que conllevo
    ser parte de esta adventura. Esperamos que el proximo caso de exito sea su
    proyecto
  </p>
  </div>
</div>
<div class="justo-ahora">
    <cartas-works></cartas-works>
</div>
<div class="row text-justify pad-top-50 pad-bottom-50">
  <h1 class="text-center">Innovacion Realizada</h1>
  <hr style="  width:30%;
    color:blue;
    border: 0.24em solid;">
  <div class="push-1-xl col-5-xl push-1-l col-5-l push-1-m col-5-m col-full">
    <p class="parrafo">
      Estos son los resumenes ejecutivos de los documentos escritos por nuestro
      equipo de investigacion, y tambien son el aporte de innovacion a nuestra
      sociedad.
    </p>

  </div>
  <div class="push-1-xl col-5-xl push-1-l col-5-l push-1-m col-5-m col-full">
    <p class="parrafo">
      Las personas con las cuales hacemos equipo son increiblemnte talentosas
      y nos han dejado un legado del conocimiento que obtuvieron en el tiempo de
      investigacion
    </p>
  </div>
</div>
<div class="justo-ahora">
  <cartas-jobs></cartas-jobs>
</div>

<footer></footer>

<script>
  this.quotePage = {quote:'"Aca viene una frase motiviacional de nuestro gerente y lider en este viaje hacia la innovacion"', autor:'Hugo Lambert Leal'}

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
  .parrafo{
    padding:1.11em 4em 0em 4em;
  }
</style>

</cultura-page>
