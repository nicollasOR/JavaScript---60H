var notaExatas = parseFloat(prompt("Nota de Exatas:"));
var notaHumanas = parseFloat(prompt("Nota de Humanas:"));
var media = (notaExatas + notaHumanas) / 2;
console.log("Média:", media);

if (media === 10) 
    {
    alert("Aluno Aprovado com pressão");
} 
else if (media >= 7)
{
    alert("Aluno Aprovado");
} 
else 
{
    alert("Aluno Reprovado");
}
