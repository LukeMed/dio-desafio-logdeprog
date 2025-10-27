// Desafio do Felipão - Estruturas Condicionais
let nome = "Charmander";
let XP = 9300;

if (XP < 1000) {
  console.log(nome + " está no nível: Ferro");
} else if (XP > 1000 && XP < 2000) {
  console.log(nome + " está no nível: Bronze");
} else if (XP > 2000 && XP < 5000) {
  console.log(nome + " está no nível: Prata");
} else if (XP > 5000 && XP < 7000) {
  console.log(nome + " está no nível: Ouro");
} else if (XP > 7000 && XP < 8000) {
  console.log(nome + " está no nível: Platina");
} else if (XP > 8000 && XP < 9000) {
  console.log(nome + " está no nível: Diamante");
} else if (XP > 9000 && XP < 10000) {
  console.log(nome + " está no nível: Radiante");
} else {
  console.log(nome + " não atingiu a pontuação mínima");
}

// Desafio do Felipão - Switch Case (AINDA NÃO CONSEGUI FAZER RODAR)
/*let nome = "Pikachu";
let XP = 100;

switch (XP) {
  case true < 1000:
    console.log(nome + " está no nível: Ferro");
    break;
  case true > 1000 && XP < 2000:
    console.log(nome + " está no nível: Bronze");
    break;
  case true > 2000 && XP < 5000:
    console.log(nome + " está no nível: Prata");
    break;
  case true > 5000 && XP < 7000:
    console.log(nome + " está no nível: Ouro");
    break;
  case true > 7000 && XP < 8000:
    console.log(nome + " está no nível: Platina");
    break;
  case true > 8000 && XP < 9000:
    console.log(nome + " está no nível: Diamante");
    break;
  case true > 9000 && XP < 10000:
    console.log(nome + " está no nível: Radiante");
    break;
  default:
    console.log("");
    break;
}*/
