// crea objeto app (servidor express)
//realiza configuracion (comportamiento) del objeto app, para atencion a peticiones del cliente (router), asi mismo establece modelo de intercambio de datos
//alta,consulta, update y delete de datos con mongo
import app from './app';

//realiza conexion a bae de datos
import './database';

//en escucha de las peticiones del cliente
app.listen(app.get('port'));

console.log('index.js inicia servidor en puerto', app.get('port'));