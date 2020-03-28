// CREAR UN ARCHIVO DENTRO DE LA MISMA CARPETA

//const fs = require('fs');
// let base = 7;
//let data = '';

//for (var i = 1; i <= 10; i++) {
//    data += `${base} * ${i} = ${i * base} \n`;
////fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//if (err) throw err;


// console.log(`el archivo tabla-${base}.txt ha sido creado`);
//});

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}