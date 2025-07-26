const frutas = ['laranja', 'melancia', 'uva', 'abacaxi', 'banana']
const ultimaFruta = frutas.pop() // remove o ultimo item e retorn
frutas.push('morango'); // adicionando um item ao array

console.log(frutas);
frutas.splice(0, 1, 'manga');
console.log(frutas);
const primeiraFruta = frutas.shift();
console.log(frutas);
console.log(primeiraFruta);
frutas.unshift('caju');
console.log(frutas);
console.log(frutas.sort());
console.log(frutas.find(fruta => fruta[0]=== 'a')); // filtrando até achaar a fruta com a letra sendo A
//retorna um intervalo de valores de uma lista

console.log(frutas.slice(1, 5));

console.log(frutas.forEach(fruta => console.log(fruta.replace('a', "@"))));
// imprime uma função a cada elemento da lista  ou
/*
frutas.forEach(fruta >=
{
for(letra of fruta)
{
if(letra === 'a')
{
letra = '@';
}
}
console.log(fruta);
frutas.forEach(fruta => console.log(fruta.replace('a', "@")));
}
*/
