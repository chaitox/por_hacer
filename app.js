const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
      
        break;
    case 'listar':
       let listado = porHacer.getListado();

       for (let tarea of listado) {
           console.log('==========Tareas por hacer=============='.green);
           console.log(tarea.descripcion);
           console.log(`Estado : ${tarea.completado}`);
           console.log('========================================'.green);
       }
        break;
    case 'actualizar':
         let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
    default:
        console.log('Comando inexistente');    
    break;
}