const riot = require('riot')

riot.tag2('cartas-cultura', '<section id="cultura-section" class="row pad-top-50 pad-bottom-50 text-center" if="{lista}"> <ul each="{x in cultura}" class="push-1-xl col-5-xl push-1-l col-5-l push-1-m col-5-m push-1 col-10"> <li> <button onclick="{verMas.bind(this, x)}"> <div riot-style="{x.img}" class="background"> <h1>{x.profesion}</h1> </div> </button> </li> </ul> </section> <section id="cultura-mas" class="row text-center pad-top-50 pad-bottom-50" if="{detalles}"> <button onclick="{toggle}" class="push-1-xl col-10-xl push-1-l col-10-l push-1-m col-10-m push-1 col-10"> <div riot-style="{datos.img}" class="background"> </br> </br> </br> </br> </br> </br> </br> </br> </br> </br> </br> </br> </div> <h1><em>{datos.nombre}</em></h1> <h3>{datos.profesion}</h3> <p>{datos.mensaje}</p> <hr> <p>{datos.id}</p> </button> </section>', '', '', function(opts) {

  this.cultura = [
    {img:'background-image: url("./client/assets/img/group.svg")', nombre:'COMPAÑERISMO', profesion:'EL MENSAJE ES SENCILLO, SOLO JUNTOS PODREMOS CONQUISTAR NUESTRAS AMBICIONES', mensaje:'En la empresa de Cloudbit se denomina como un lugar donde las personas afines a desarrollo tecnolgico y programación se juntan. Con esto dicho combinamos nuestras otras virtudes como organizacion para mejorar e implemntar en el mercado nuestros conocimientos, productos y servicios. Que no serian posibles de entregar sin la debida estrategica de equipo que junto con las personas en el sector administrativo se cumplen objetivos. Por eso el compañerismo en Cloudbit es un hecho de convivencia diaria, remando en la misma direccion sin discriminar al compañero que nos apoya codo a codo', id:'21'},
    {img:'background-image: url("./client/assets/img/padlock-1.svg")', nombre:'MODELO 3X2', profesion:'CONFIAMOS EN QUE NUESTRA GENTE TOME LAS MEJORES DECISIONES POR ELLOS MISMOS', mensaje:'Las mejores deciciones son tomadas por las personas que saben mas sobre el problema. En Cloudbit, todos tienen el deber de decidir de forma correcta, trasnparente y justa. Para lograr esto, hemos creado el modelo 3x2. Donde todas las decisiones, nuevos proyectos o una tarea de servicio son consideras para su inmediato y largo plazo impacto. ', id:'21'},
    {img:'background-image: url("./client/assets/img/laptop-2.svg")', nombre:'RAICES', profesion:'PORQUE? COMO? Y QUE? NOS MOTIVA', mensaje:'PORQUE: Todas las personas involucradas en este proyecto tiene un fuerte tendencia a verse inspirada por la manera la tecnologia cambia la vision del empresario. Cuando nos realizamos de que cada dato guardado en nuestra BASE de DATOS es un consejo del pasado a un futuro mas predecible es el porque estamos en esta industria. COMO: Somos representantes oficiales de el sector de ventas de IBM gracias a una trayectoria exitosa de nuestro gerente general. Asi tuvimos acceso a WATSON (la inteligencia artificial de IBM) y a BLUEMIX que nos da las soluciones de nube necesarias. QUE: Ultimos pero no menos importante, son el resultado de nuestros valores en productos viables para todos que BOLIVIANOS tengan las soluciones acertadas en cuanto a tecnologia ', id:'21'},
    {img:'background-image: url("./client/assets/img/pencil.svg")', nombre:'INVESTIGACION', profesion:'INVERTIMOS TIEMPO PAGADO EN NUEVAS SOLUCIONES', mensaje:'Cuando cumplimos nuestros deberes a cada personas se le otorga un porcentaje de su tiempo en libre investigación, es ahi donde el aprendizaje se multiplica ya que diferentes caminos nos llevan a lo mismo. Las conclusiones que sacamos como equipo es en base a una deliberada discucion de pensamientos. Logrando ejemplificarlos y tranformandolos en productos viables. Por eso para nuestra cultura la investigacion es un lugar de expresion a la manera cientifica que corresponde a nuestra mision como empresa', id:'21'},

  ]
  this.detalles = false
  this.lista = true

  this.toggle = (e) => {
    if(this.lista == true){
      this.detalles = true
      this.lista = false
    }else{
      this.detalles = false
      this.lista = true
    }
  }

  this.verMas = (datos) => {
    this.toggle()
    this.datos = datos
  }

});
