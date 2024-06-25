function contarVocales(cadena) {
    let vocales = 'aeiouAEIOU';
    let contador = 0;
    for (let char of cadena) {
        if (vocales.includes(char)) {
            contador++;
        }
    }
    return contador;
}

function mostrarRecuentoVocales() {
    // Obtener el valor del input
    let cadena = document.getElementById('cadenaInput').value;
    
    // Contar las vocales
    let numeroVocales = contarVocales(cadena);
    
    // Mostrar el resultado en el párrafo
    document.getElementById('resultadoVocales').textContent = 'Número de vocales en la cadena: ' + numeroVocales;
}
