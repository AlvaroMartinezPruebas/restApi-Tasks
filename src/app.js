//const express = require('express'); si usamos babel ya no usamos esta sintaxis
import express from "express";
import cors from "cors";
import morgan from "morgan";
import TasksRoutes from './routes/tasks.routes.js';

//crea el servidor
const app = express();

//settings
app.set('port', process.env.port || 3000);

//middleware
const corsOptions={};
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  //permite q nuestro servidor entienda las peticiones html

//router de default
app.get('/', (req, res) => {
   console.log('app.js get /');
   res.json({ mensaje: "Hola mundo" })
});

//indico q tome mis routers del modulo TaskRoutes, desde la ruta api/tasks
app.use('/api/tasks', TasksRoutes);

export default app;