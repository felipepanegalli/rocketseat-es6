// REST
const usuario = {
    nome: 'Felipe',
    idade: 28,
    empresa: 'Panegalli Software'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

/** usando o rest com funções */
function soma(a, b, ...params) {
    return params;
}
console.log(soma(1, 2, 3, 4, 4, 5, 7));

/**----------------------------------------*/
/** SPREAD
 * usar para unir 2 objetos
 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arrUnion = [...arr1, ...arr2];
console.log(arrUnion);
