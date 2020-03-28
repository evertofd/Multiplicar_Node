const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==================='.green);
    console.log(`Tabla de ${base }`.green);
    console.log('==================='.green);
    for (var i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${i * base} \n`);

    }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base o el valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';

        for (var i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${i * base} \n`;

        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)


        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}