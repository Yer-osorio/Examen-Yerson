function sumarMatrices(matriz1, matriz2) {
    let n = matriz1.length;
    // obtiene el tamaño de la matriz 
  
    let resultado = [];
    // inicializa la matriz resultado
  
    for (let i = 0; i < n; i++) {
      // bucle que itera a través de las filas de la matriz
      resultado[i] = [];
      // inicializa cada fila de la matriz resultado
  
      for (let j = 0; j < n; j++) {
        // bucle que itera a través de las columnas de la matriz
        resultado[i][j] = matriz1[i][j] + matriz2[i][j];
        // suma los elementos correspondientes de las matrices y los asigna a la matriz resultado
      }
    }
  
    return resultado;
  }
  
  const matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  
  const matrizResultado = sumarMatrices(matriz1, matriz2)
  console.log(matrizResultado)