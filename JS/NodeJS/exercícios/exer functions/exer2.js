let matematicaNota = 10;
let portuguêsNota = 5;
let inglêsNota = 7;
let históriaNota = 5;

function media() {
    calcularMedia = (matematicaNota + portuguêsNota + inglêsNota + históriaNota) / 4;
    meida = (notas.reduce((previous, current) => previous + current), 0) /4
   console.log(calcularMedia);
   if(calcularMedia >= 7)
   {
    console.log('parabéns, você passou');

   }
   else{
        console.log('faz o L');

   }
}
media();

// /*  
// Para pc



let MNota = parseFloat(prompt('coloque sua nota de matemátia'));
let INota = parseFloat(prompt('coloque sua nota de Inglês'));
let PNota = parseFloat(prompt('coloque sua nota de português'));
let HNota = parseFloat(prompt('coloque sua nota de história'));


function calcularMedia (MNota, INota, PNota, HNota)
{
    const media = (MNota + PNota + INota + HNota) / 4;
    return `A media final do aluno é ${media.toFixed(1)}.`;

}

console.log(calcularMedia(MNota, INota, PNota, HNota));
if(media >7)
    alert('o aluno passou');

else
    alert(' o aluno reprovou');



// */