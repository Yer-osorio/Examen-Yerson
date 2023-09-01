function filtrarNumeros(array){
    return array >= 6;
}
const array = [1,3,9,6,8,6,7]

const filtrar = array.filter(filtrarNumeros);

console.log(array)
console.log(filtrar)