const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

/** MAP */
const arrMap = usuarios.map((item) => {
    return item.idade;
});
console.log('MAP: ', arrMap);

/** FILTER */
const arrFilter = usuarios.filter((item) => {
    return item.empresa === 'Rocketseat' && item.idade > 18;
});
console.log('FILTER: ', arrFilter);

/** FIND */
const arrFind = usuarios.find((item) => {
    return item.empresa === 'Google';
});
console.log('FIND: ', arrFind);

/** MAP and FILTER */
const arrMapAndFilter = usuarios
    .map((item) => {
        return {
            nome: item.nome,
            idade: item.idade * 2,
            empresa: item.empresa
        };
    })
    .filter((item) => {
        return item.idade < 50;
    });
console.log('MAP and FILTER: ', arrMapAndFilter);
