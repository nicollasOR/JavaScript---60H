const firstName = 'Thiago';
const lastName =    'Lima';
function criaEmail()
{
    const email = firstName.toLowerCase + '.' + lastName.toLowerCase + '@gmail.com';
    
    return email;
    /* return firstName.toLowerCase + '.' + lastName.toLowerCase + '@gmail.com'; 
    Ou
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com` */ 
}


const res = soma() ;
console.log(res);


const emailThiago = criaEmail()
console.log(emailThiago);

function criaEmailL(firstName, lastName, domain = 'senai.com')
{
    // const palavra = 'palavra'

    // for(let i = 0; i < palavra.length; i++)
    // {
    //  console.log(palavra[i]);
    // }
    const charEspeciais = {
        ã: 'a',
        á: 'a'

    } // Para transformar acentos em palavras normais

    for(const char in charEspeciais)
    {
        // firstName = firstName.replace(char, charEspeciais[char]);
        // lastName = lastName.replace(char, charEspeciais[char]);

        firstName = firstName.replace(char, charEspeciais.char);
        lastName = lastName.replace(char, charEspeciais.char);
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