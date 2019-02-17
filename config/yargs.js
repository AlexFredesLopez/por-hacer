const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea por hacer"
};

const completado = {
    alias: 'c',
    demand: true,
    desc: "Marca el completado de la tarea"
}


const argv = require('yargs')
    .command('crear', "Crea un elemento por hacer", {
        descripcion
    })
    .command('actualizar', "Actualiza el estado completo de una tarea", {
        descripcion,
        completado
    })
    .command('borrar', "Elimina un elemento por hacer", {
        descripcion
    })
    .help()
    .argv


module.exports = {
    argv
}