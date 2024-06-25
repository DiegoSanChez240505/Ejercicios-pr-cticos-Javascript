function invertirCadena(cadena) {
    // Convertir la cadena en un array de caracteres
    let arrayCaracteres = cadena.split('');
    
    // Invertir el array
    let arrayInvertido = arrayCaracteres.reverse();
    
    // Convertir el array invertido de nuevo en una cadena
    let cadenaInvertida = arrayInvertido.join('');
    
    // Devolver la cadena invertida
    return cadenaInvertida;
}

function mostrarCadenaInvertida() {
    // Obtener el valor del input
    let cadenaOriginal = document.getElementById('cadenaInput').value;
    
    // Invertir la cadena
    let cadenaInvertida = invertirCadena(cadenaOriginal);
    
    // Mostrar la cadena invertida en el párrafo
    document.getElementById('resultadoCadena').textContent = 'Cadena invertida: ' + cadenaInvertida;
}
