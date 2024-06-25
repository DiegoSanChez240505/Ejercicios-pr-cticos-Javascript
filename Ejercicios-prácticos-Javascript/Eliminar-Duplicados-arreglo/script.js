function eliminarDuplicados(arreglo) {
    // Crear un nuevo arreglo sin duplicados usando Set
    return [...new Set(arreglo)];
}

function mostrarArregloSinDuplicados() {
    // Obtener el valor del input y convertirlo en un arreglo
    let input = document.getElementById('arrayInput').value;
    let arreglo = input.split(',').map(item => item.trim());
    
    // Eliminar duplicados
    let arregloSinDuplicados = eliminarDuplicados(arreglo);
    
    // Mostrar el arreglo sin duplicados en el párrafo
    document.getElementById('resultadoArray').textContent = 'Arreglo sin duplicados: ' + arregloSinDuplicados.join(', ');
}
