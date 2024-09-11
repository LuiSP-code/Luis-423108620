let dict_1 = {};
const user_1 = 'Pepito15';
const password = 2563;

// FUNCION-1
function agregar_producto() {
    const usuario = prompt('Ingrese su nombre de usuario:\n-');
    const contraseña = parseInt(prompt('Ingrese su contraseña:\n-'));
    if (usuario === user_1 && contraseña === password) {
        const var_1 = prompt('¿Cuál es el nombre del producto?:\n-');
        const var_2 = parseFloat(prompt('¿Cuál es el valor del producto?:\n-'));
        dict_1[var_1] = var_2;
        alert('El producto fue agregado a la lista con exito.');
    } else {
        alert('ERROR:\n-Usuario o contraseña incorrecta');
    }
}

// FUNCION-2
function ver_productos() {
    if (Object.keys(dict_1).length === 0) {
        console.log('UPS 😥-Carrito vacio!- Ingrese un producto.');
    } else {
        console.log('Los productos son los siguientes:\n');
        for (const i of Object.keys(dict_1)) {
            alert(`-${i}`);
        }
    }
}

// FUNCION-3
function total() {
    if (Object.keys(dict_1).length <= 0) {
        console.log('UPS 😥-Carrito vacio!- Ingrese un producto.');
    } else {
        const totalValue = Object.values(dict_1).reduce((acc, val) => acc + val, 0);
        alert(`El total es de:\n-${totalValue}`);
    }
}

// FUNCION-4
function borrar_producto() {
    if (Object.keys(dict_1).length <= 0) {
        alert('UPS 😥-Carrito vacio!- Ingrese un producto.');
    } else {
        const v1 = prompt('¿Qué producto quiere quitar del carrito?:\n-');
        alert(`El producto ${v1} se elimino del carrito.`);
        delete dict_1[v1];
    }
}

// FUNCION-5
function salir() {
    alert('Saliendo... 🤗');
}

try {
    while (true) {
        const a = parseInt(prompt('MENU DEL CARRITO DE COMPRAS:\n1-Agregar producto nuevo #(ADMINISTRADOR)\n2-Ver los productos del carrito.\n3-Total de los productos.\n4-Borrar los productos del carrito.\n5-Salir de la aplicación.\n'));
        if (a === 1) {
            agregar_producto();
        } else if (a === 2) {
            ver_productos();
        } else if (a === 3) {
            total();
        } else if (a === 4) {
            borrar_producto();
        } else if (a === 5) {
            salir();
            break;
        } else {
            console.log('Intelo de nuevo.');
        }
    }
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log('ERROR:\n-Ingrese una llave valida.');
    } else if (error instanceof SyntaxError) {
        console.log('ERROR:\n-Ingrese un valor valido.');
    } else if (error instanceof TypeError) {
        console.log('ERROR:\n-Ingrese un valor numérico valido.');
    }
}

