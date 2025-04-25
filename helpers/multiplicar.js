let fs = require('fs');

/* const crearArchivo = (base, listar = false, hasta = 10) => {
    return new Promise((resolve, reject) => {
        console.clear();
        console.log('---------------------');
        console.log(`TABLA de multiplicar ${base}`);
        console.log('---------------------');
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${i} * ${base} = ${i * base}\n`;
            if (listar) {
                console.log(i, '*', base, '=', i * base);
            }
        }
        //console.log(salida);
        fs.writeFileSync(`tabla_del_${base}.txt`, salida, (err) => {
            if (err) reject(err);
            else resolve(`tabla_del_${base}.txt`);
        });
    });
} */

const crearArchivo = async (base, listar = false, hasta = 10) => {
    try {
        console.clear();
        console.log('---------------------');
        console.log(`TABLA de multiplicar ${base}`);
        console.log('---------------------');
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${i} * ${base} = ${i * base}\n`;
            if (listar) {
                console.log(i, '*', base, '=', i * base);
            }
        }
        //console.log(salida);
        fs.writeFileSync(`./salida/tabla_del_${base}.txt`, salida);
        return `tabla_del_${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo: crearArchivo
}