const riot = require('riot')
riot.tag2('servicio-uno', '<section id="servicio-uno" class="text-center pad-top-50 pad-bottom-50"> <div class="carta-alargada row clear"> <button onclick="{mostrarMas}" class="col-full-xl col-full-l col-full-m push-1 col-10 "> <div class="col-full banner-img" riot-style="{imagen}"> <h3>{comentario}</h3> </div> <div class="col-full "> <h1 class="pad-top-20">{servicios}</h1> <hr> <p class="text-justify">{descripcion}</p> <p>presiona para conocer cual son los pasos a seguir</p> <embed src="./client/assets/img/more.svg" width="30" height="30"> </div> </button> <div if="{open}" onclick="{mostrarMas}" class="col-full-xl col-full-l col-full-m push-1 col-10 "> <div class="row procesos-imagen text-justify"> <ul each="{x in step}"> <li class="pad-top-30 pad-bottom-30"> <embed riot-src="{x.icono}" width="50" height="50" class="col-1-3-xl col-1-3-l col-1-3-m col-1-3"> <p class="col-2-3-xl col-2-3-l col-2-3-m col-2-3">{x.texto}</p> </li> </ul> </div> </div> </div> </section>', '', '', function(opts) {
  this.servicios = 'INFESTRUCTURA EN LA NUBE'
  this.descripcion = 'Con la premisa de “La nube es para todos, pero no todo es para la nube”, aseguramos que su migración a la nube sea exitosa, dándole asesoramiento para la selección del Service Provider, asegurando que el espacio a contratar en la nube sea el que realmente necesita y aconsejando a su empresa respecto a los servicios que puede migrar. También podemos colaborar con la preparación e implementación de nubes privadas y el desarrollo de Orquestadores de Servicios de Nube.'
  this.imagen = 'background-image: url("./client/assets/img/nubee.svg")'
  this.comentario = 'COLOCA TODO EN LA NUBE'
  this.step = [
    {icono:'./client/assets/img/user-8.svg', texto:'1.-ANALIZAR EL CONTENIDO QUE SE QUIERE ALMACENAR'},
    {icono:'./client/assets/img/dollar-symbol.svg', texto:'2.-CALCULAR EL PRECIO POR MEGAS ALAMACENADO'},
    {icono:'./client/assets/img/wrench.svg', texto:'3.-CONFIGURAR LA NUBE A LAS NEESIDADES ESPECIFICAS'},
    {icono:'./client/assets/img/user-5.svg', texto:'4.-INICIAR UNA PEQUEÑA CAPACITACION EN EL MANEJO'}

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
