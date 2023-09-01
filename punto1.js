function obtenerNumeroMayor(matriz) {
    let numeroMayor = matriz[0][0];
    // inicializa la variable 'numeroMayor' con el primer elemento de la matriz
  
    for (let i = 0; i < 4; i++) {
      // bucle que itera a través de las filas de la matriz
      for (let j = 0; j < 4; j++) {
        // bucle que itera a través de las columnas de la matriz
        if (matriz[i][j] > numeroMayor) {
          // comprueba si el elemento actual es mayor que 'numeroMayor'
          numeroMayor = matriz[i][j];
          // actualiza el valor de 'numeroMayor' si el elemento actual es mayor
        }
      }
    }
    
    return numeroMayor;
  }

const matrizEjemplo = [
    [5, 2, 6, 9], 
    [1, 3, 7, 4], 
    [34, 11, 13, 5], 
    [22, 15, 12, 16]
]

const numeroMayor = obtenerNumeroMayor(matrizEjemplo);
console.log(numeroMayor);
