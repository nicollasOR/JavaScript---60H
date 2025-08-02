function numerosPares(array) {
    return array.filter(numero => numero % 2 === 0)
}
const listaArgumentos = [
    1,2,3,4,4,5,6,7,8,9, 10
    ,11,12,13,14,15,16,17,18,19, 20
]

const listaPares = numerosPares(listaArgumentos);
console.log(listaPares);

