function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function mostrarEsPrimo() {
    // Obtener el valor del input
    let numero = parseInt(document.getElementById('numeroInput').value, 10);
    
    // Verificar si el número es primo
    let resultado = esPrimo(numero);
    
    // Mostrar el resultado en el párrafo
    if (resultado) {
        document.getElementById('resultadoPrimo').textContent = 'El número ' + numero + ' es primo.';
    } else {
        document.getElementById('resultadoPrimo').textContent = 'El número ' + numero + ' no es primo.';
    }
}
