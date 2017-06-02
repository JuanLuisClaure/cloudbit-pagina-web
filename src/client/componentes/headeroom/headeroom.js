const riot = require('riot')
riot.tag2('headeroom', '<div class="{css}"> <p>{year}</p> </div>', '', '', function(opts) {

const tag = this;
tag.year = '';
tag.css = ''
tag.location =  window.location.href;
tag.full = window.location.protocol + "//" + window.location.host + "/#/";

if (tag.location == tag.full + 'servicios') {
  tag.css = 'imagen-servicios'
  tag.year = 'SERVICIOS ORIENTADOS A SUS NECESIDADES';

}
else if (tag.location == tag.full + 'productos'){
  tag.css = 'imagen-productos'
  tag.year = 'INCREMENTE SU PRODUCTIVIDAD CON TECNOLOGIA';

}
else if (tag.location == tag.full + 'cultura'){
  tag.css = 'imagen-cultura'
  tag.year = 'CREEMOS Y AMAMOS LO QUE HACEMOS';

}
else if (tag.location == tag.full + 'contrataciones'){
  tag.css = 'imagen-trabajos'
  tag.year = 'BUSCAMOS NUEVOS TALENTOS';

}
else if (tag.location == tag.full + 'blog'){
  tag.css = 'imagen-blog'
  tag.year = 'bienvenidos a blog';

}
else if (tag.location == tag.full + 'equipo'){
  tag.css = 'imagen-people'
  tag.year = 'REALIZADORES DE IDEAS';

}
else if (tag.location == tag.full + 'contacto'){
  tag.css = 'imagen-contacto'
  tag.year = 'ENTREMOS EN CONTACTO';

} else {
  console.log('error');

}

});
