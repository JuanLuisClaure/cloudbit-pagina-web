const riot = require('riot')

<productos>

<section id="productos-resumen">

  <div class=" container text-center">
    <div class="card-transparente pad-top-50 pad-bottom-50">


    <h1>Nuestros Productos</h1>
    <hr>
    <p>Contamos con una variedad de productos destinadas a la necesidad de sotfware que comparten los negocios en Bolivia
    disminuyendo el tiempo de entrega de la solucion y con precios accesibles a pequeños, medianos y grandes pymes.
    Encuentra la soluciones que ofrecemos y empieza a modernizar tu negocio sin esperar meses de desarrollo</p>

    <button onclick={ href }><a href="#/productos">Muestrario de productos</a></button>

    </div>
  </div>

</section>

<script>

  this.href = (e) => {
    location.href = 'http://www.cloudbit.com.bo/#/productos'
  }
</script>







</productos>
