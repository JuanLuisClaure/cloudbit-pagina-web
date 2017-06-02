const riot = require('riot')

riot.tag2('cartas-personas', '<section id="people-section" class=" row text-center pad-top-50 pad-bottom-50" if="{lista}"> <ul each="{x in people}" class="push-1-xl col-5-xl push-1-l col-5-l push-1-m col-5-m push-1 col-10"> <li> <button onclick="{verMas.bind(this, x)}"> <img riot-src="{x.img}" alt="{x.nombre}" class="img-fluid"> <hr style="border:1px solid white;"> <h3>{x.nombre}</h3> <hr style="border:1px solid white;"> </button> </li> </ul> </section> <section id="people-mas" class="row text-center pad-top-50 pad-bottom-50" if="{detalles}"> <button onclick="{toggle}" class="push-2-xl col-8-xl push-2-l col-8-l push-2-m col-8-m push-1 col-10"> <img riot-src="{datos.img}" alt="{datos.nombre}" class="img-fluid"> <hr style="border:1px solid white;"> <h2>{datos.profesion}</h2> <p>{datos.mensaje}</p> <hr style="border:1px solid white;"> <h6><em>{datos.nombre}</em></h6> </button> </section>', '', '', function(opts) {

  this.people = [
    {img:'./client/assets/img/hugoLambert.jpg', nombre:'Hugo Lambert Leal', profesion:'Gerente General', mensaje:'preguntar porque viene todos los dias a cloudbit', id:'0'},
    {img:'./client/assets/img/jaimePinto.jpg', nombre:'Jaime Vacapinto', profesion:'Sub-Gerente', mensaje:'preguntar porque viene todos los dias a cloudbit', id:'0'},
    {img:'./client/assets/img/marielaOjopi.jpg', nombre:'Mariela Ojopi', profesion:'Lider de Finanzas', mensaje:'preguntar porque viene todos los dias a cloudbit', id:'0'},
    {img:'./client/assets/img/melisaMelgar.jpg', nombre:'Melisa Melgar', profesion:'Contadora', mensaje:'preguntar porque viene todos los dias a cloudbit', id:'0'},
    {img:'./client/assets/img/francoIsu.jpg', nombre:'Franco Isu', profesion:'Relaciones Publicas', mensaje:'preguntar porque viene todos los dias a cloudbit', id:'0'},
    {img:'./client/assets/img/juanluisClaure.jpg', nombre:'Juan Luis Claure', profesion:'Desarrollador Frontend', mensaje:'preguntar porque viene todos los dias a cloudbit', id:'0'},
    {img:'./client/assets/img/carlosGutierrez.jpg', nombre:'Carlos Gutierrez', profesion:'Desarrollador Backend', mensaje:'preguntar porque viene todos los dias a cloudbit', id:'0'},
    {img:'./client/assets/img/ramiroAquino.jpg', nombre:'Ramiro Aquino', profesion:'Desarrolador Backend', mensaje:'preguntar porque viene todos los dias a cloudbit', id:'0'},
    {img:'./client/assets/img/jhonavy.jpg', nombre:'giovanni Heriberto Vega ', profesion:'Desarrollador Backend', mensaje:'preguntar porque viene todos los dias a cloudbit', id:'0'},
    {img:'./client/assets/img/brianSagredo.jpg', nombre:'Brian Sagredo', profesion:'Desarrollador Backend', mensaje:'preguntar porque viene todos los dias a cloudbit', id:'0'},
    {img:'./client/assets/img/luisLopez.jpg', nombre:'Luis Lopez', profesion:'Desarrollador Backend', mensaje:'preguntar porque viene todos los dias a cloudbit', id:'0'},
    {img:'./client/assets/img/leandroDorado.jpg', nombre:'Leandro Dorado', profesion:'Desarrollador Backend', mensaje:'preguntar porque viene todos los dias a cloudbit', id:'0'},

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
