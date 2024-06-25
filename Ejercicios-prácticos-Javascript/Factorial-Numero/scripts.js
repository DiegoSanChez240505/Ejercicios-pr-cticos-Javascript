function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function mostrarFactorial() {
    // Obtener el valor del input
    let numero = parseInt(document.getElementById('numeroInput').value, 10);
    
    // Calcular el factorial
    let resultado = factorial(numero);
    
    // Mostrar el resultado en el párrafo
    document.getElementById('resultadoFactorial').textContent = 'Factorial de ' + numero + ' es ' + resultado;
}
