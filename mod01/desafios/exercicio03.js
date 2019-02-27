// 3.1
const arr = [1, 2, 3, 4, 5];
console.log(arr.map((item) => item + 10));

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
    return usuario.idade;
}
console.log(mostraIdade(usuario));

// Dica: Utilize uma constante pra function
const nome = 'Diego';
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);
