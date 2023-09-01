function matrizCuadrada(matriz) {
    const filas = matriz.length;
    // obtiene el número de filas de la matriz
    const columnas = matriz[0].length;
    // obtiene el número de columnas de la matriz tomando la longitud de la primera fila
    return filas === columnas;
    // devuelve true si el número de filas es igual al número de columnas, indicando que la matriz es cuadrada
  }
  

  const matriz1 = [
    [3, 7, 1],
    [8, 2, 9],
    [1, 3, 6]
  ]
  
  const matriz2 = [
    [4, 2, 0],
    [5, 4, 7]
  ]
  
  console.log(matrizCuadrada(matriz1))
  console.log(matrizCuadrada(matriz2))
  