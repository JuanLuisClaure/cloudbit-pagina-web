const riot = require('riot')

riot.tag2('servicios', '<section id="servicios-resumen"> <div class="container clear text-center pad-top-50 pad-bottom-50"> <div id="titulo" class="row"> <p>NUESTROS SERVICIOS</p> <hr> </div> <div class="row pad-top-50 pad-bottom-50"> <div class="col-1-3-xl col-1-3-l col-1-3-m col-full"> <embed src="./client/assets/img/desk.svg"> <h3>Fabrica de Software</h3> <p class="resumen-iconos">Tenemos los recursos humanos de alta calidad para crear software a la medida de las necesidades de su logica de negocios</p> </div> <div class="col-1-3-xl col-1-3-l col-1-3-m col-full"> <embed src="./client/assets/img/money.svg"> <h3>Metodos de Pago</h3> <p class="resumen-iconos">Contamos con todas las facilidades de pago del mercado tomando en cuenta las horas de trabajo requeridas</p> </div> <div class="col-1-3-xl col-1-3-l col-1-3-m col-full"> <embed src="./client/assets/img/smartphone.svg"> <h3>Pensando al Futuro</h3> <p class="resumen-iconos">Pensamos en la tecnologia para lograr un cambio positivo en su negocio enfocandonos en las ultimas tendencias en las programaciones</p> </div> </div> <div class="row"> <button onclick="{href}"> <a href="#/servicios">Conoce mas de nuestros servicios</a> </button> </div> </div> </div> </section>', '', '', function(opts) {


  this.href = (e) => {
    location.href = 'http://www.cloudbit.com.bo/#/servicios'
  }
});
