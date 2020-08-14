const { demand } = require('yargs');

const argv = require('yargs')
            .command('crear', 'Crea una tarea para hacer', {
                descripcion:{
                    demand : true,
                    alias : 'd',
                    desc: 'Descripcion de la tarea por hacer'
                }
            })
            .command('actualizar', 'Actualiza el estado de una tarea',{
                descripcion:{
                    alias: 'd',
                    demand : true,
                    desc: 'Descripcion de la tarea por actualizar'
                },
                completado:{
                    alias: 'c',
                    default: true
                }
            })
            .command('listar', 'Listar todas las tareas agendadas',{})
            .command('borrar', 'Borrar tarea cargada',{
                descripcion : {
                    alias: 'b',
                    demand : true
                }
            })
            .help()
            .argv;

module.exports = {
    argv
};