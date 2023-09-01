function cuentaRegresiva(numeroInicial){
    const cuenta = []
    for(let i = numeroInicial; i>=0; i--){
        cuenta.push(i)
    }
    return cuenta
}
console.log(cuentaRegresiva(5))