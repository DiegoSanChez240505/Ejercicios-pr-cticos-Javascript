function sumarNumeros(arreglo) {
    return arreglo.reduce((acc, num) => acc + parseFloat(num), 0);
}

function mostrarSumaArreglo() {
    // Obtener el valor del input y convertirlo en un arreglo
    let input = document.getElementById('arrayInput').value;
    let arreglo = input.split(',').map(item => item.trim());
    
    // Sumar los números del arreglo
    let suma = sumarNumeros(arreglo);
    
    // Mostrar la suma en el párrafo
    document.getElementById('resultadoSuma').textContent = 'Suma de los números del arreglo: ' + suma;
}
