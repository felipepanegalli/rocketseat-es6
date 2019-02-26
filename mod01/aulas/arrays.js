/** Uso do map no array
 * A função MAP é usado para percorrer cada item no array gerando um index e tratando separadamente cada item
 * conforme exemplo abaixo
 */

const arr = [1, 2, 3, 5, 7, 10];

const newArray = arr.map((item, index) => {
    return 'Item: ' + item + ' | Index: ' + index;
});
console.log('Função map: ', newArray);

/** Uso do Reduce
 * é uma função para reduzir em um unico numero todo o array criado como por exempo a soma de todos os itens
 */
const sum = arr.reduce((total, next) => {
    return total + next;
});
console.log('Função Reduce: ', sum);

/** Uso do Filter
 * utilizado para filtrar itens dentro de um array como por exemplo só os numeros pares
 */
const isPar = arr.filter((item) => {
    return item % 2 === 0;
});
console.log('Função Filter: ', isPar);

/** Uso do find
 * usado para pesquisar algo dentro de um array
 */
const pesquisar = arr.find((item) => {
    return item === 3;
});
console.log('Função Find: ', pesquisar);
