const riot = require('riot')
riot.tag2('servicio-cuatro', '<section id="servicio-uno" class="text-center pad-top-50 pad-bottom-50"> <div class="carta-alargada row clear"> <button onclick="{mostrarMas}" class="col-full-xl col-full-l col-full-m push-1 col-10"> <div class="col-full banner-img" riot-style="{imagen}"> <h3>{comentario}</h3> </div> <div class="col-full"> <h1 class="pad-top-20">{servicios}</h1> <hr> <p class="text-justify">{descripcion}</p> <p>presiona para conocer cual son los pasos a seguir</p> <embed src="./client/assets/img/more.svg" width="30" height="30"> </div> </button> <div if="{open}" onclick="{mostrarMas}" class="col-full-xl col-full-l col-full-m push-1 col-10"> <div class="row procesos-imagen text-center"> <ul each="{x in step}"> <li class="pad-top-30 pad-bottom-30"> <embed riot-src="{x.icono}" width="50" height="50" class="col-1-3-xl col-1-3-l col-1-3-m col-1-3"> <p class="col-2-3-xl col-2-3-l col-2-3-m col-2-3">{x.texto}</p> </li> </ul> </div> </div> </div> </section>', '', '', function(opts) {
  this.servicios = 'SERVICIOS DE SOPORTE'
  this.descripcion = '1.	Soporte a sistemas operativos Microsoft e infraestructura relacionada de Microsoft Exchange Server, SQL Server. 2.	Soporte a sistemas de Networking marca Barracuda.'
  this.imagen = 'background-image: url("./client/assets/img/nubee.svg")'
  this.comentario = 'SOLUCIONES DE REDES'
  this.step = [
    {icono:'./client/assets/img/transfer-2.svg', texto:'1.-ACUDIMOS A SUS OFICINAS'},
    {icono:'./client/assets/img/strategy.svg', texto:'2.-HACEMOS CONSULTORIA DE LS MEJORES OPCIONES'},
    {icono:'./client/assets/img/user-7.svg', texto:'3.-REALIZAMOS EL PRESUPUESTO'},
    {icono:'./client/assets/img/smartphone-1.svg', texto:'4.-TIENE UNA GARANTIA DE SOPORTE'}
  ]
  this.open = false

  this.mostrarMas = (e) => {
    if (this.open == false) {
      this.open = true
    }else{
      this.open = false
    }
  }
});
