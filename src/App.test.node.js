// Teste 1
console.log('Teste 1: Funcao soma');
const soma = (a, b) => a + b;
if (soma(2, 3) === 5) {
  console.log('Teste 1 passou - soma(2,3) retornou 5');
} else {
  console.log('Teste 1 falhou');
}

// Teste 2
console.log('\nTeste 2: Funcao validaEmail');
const validaEmail = (email) => email.includes('@') && email.includes('.');
if (validaEmail('teste@exemplo.com') === true) {
  console.log('Teste 2 passou - email valido retornou true');
} else {
  console.log('Teste 2 falhou');
}
if (validaEmail('testeinvalido') === false) {
  console.log('Teste 2 passou - email invalido retornou false');
} else {
  console.log('Teste 2 falhou na segunda verificacao');
}

// Teste 3
console.log('\nTeste 3: Funcao contarItens');
const contarItens = (arr) => arr.length;
if (contarItens([1, 2, 3, 4, 5]) === 5) {
  console.log('Teste 3 passou - array com 5 itens retornou 5');
} else {
  console.log('Teste 3 falhou');
}
if (contarItens([]) === 0) {
  console.log('Teste 3 passou - array vazio retornou 0');
} else {
  console.log('Teste 3 falhou na segunda verificacao');
}

// Teste 4
console.log('\nTeste 4: Funcao dobra');
const dobra = (n) => n * 2;
if (dobra(4) === 8) {
  console.log('Teste 4 passou - dobra(4) retornou 8');
} else {
  console.log('Teste 4 falhou');
}

// Teste 5
console.log('\nTeste 5: Funcao ehPar');
const ehPar = (n) => n % 2 === 0;
if (ehPar(10) === true) {
  console.log('Teste 5 passou - 10 eh par');
} else {
  console.log('Teste 5 falhou');
}
if (ehPar(7) === false) {
  console.log('Teste 5 passou - 7 eh impar');
} else {
  console.log('Teste 5 falhou na segunda verificacao');
}

console.log('\n--- Fim dos testes ---');