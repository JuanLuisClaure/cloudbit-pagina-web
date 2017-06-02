const riot = require('riot')
riot.tag2('cultura', '<section id="cultura-resumen"> <div class="container clear pad-top-50 pad-bottom-50"> <div class="row text-center"> <div class="col-full-xl col-full-l col-full-m col-full"> <h1>Nuestra cultura</h1> <hr> <p>Creemos en un futuro donde la tecnologia ayuda en la eficiencia de como hacemos negocios</p> </div> <div class="col-6-xl col-6-l col-6-m col-full"> <h3>Mision</h3> <p>Ser conocidos y reconocidos por nuestros clientes debido a nuestros altos estándares de calidad al Desarrollar y entregar productos, servicios y soluciones de clase mundial.</p> </div> <div class="col-6-xl col-6-l col-6-m col-full"> <h3>Vision</h3> <p>Ser Innovadores de tecnología de la información. Crecer y expandir ideas innovadores a lo largo de la nacion plurinacional de Bolivia.</p> </div> </div> <div class="row text-center"> <button onclick="{href}" class="botones"><a href="#/cultura" class="link">Conoce mas de Nosotros</a></button> </div> </div> </section>', '', '', function(opts) {

  this.href = (e) => {
    location.href = 'http://www.cloudbit.com.bo/#/cultura'

  }
});
