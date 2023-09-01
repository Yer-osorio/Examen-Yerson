function filaMasLarga(matriz) {
    let filaMasLarga = matriz[0]
    // se inicia la variable suponiendo que la fila mas larga es la primera
  
    for (let i = 1; i < matriz.length; i++) {
      // bucle que itera a través de las filas de la matriz, comenzando desde la segunda fila
      if (matriz[i].length > filaMasLarga.length) {
        // comprueba si la longitud de la fila actual es mayor que la longitud de 'filaMasLarga'
        filaMasLarga = matriz[i];
        // actualiza 'filaMasLarga' con la fila actual si su longitud es mayor
      }
    }
  
    return filaMasLarga;
  }
  
 
  const matriz1 = [
    [8, 3, 1],
    [7, 5, 2, 9],
    [4, 0]
  ];
  
  const masLarga = filaMasLarga(matriz1);
  console.log(masLarga);
  