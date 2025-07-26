// //Operadores Matemática

// /*
// Soma -> +
// Substração -> -
// Multiplicação -> *
// Divisão -> /
// Mod -> %
// Exponenciação -> **
// */

// var primeiroValor = 10;

// let segundoValor = 20;

// const terceiroValor = 30.5;

// console.log(primeiroValor + segundoValor);

// console.log(primeiroValor - segundoValor);

// console.log(primeiroValor * segundoValor);

// console.log(primeiroValor / segundoValor);

// console.log(terceiroValor ** primeiroValor);

//     console.log(Math.sqrt(16));


//     const valorTerreno = primeiroValor + segundoValor;
//     console.log(`àrea do terraino: ${segundoValor*primeiroValor} m²`);
//     console.log(`valor do terreno: ${segundoValor*terceiroValor} R$`);
//     console.log(`Valor total: ${terceiroValor.toFixed(2)}`);

// const pi = Math.pi;

// const raio = 2;

// const diametro = 2 * raio;
// const perimetro = 2 * raio * pi;
// const area = pi * raio ** 2;


// if(raio == 2)
// {
//     console.log(`Diametro:  ${diametro} m`);
//     console.log(`Perímetro: ${perimetro} m`);
//     console.log(`Area: ${area} m²`);
// }

// const user = 'adm';
// const pw = 'senha12'

// const liberaAcesso = user === 'adm' && pw === 'senha12';
// console.log(liberaAcesso);
// alert('bom dia');


// console.log(10 === 'a' || 10 % 2 ===0 || 10 <-10);

// const notaFinal = 10;
// const frequencia = .5;
// const alunoReprovado = notaFinal < 5 || frequencia < 0.7;
// console.log(alunoReprovado);
// alert('VAMOOOOOOOOOOOOO');


// exemplo !
// const alunoAprovado = notaFinal > 5 || frequencia > 0.7;
// console.log(!(10 === 'não é 10'));
// console.log(alunoAprovado);



const a = false;
const b = false;
const c = false; // true

const ligaBomba = !(a && b && c) || (!a && !b && !c); // (!a && !b && !c) || (a && !b &&  !c) || (a && b && !c)

console.log(ligaBomba);

