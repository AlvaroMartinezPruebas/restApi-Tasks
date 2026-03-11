import { config } from "dotenv";
config();  //lee archivo .env y carga las variables de entorno

console.log('config.js ', process.env.MONGODB_URI);

//defino y exporto la propiedad mongodbURL, q se accederá asi: config.mongodbURL desde los modulos q importen config.js
export default {
    mongodbURL: process.env.MONGODB_URI
}