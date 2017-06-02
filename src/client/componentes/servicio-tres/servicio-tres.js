const riot = require('riot')
riot.tag2('servicio-tres', '<section id="servicio-uno" class="text-center pad-top-50 pad-bottom-50"> <div class="carta-alargada row clear"> <button onclick="{mostrarMas}" class="col-full-xl col-full-l col-full-m push-1 col-10"> <div class="col-full banner-img" riot-style="{imagen}"> <h3>{comentario}</h3> </div> <div class="col-full "> <h1 class="pad-top-20">{servicios}</h1> <hr> <p class="text-justify">{descripcion}</p> <p>presiona para conocer cual son los pasos a seguir</p> <embed src="./client/assets/img/more.svg" width="30" height="30"> </div> </button> <div if="{open}" onclick="{mostrarMas}" class="col-full-xl col-full-l col-full-m push-1 col-10"> <div class="row procesos-imagen text-justify"> <ul each="{x in step}"> <li class="pad-top-30 pad-bottom-30"> <embed riot-src="{x.icono}" width="50" height="50" class="col-1-3-xl col-1-3-l col-1-3-m col-1-3"> <p class="col-2-3-xl col-2-3-l col-2-3-m col-2-3">{x.texto}</p> </li> </ul> </div> </div> </div> </section>', '', '', function(opts) {
  this.servicios = 'QUALITY ASSURANCE'
  this.descripcion = '1.	Consultoría de Software para evaluación de calidad en distintos puntos:Las aplicaciones son propensas a tener fallos como cualquier elemento creado por humanos, a veces estos fallos pueden contribuir al fracaso de cualquier proyecto de software, e impactar de forma negativa en toda una empresa. Por ello es necesario prevenir lo más posible estos fallos y subsanarlos ya que todo influye y es preciso distintos puntos de vista fuera de los clientes del producto y desarrolladores para concebirlos para asegurar en lo posible, la calidad del producto. Por esto CloudBit presenta esta propuesta para un servicio de Quality Assurance subcontratado como forma de solución al problema propuesto.Es por esto que se presentan distintos puntos en los que se puede realizar las pruebas, cada una con un enfoque basado en el punto del ciclo de vida que se encuentra y estos son:a.	Pruebas de calidad durante el desarrollo del proyecto.b.	Pruebas de calidad a la finalización del proyecto antes de puesta en producción.c.	Pruebas de calidad en proyectos en producción.2.	Apoyo en manejo de proyectos mediante metodologías que aporten a la calidad del software.'
  this.imagen = 'background-image: url("./client/assets/img/qa.svg")'
  this.comentario = 'CUIDAMOS SU SOFTWARE'
  this.step = [
    {icono:'./client/assets/img/teamwork.svg', texto:'1.- CONSULTORIA EN SU PROBLEMA'},
    {icono:'./client/assets/img/compass-1.svg', texto:'2.- DEFINIMOS UN TIEMPO DE MANTENIMIENTO'},
    {icono:'./client/assets/img/printer.svg', texto:'3.- REALIZAMOS EL DOCUMENTO DE QUALITY'},
    {icono:'./client/assets/img/startup.svg', texto:'4.- EVALUACION TECNICA FINAL'}

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
