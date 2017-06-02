const riot = require('riot')
import '../../componentes/header/header'
import '../../componentes/footer/footer'
import '../../componentes/headeroom/headeroom'

riot.tag2('blog-page', '<header></header> <headeroom></headeroom> <h1>hola desde la vista de blog-page</h1> <footer></footer>', '', '', function(opts) {
});
