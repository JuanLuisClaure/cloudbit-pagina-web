const riot = require('riot')
riot.tag2('servicio-dos', '<section id="servicio-uno" class="text-center pad-top-50 pad-bottom-50"> <div class="carta-alargada row clear"> <button onclick="{mostrarMas}" class="col-full-xl col-full-l col-full-m push-1 col-10"> <div class="col-full banner-img" riot-style="{imagen}"> <h3>{comentario}</h3> </div> <div class="col-full"> <h1 class="pad-top-20">{servicios}</h1> <hr> <p class="text-justify">{descripcion}</p> <p>presiona para conocer cual son los pasos a seguir</p> <embed src="./client/assets/img/more.svg" width="30" height="30"> </div> </button> <div if="{open}" onclick="{mostrarMas}" class="col-full-xl col-full-l col-full-m push-1 col-10"> <div class="row procesos-imagen text-justify"> <ul each="{x in step}"> <li class="pad-top-30 pad-bottom-30"> <embed riot-src="{x.icono}" width="50" height="50" class="col-1-3-xl col-1-3-l col-1-3-m col-1-3"> <p class="col-2-3-xl col-2-3-l col-2-3-m col-2-3">{x.texto}</p> </li> </ul> </div> </div> </div> </section>', '', '', function(opts) {
  this.servicios = 'CONSULTORIA IT'
  this.descripcion = 'Por medio de nuestra metodología de consultoría IT podemos evaluar y diagnosticar el estado interno de sus servicios de Tecnología de la Información, proponiendo soluciones de mejora.Contamos con la capacidad de ayudarle a escribir sus requisiciones de IT, asegurando un mejor Costo Total de Propiedad, Vida Útil y disponibilidad de la infraestructura a adquirir y ofrecemos servicios de programación ABAP para sus implementaciones de SAP All In One y R3.'
  this.imagen = 'background-image: url("./client/assets/img/it.svg")'
  this.comentario = 'SOLUCIONES A MEDIDA'
  this.step = [
    {icono:'./client/assets/img/pencil.svg', texto:'1.-DIAGNOSTICAR EL PROBLEMA Y EVALUAR LAS OPCIONES'},
    {icono:'./client/assets/img/piggy-bank-1.svg', texto:'2.-PROPONER UNA SOLUCION VIABLE Y SUS COSTOS'},
    {icono:'./client/assets/img/security.svg', texto:'3.-GESTIOAR EL ACCESO LAS PERSONAS HABILITADAS'},
    {icono:'./client/assets/img/placeholder.svg', texto:'4.-DAR SOPORTE A DOMICILIO DURANTE LA GARANTIA'}

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
