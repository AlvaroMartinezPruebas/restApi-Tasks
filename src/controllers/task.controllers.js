import modelTask from "../models/Task";

export const findAllTasks = async (req, res) => {
   console.log('findAllTasks');
   var listado = await modelTask.find();
   console.log("listado de tareas");
   res.json(listado);
}

export const findAllTasksTerminadas = async (req, res) => {
   console.log("listado de tareas terminadas");
   const listado = await modelTask.find({ terminado: true });
   res.json(listado);
}

export const findOneTask = async (req, res) => {
   console.log('findOneTask');
   console.log(req.params.id);
   const oneTask = await modelTask.findById(req.params.id);
   res.json(oneTask);
}

export const createTask = async (req, res) => {

   if (!req.body.titulo){
      return res.status(400).send({mensaje:"titulo es mandatorio"});
   }
   
   try {
      console.log('createTask');
      const newTask = new modelTask({
         titulo: req.body.titulo,
         descripcion: req.body.descripcion,
         terminado: req.body.terminado ? req.body.terminado : false
      });
      const tasksaved = await newTask.save();
      res.status('200').json(tasksaved);
   } catch (error) {
      res.status(500).json({mensaje:error.message||"error al crear tarea"})
   }

}

export const deleteTask = async (req, res) => {
   if (!req.params.id){
     return  res.status(400).send({mensaje:"id no ha sido indicado"});
   }

   try {
         console.log('delete Task');
         console.log("borrar la tarea", req.params.id);
         await modelTask.findByIdAndDelete(req.params.id);
         res.json({ message: "borrado ok" });
   } catch (error) {
      res.status(500).json({mensaje:error.message|| "error al borrar documento"});
   }

}

export const updateTask = async (req, res) => {
   if (!req.params.id){
      return  res.status(400).send({mensaje:"id no ha sido indicado"});
   }
   
   try {
       console.log("updateTask ", req.params.id);
       await modelTask.findByIdAndUpdate(req.params.id, req.body);
       res.json({ message: "actualizacion ok" });
   } catch (error) {
      res.status(500).json({mensaje:error.message|| "error al actualizar documento"});
   }
  
}