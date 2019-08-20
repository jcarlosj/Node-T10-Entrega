const express = require( 'express' ),
      app = express();

app .get( '/', ( require, response ) => {
    response .send( 'Home' );
});
app .get( '/noticias', ( require, response ) => {
    response .send( 'Noticias' );
});
app .get( '/opinion', ( require, response ) => {
    response .send( 'Opinion' );
});
app .get( '/economia', ( require, response ) => {
    response .send( 'Economia' );
});
app .get( '/deportes', ( require, response ) => {
    response .send( 'Deportes' );
});
app .get( '/entretenimiento', ( require, response ) => {
    response .send( 'Entretenimiento' );
});
app .get( '/cultura', ( require, response ) => {
    response .send( 'Cultura' );
});
app .get( '/tecnologia', ( require, response ) => {
    response .send( 'Tecnologia' );
});

app .listen( 8081 );