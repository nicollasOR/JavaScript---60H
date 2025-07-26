var altura = parseFloat(prompt("Insira sua altura").replace(",", "."));
var peso = parseFloat(prompt("Insira seu peso").replace(",", "."));
var imc = peso / (altura * altura);

if (imc < 18.5) {
  console=("Você está abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
  console=("Parabéns, peso ideal!");
} else if (imc >= 25.0 && imc <= 29.9) {
  console=("Você está com sobrepeso");
} else {
  console=("Obesidade grau 1");
}

alert("Seu IMC é: " + imc.toFixed(2)+"\n"+console);
