const riot = require('riot')

<trabajos>

<section id="trabajos-resumen" class="row pad-top-50 pad-bottom-50 clear">

  <div class="col-6-xl col-6-l col-6-m col-full trabajos-imagen">


  </div>
  <div class="col-6-xl col-6-l col-6-m col-full text-center trabajos-fondo">
      <h1>¿Buscas trabajo?</h1>

      <hr>

        <p>En cloudbit siempre estamos buscando talentos nuevos para incorpor a nuestro staff,
        Te ofrecemos el mejor ambiente de trabajo con oficinas en Santa Cruz de la Sierra y prometemos
      avances profesionales que no podrias encontrar en otro lado. Conoce que puestos estamos buscando
    o si no empieza como pasante aprendiendo las ultimas metodologias de trabajo en el mundo</p>

<button onclick={ href }><a href="#/trabajos">Encuentra tu puesto</a></button>

  </div>
</section>

<script>

  this.href = () => {
    location.href = 'http://www.cloudbit.com.bo/#/contrataciones'
    //location.href = 'www.cloudbit.com.bo/#/trabajos'//en produccion

  }
</script>
</trabajos>
