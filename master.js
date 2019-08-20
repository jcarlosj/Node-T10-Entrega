const express = require( 'express' ),
      fs = require( 'fs' ),
      path = require( 'path' ),
      app = express();

/** Rutas estaticas disponibles para el proyecto de forma privada */
app .set( 'views', __dirname + '/views' );          // Vistas         
app .set( 'view engine', 'jade' );                  // Generated Templates (Entiende nombre de archivos sin extension .jade)

/** Crea Middleware: Rutas estaticas disponibles para el proyecto de forma publica usando Express  */
app .use( express .static( path .join( __dirname, 'public' ) ) );      

/** Importa Rutas */
const routes = require( './routes/routes.js' )( app, fs );

app .listen( 8081 );