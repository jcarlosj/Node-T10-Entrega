const appRouter = ( app, fs ) => {

    /** Rutas disponibles */
    app .get( '/', ( require, response ) => {
        response .render( 'home', {                     // nombre del archivo .jade (Ver linea 8)
            title: 'Home'
        });
    });
    app .get( '/noticias', ( require, response ) => {
        response .render( 'news', {                     // nombre del archivo .jade (Ver linea 8)
            title: 'Noticias'
        });
    });
    app .get( '/opinion', ( require, response ) => {
        response .render( 'opinion', {                     // nombre del archivo .jade (Ver linea 8)
            title: 'Opinion'
        });
    });
    app .get( '/economia', ( require, response ) => {
        response .render( 'economy', {                     // nombre del archivo .jade (Ver linea 8)
            title: 'Economia'
        });
    });
    app .get( '/deportes', ( require, response ) => {
        response .render( 'sports', {                     // nombre del archivo .jade (Ver linea 8)
            title: 'Deportes'
        });
    });
    app .get( '/entretenimiento', ( require, response ) => {
        response .render( 'enternaiment', {                     // nombre del archivo .jade (Ver linea 8)
            title: 'Entretenimiento'
        });
    });
    app .get( '/cultura', ( require, response ) => {
        response .render( 'culture', {                     // nombre del archivo .jade (Ver linea 8)
            title: 'Cultura'
        });
    });
    app .get( '/tecnologia', ( require, response ) => {
        response .render( 'tecnology', {                     // nombre del archivo .jade (Ver linea 8)
            title: 'Tecnologia'
        });
    });

};

module.exports = appRouter;