const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();
console.log(argv);
//console.log(process.argv);


// const [, , arg3] = process.argv;
// console.log(arg3);

//const base = 7;


crearArchivo(argv.b, argv.l, 10)
    .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
    .catch((err) => console.log(err));

