function obtenerCantidad(matriz, elemento) {
    let contador = 0;
  
    for (let i = 0; i < matriz.length; i++) {
      // bucle que itera a través de las filas de la matriz
      for (let j = 0; j < matriz[i].length; j++) {
        // bucle que itera a través de las columnas de la matriz
        if (matriz[i][j] === elemento) {
          // comprueba si el elemento actual de la matriz es igual al elemento buscado
          contador++;
          // incrementa el contador si el elemento es igual
        }
      }
    }
}
  
  const items = [
    [2, 1, 1, 2],
    [2, 2],
    [1, 2, 1],
    [2, 2, 2, 1]
  ]
  
  const cantidad = obtenerCantidad(items, 2)
  console.log(cantidad)
  