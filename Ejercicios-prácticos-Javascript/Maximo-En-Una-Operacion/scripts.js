function encontrarMaximo(arreglo) {
    return Math.max(...arreglo.map(num => parseFloat(num)));
}

function mostrarMaximoArreglo() {
    // Obtener el valor del input y convertirlo en un arreglo
    let input = document.getElementById('arrayInput').value;
    let arreglo = input.split(',').map(item => item.trim());
    
    // Encontrar el máximo en el arreglo
    let maximo = encontrarMaximo(arreglo);
    
    // Mostrar el máximo en el párrafo
    document.getElementById('resultadoMaximo').textContent = 'Máximo en el arreglo: ' + maximo;
}
