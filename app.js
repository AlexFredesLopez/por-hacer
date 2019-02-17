const { argv } = require('./config/yargs');
const colors = require('colors');
const porhacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {
    case 'crear':

        let tarea = porhacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porhacer.getListado();
        for (let tarea of listado) {
            console.log("=========================".green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log("=========================".green);
        }
    case 'actualizar':
        let actualizar = porhacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;

    case 'borrar':
        let borrado = porhacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no es reconocido");
        break;
}