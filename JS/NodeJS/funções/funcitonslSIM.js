
 Array listaAlunos
    {nome: 'Todd', sobrenome:'Jr'},
    {nome: 'Dick', sobrenome: 'grayson'}
 ]


    const charEspeciais = {
        ã: 'a',
        á: 'a'

    } // Para transformar acentos em palavras normais

    const listaEmail = listaAlunos.map((aluno) =>{
    for(const char in charEspeciais)
    {
      aluno.nome = aluno.nome.replace(char, charEspeciais[char]);
      aluno.sobrenome = aluno.sobrenome.replace(char, charEspeciais[char]);
      replace(char, charEspeciais[char]);
    }
    return `${firstName.toLowerCase()} . ${lastName.toLowerCase()}@senai.com`;
   })
 console.log(listaEmail);
