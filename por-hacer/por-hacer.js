const fs = require('fs');


let listadoPorHacer = [];


const guardarPorDb = () => {
    // cargarDb();
    let data = JSON.stringify(listadoPorHacer);

    return new Promise((resolve, reject) => {
        fs.writeFile(`db/data.json`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`Terea Guardara`);
            // console.log(`tabla-${base}.txt ha sido creada`);
        });
    });

}


const cargarDb = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

    // console.log(listadoPorHacer);
}


const crear = (descripcion) => {

    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    guardarPorDb();
    return porHacer;
}


const getListado = () => {
    cargarDb();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDb();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarPorDb();
        return true;
    } else {
        return false;
    }
}


const borrar = (descripcion) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarPorDb();
        return "Borrado";
    } else {
        return "No encontrado";
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}