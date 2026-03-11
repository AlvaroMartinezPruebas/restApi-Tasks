/*import { Schema, model } from mongoose;

//creo el esquema de una coleccion de tareas
const taskSchema = new Schema({
    titulo:{
        type:String,
        required: true,
        trim: true
    },
    descripcion:{
       type: String,
       trim:true
    },
    terminado: {
        type: Boolean,
        default:false
    }
},{
    versionKey:false,
    timestamps:true
});

export default model('Task',taskSchema);
*/


import mongoose from 'mongoose';

//defino un esquema para la coleccion tasks en b.d tasksapi
const taskSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    terminado: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
});

//define el modelo Task, a partir del esquema, para una coleccion llamada tasks, en la base de datos taskapi
//                             coleccion en b.d, esquema
var modelTask = mongoose.model('tasks', taskSchema);

//exporta el modelo Task
export default modelTask;

