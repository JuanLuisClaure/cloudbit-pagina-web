const riot = require('riot')

<cartas-jobs>

<section id="cultura-section" class="row pad-top-50 pad-bottom-50 text-center" if={ lista } >

<ul each={ x in cultura } class="push-1-xl col-5-xl push-1-l col-5-l push-1-m col-5-m push-1 col-10">
  <li>
    <button onclick={ verMas.bind(this, x) }>
    <img src={ x.img } alt={ x.nombre } class="img-fluid">
    <h3>{ x.titulo }</h3>
    <p class="text-justify">{ x.resumen }</p>
    <a href="#">{ x.autor }</a>
    </button>
  </li>
</ul>

</section>
<section id="cultura-mas" class="row text-center pad-top-50 pad-bottom-50" if={ detalles }>


    <button onclick={ toggle } class="push-1-xl col-10-xl push-1-l col-10-l push-1-m col-10-m push-1 col-10">
    <img src={ datos.img } alt={ datos.nombre } class="img-fluid">
    <h1><em>{ datos.titulo }</em></h1>
    <p>{ datos.resumen }</p>
    <hr>
      <p>{ datos.autor }</p>
    </button>



</section>
<script>

  this.cultura = [
    {img:'./client/assets/img/what-is-pwa-img.png', resumen:'Es sobre como la evolucion del internet es exponecialmente proyectada. Por eso ahora las aplicaciones moviles seran remplazadas por PROGRESIIVE WEB APPS [PWA].  ', titulo:'---[ PWA ]---' , link:'link a la descarga del producto', autor:'JuanLuis Claure' },
  ]
  this.detalles = false
  this.lista = true

  this.toggle = (e) => {
    if(this.lista == true){
      this.detalles = true
      this.lista = false
    }else{
      this.detalles = false
      this.lista = true
    }
  }


  this.verMas = (datos) => {
    this.toggle()
    this.datos = datos
  }





</script>

</cartas-jobs>
