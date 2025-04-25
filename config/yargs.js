const argv = require('yargs')
            .options('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .options('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: true,
                default: false,
                describe: 'Muestra la tabla en consola'
            })
            .options('h', {
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                default: 10,
                describe: 'Es el número hasta donde quieres la tabla de multiplicar'
            })
            .check((argv, options) => {
                if(isNaN(argv.b)) {
                    throw 'La base tiene que ser un número';
                }
                return true;
            })
            .argv;

module.exports = argv;