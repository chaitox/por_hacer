const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion)=>{
    
    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDb()
    return porHacer;
}

const guardarDb= ()=>{

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err)=>{
        if (err) {
            console.log(`Esrror al crear el archivo ${err}`);
        }else{
            console.log('El archivo se genero correctamente');
        }
    })
}


const cargarDb = ()=>{
    try {
         listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = []
    }
   

}


const getListado = ()=>{
    cargarDb()
    try {
        listadoPorHacer = require('../db/data.json');
   } catch (error) {
       listadoPorHacer = []
   }

   return listadoPorHacer;
}


const actualizar = (descripcion, completado = true)=>{
    cargarDb();
    
    let index = listadoPorHacer.findIndex( tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion)=>{
    cargarDb();
     
   let nuevoListado = listadoPorHacer.filter(tarea =>{
       return tarea.descripcion !== descripcion;
   });

   if (nuevoListado.length === listadoPorHacer.length) {
       return false;
   }else{
       listadoPorHacer = nuevoListado;
       guardarDb();
       return true;
   }
    
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}