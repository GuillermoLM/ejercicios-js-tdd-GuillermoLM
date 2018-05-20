////////////////////////////// 
//  1
//  Crea un objecto en la variable ordenador
//  de tal modo que el siguiente código no muestre por consola 'suspendes'


// Aquí tu código
let ordenador = {
    marca: 'La pava',
    tipo: 'portátil',
    perifericos: ['raton','touchPad'],
    almacenamiento: {
        discos: ['SDD', 'HD',],
            maestro: 0,
        },
 }


// Hasta aquí

// TEST 1
if (typeof ordenador === 'object') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}
// TEST 2
if (ordenador.marca === 'La pava') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}
// TEST 3
if (ordenador.tipo === 'portátil') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}
// TEST 4
if (ordenador.perifericos[1] === 'touchPad') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}
// TEST 5
if (ordenador.almacenamiento.discos[1] === 'HD') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}
// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
    console.log('apruebas');
} else {
    console.log('suspendes');
}
// TEST 7
if (ordenador.almacenamiento.discos[ ordenador.almacenamiento.maestro ] === 'SDD') {
    console.log('apruebas');
} else {
    console.log('suspendes');
}

