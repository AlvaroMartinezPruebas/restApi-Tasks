import mongoose from "mongoose";
import config from './config';


(async ()=> {
  try {
       const db =  await mongoose.connect(config.mongodbURL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
      });
      console.log('conectado a bd',db.connection.name);
  }
   catch(error){
     console.log(error);
   }

})();






