const riot = require('riot')

riot.tag2('quotes', '<section id="quotes-componente" class="pad-top-50 pad-bottom-50 text-center"> <blockquote> <p>{opts.contenido.quote}</p> <cite>{opts.contenido.autor}</cite> </blockquote> </section>', '', '', function(opts) {
});
