const appRouter = ( app, fs ) => {
    const dataPath = './data/users.json';

    console .log( 'JSON > Users', JSON .stringify( dataPath ) );

    /** Rutas disponibles */
    app .get( '/', ( request, response ) => {
        fs .readFile( dataPath, 'utf8', ( err, data ) => {
            if ( err ) {
                throw err;
            }

            console .log( ' >>> ', JSON .parse( data ) );

            //response .send( JSON .parse( data ) );
            response .render( 'home', {                     // nombre del archivo .jade (Ver linea 8)
                data: JSON .parse( data ),
                title: 'Home'
            });
        });

    });
    app .get( '/noticias', ( request, response ) => {
        response .render( 'news', {                     // nombre del archivo .jade (Ver linea 8)
            title: 'Noticias'
        });
    });
    app .get( '/opinion', ( request, response ) => {
        response .render( 'opinion', {                     // nombre del archivo .jade (Ver linea 8)
            title: 'Opinion'
        });
    });
    app .get( '/economia', ( request, response ) => {
        response .render( 'economy', {                     // nombre del archivo .jade (Ver linea 8)
            title: 'Economia'
        });
    });
    app .get( '/deportes', ( request, response ) => {
        response .render( 'sports', {                     // nombre del archivo .jade (Ver linea 8)
            title: 'Deportes'
        });
    });
    app .get( '/entretenimiento', ( request, response ) => {
        response .render( 'enternaiment', {                     // nombre del archivo .jade (Ver linea 8)
            title: 'Entretenimiento'
        });
    });
    app .get( '/cultura', ( request, response ) => {
        response .render( 'culture', {                     // nombre del archivo .jade (Ver linea 8)
            title: 'Cultura'
        });
    });
    app .get( '/tecnologia', ( request, response ) => {
        response .render( 'tecnology', {                     // nombre del archivo .jade (Ver linea 8)
            title: 'Tecnologia'
        });
    });

};

module.exports = appRouter;