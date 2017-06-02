const riot = require('riot')
import '../../componentes/header/header'
import '../../componentes/footer/footer'
import '../../componentes/headeroom/headeroom'
import '../../componentes/mapa/mapa'
import '../../componentes/form-contacto/form-contacto'
import '../../componentes/quotes/quotes'
import '../../componentes/onscroll/onscroll'


riot.tag2('contacto-page', '<onscroll> <header class="{(pos.top>-100)? \'block\':\'fixed\'}"></header> </onscroll> <headeroom></headeroom> <quotes contenido="{quotePage}"></quotes> <div class="container text-center" style=" border: 2px solid $contrast; box-shadow: 0em 0.1em 0.4em #333333;"> <div class="row clear"> <mapa></mapa> <hr> <h1>Dejanos un Mensaje</h1> <h4>queremos conocer tu opinion</h4> <hr> <onscroll> <form-contacto class="{(pos.bottom>-300)? \'si\':\'no\'}"></form-contacto> </onscroll> </div> </div> <div class="container text-center pad-top-50"> <div class="row clear"> <div class="col-4-xl col-4-l col-4-m col-6"> <h4><em>DIRECCION</em></h4> <hr style="widht:50%; border:1px solid black"> <p>Calle no me acuerpo #0</p> </div> <div class="col-4-xl col-4-l col-4-m col-6"> <h4><em>TELEFONOS</em></h4> <hr style="widht:50%; border:1px solid black"> <p>767563432432</p> <p>233433234</p> </div> <div class="col-4-xl col-4-l col-4-m col-6"> <h4><em>SKYPE</em></h4> <hr style="widht:50%; border:1px solid black"> <p>cloudbit.skype</p> </div> <div class="col-4-xl col-4-l col-4-m col-6"> <h4><em>VENTAS</em></h4> <hr style="widht:50%; border:1px solid black"> <p>directo al 674834753</p> </div> <div class="col-4-xl col-4-l col-4-m col-6"> <h4><em>GERENCIA</em></h4> <hr style="widht:50%; border:1px solid black"> <p>directo al 455435342</p> </div> <div class="col-4-xl col-4-l col-4-m col-6"> <h4><em>POSTULATE</em></h4> <hr style="widht:50%; border:1px solid black"> <p>juanluis@hotmail.com</p> </div> </div> </div> <footer></footer>', 'contacto-page .fixed,[data-is="contacto-page"] .fixed{ position: fixed; z-index:10; background-color: rgba(233, 233, 233, 0.92); box-shadow: 0em 0.24em 0.92em #051923; transition: all 2s; width: 100%; margin-top: -1em; } contacto-page .block,[data-is="contacto-page"] .block{ position: block; transition: all 3s; background-color: transparent; width: 100%; } contacto-page .si,[data-is="contacto-page"] .si{ opacity: 1; transition: all 5s; } contacto-page .no,[data-is="contacto-page"] .no{ opacity: 0; transition: all 5s; }', '', function(opts) {
  this.quotePage = {quote:'Somos la mejor empresa de desarrolo de sftoware de Bolivia, seguro queres contactarnos', autor:'encuentra todos nuestros datos'}

});
