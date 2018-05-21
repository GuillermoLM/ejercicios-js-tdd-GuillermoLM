////////////////////////////// 
//  9
//  Crear una función llamada muestraPorConsolaEurosEnPesetas
//  que NO de DEVOLVER nada (devolver undefined)
//  pero que muestre por consola lo que haya recibido como euros en pesetas
//  debes utilizar console.log
//  además debe lanzar un error si no recibe un tipo number
//  Debes lanzar un error con la sentencia:
//  throw new Error('convierteEurosEnPesetas debe recibir un number');

// Aquí tu código
let convierteEurosEnPesetas = (x) => {
    if (typeof x !== "number") 
    {
        throw new Error("Debes introducir un numero");
    }
    else if(x !== undefined)
    {
        console.log(x);
    } 
    else 
    {
        return(168 * x);
    }
}
// Hasta aquí


// TEST 1
if (typeof convierteEurosEnPesetas === 'function' ) {
    console.log('apruebas:  convierteEurosEnPesetas es una función');
} else {
    console.log('suspendes:  convierteEurosEnPesetas NO es una función');
}

// TEST 2
if ( typeof convierteEurosEnPesetas(2) === 'undefined' ) {
    console.log('apruebas: convierteEurosEnPesetas devuelve undefined');
} else {
    console.log('suspendes: convierteEurosEnPesetas NO devuelve undefined');
}


// TEST 4
try {
    convierteEurosEnPesetas('1');
    convierteEurosEnPesetas(true);
    convierteEurosEnPesetas();
    console.log('suspendes: convierteEurosEnPesetas debe lanzar un error si no recibe un número');
    
} catch (error) {
    console.log('apruebas');
        
}