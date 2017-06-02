const riot = require('riot')
import '../../componentes/header/header'
import '../../componentes/footer/footer'
import '../../componentes/headeroom/headeroom'
import '../../componentes/hilera-de-iconos/hilera-de-iconos'
import '../../componentes/servicio-uno/servicio-uno'
import '../../componentes/servicio-dos/servicio-dos'
import '../../componentes/servicio-tres/servicio-tres'
import '../../componentes/servicio-cuatro/servicio-cuatro'
import '../../componentes/quotes/quotes'
import '../../componentes/onscroll/onscroll'

riot.tag2('servicios-page', '<onscroll> <header class="{(pos.top>-100)? \'block\':\'fixed\'}"></header> </onscroll> <headeroom></headeroom> <hilera-de-iconos></hilera-de-iconos> <div class="row algoA"> <div class="push-1-xl col-7-xl push-1-l col-7-l push-1-m col-7-m col-full text-center pad-bottom-50 pad-top-50"> <servicio-uno></servicio-uno> </div> </div> <div class="row algoB"> <div class="push-4-xl col-7-xl push-4-l col-7-l push-4-m col-7-m col-full text-center pad-bottom-50 pad-top-50"> <servicio-dos></servicio-dos> </div> </div> <div class="row algoC"> <div class="push-1-xl col-7-xl push-1-l col-7-l push-1-m col-7-m col-full text-center pad-bottom-50 pad-top-50"> <servicio-tres></servicio-tres> </div> </div> <div class="row algo"> <div class="push-4-xl col-7-xl push-4-l col-7-l push-4-m col-7-m col-full text-center pad-bottom-50 pad-top-50"> <servicio-cuatro></servicio-cuatro> </div> </div> <footer></footer>', 'servicios-page .fixed,[data-is="servicios-page"] .fixed{ position: fixed; z-index:10; background-color: rgba(233, 233, 233, 0.92); box-shadow: 0em 0.24em 0.92em #051923; transition: all 2s; width: 100%; margin-top: -1em; } servicios-page .block,[data-is="servicios-page"] .block{ position: absolute; z-index:10; transition: all 3s; background-color: transparent; width: 100%; } servicios-page .chico,[data-is="servicios-page"] .chico{ color: white; transition: all 5s; } servicios-page .grande,[data-is="servicios-page"] .grande{ color: black; transition: all 5s; }', '', function(opts) {
});
