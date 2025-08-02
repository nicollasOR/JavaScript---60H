// const firstName = 'Thiago';
// const lastName =    'Lima';

function criaEmailL(firstName, lastName, domain = 'senai.com')
{

    const charEspeciais = {
        ã: 'a',
        á: 'a'

    } // Para transformar acentos em palavras normais

    for(const char in charEspeciais)
    {
        firstName = firstName.replace(char, charEspeciais[char]);
        lastName = lastName.replace(char, charEspeciais[char]);

        console.log();
    } // Para transformar acentos em palavras normais
    return `${firstName.toLowerCase()} . ${lastName.toLowerCase()}@${domain}`;

}

console.log(criaEmailL('Thiago', 'Lima', 'senai.com'));
console.log(criaEmailL('Maria', 'Silva', 'senac.com'));
console.log(criaEmailL('João', 'Almeida', 'sesi.com'));

let nota;
let nome;

const alunos = 
[
 {nome: 'João', nota: 10},
 {nome: 'Julia', nota: 10}
]


for(aluno of alunos)
{
    console.log(aluno.nota);
}