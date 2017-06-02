const riot = require('riot')

import '../../componentes/clock/clock'
import '../../componentes/saludos/saludos'

riot.tag2('index-page', '<section id="index" riot-style="{imagenes}"> <div class="row"> <div class="col-full-xl col-full-l col-full-m col-full text-center"> <img src="./client/assets/img/cloudbit.png" alt="La mejor empresa de software en Bolivia" class="img-fluid"> </div> <div class="col-full-xl col-full-l col-full-m col-full text-center"> <clock h="{h}" m="{m}" s="{s}"></clock> </div> <div class="col-full-xl col-full-l col-full-m col-full text-center"> <saludos saludos="{saludos}" day="{d}"></saludos> </div> <div class="col-full-xl col-full-l col-full-m col-full text-center"> <ul each="{x in links}"> <li><a href="{x.href}">{x.name}</a></li> </ul> </div> </div> </section>', 'index-page .si,[data-is="index-page"] .si{ opacity: 1; transition: all 10s; } index-page .no,[data-is="index-page"] .no{ opacity: 0; transition: all 0s; }', '', function(opts) {


const tag = this
const weekDay = new Array(7)
const saludo = new Array(2)
const imagen = new Array(7)

weekDay[0] = 'DOMINGO'
weekDay[1] = 'LUNES'
weekDay[2] = 'MARTES'
weekDay[3] = 'MIERCOLES'
weekDay[4] = 'JUEVES'
weekDay[5] = 'VIERNES'
weekDay[6] = 'SABADO'

saludo[0] = 'BUENAS TARDES, QUISIERAMOS AGREGARLE VALOR A SU '
saludo[1] = 'BUENAS NOCHES, ESPERAMOS HAYA SIDO UN GRAN '
saludo[2] = 'BUENO DIA, TE DESEAMOS UN GRAN COMIENZO DE'

imagen[0] = "background-image: url('./client/assets/img/7.jpg')"
imagen[1] = "background-image: url('./client/assets/img/1.jpg')"
imagen[2] = "background-image: url('./client/assets/img/2.jpg')"
imagen[3] = "background-image: url('./client/assets/img/3.jpg')"
imagen[4] = "background-image: url('./client/assets/img/4.jpg')"
imagen[5] = "background-image: url('./client/assets/img/5.jpg')"
imagen[6] = "background-image: url('./client/assets/img/6.jpg')"

tag.links = [
  {name:'INICIO', href:'#/inicio'},
  {name:'SERVICIOS', href:'#/servicios'},
  {name:'PRODUCTOS', href:'#/productos'},
  {name:'CULTURA', href:'#/cultura'},
  {name:'CONTRATACIONES', href:'#/contrataciones'},
  {name:'EQUIPO', href:'#/equipo'},
  {name:'CONTACTO', href:'#/contacto'}
]

tag.x = () => {
  const t = new Date()
  this.h = ((t.getHours() < 10)? "0":"") + t.getHours()
  this.m = ((t.getMinutes() < 10)? "0":"") + t.getMinutes()
  this.s = ((t.getSeconds() < 10)? "0":"") + t.getSeconds()
  this.d = weekDay[t.getDay()]
  this.update()
}

tag.y = () => {

  if (this.h > 11 && this.h < 18) {
    this.saludos = saludo[0]

  }else if (this.h > 17 && this.h < 25) {
    this.saludos = saludo[1]

  }else if(this.h > 0 && this.h < 12){
    this.saludos = saludo[2]

  }else{
    console.log('un eror muy grave');
  }
}

tag.z = () => {
  if (this.d) {
    this.imagenes = imagen[Math.floor(Math.random()*imagen.length)]
  }else{
    console.log('Hubo un error super grave con el servidor');
  }
}

this.on('mount', function() {

  tag.x()
  tag.y()
  tag.z()
  setInterval(tag.x, 1000)
  setInterval(tag.y, 35000000)
  setInterval(tag.z, 8600000000)

})

});
