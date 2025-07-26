// if = se (ou seja, se for verdadeira, ela será executada, sendo simples ou não)
// else = mas (executará algo se o if for falso (será executado depois do else if))
// else if = mas e se?  (esse será aquele que só existira depois do if, mas não cria um else, apenas uma condição fora dela.)



//IF

const codigoProduto = '#324';
const quantidadeProduto = 500;
const precoProduto = 3.5;
if(codigoProduto == '#324')
{
    if(quantidadeProduto < 1000)
{
    console.log('quantidade acima do limite');
    console.log(`Comprar ${1000 - quantidadeProduto} unidades de ${codigoProduto}.`);
}

else if(quantidadeProduto == 1000 )
{
  console.log('quantidade exatamento igual ao do limite');
    console.log(`Comprar ${1000} unidades de ${codigoProduto}? Ou não?`);
}

else
{
     console.log('quantidade dentro do limite');
    console.log(`vender ${quantidadeProduto} unidades de ${codigoProduto}.`);
}
}
else 
{
    console.log(`fudeu patrão`)
}

