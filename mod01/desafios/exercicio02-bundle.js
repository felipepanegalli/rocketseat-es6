"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
/** MAP */

var arrMap = usuarios.map(function (item) {
  return item.idade;
});
console.log('MAP: ', arrMap);
/** FILTER */

var arrFilter = usuarios.filter(function (item) {
  return item.empresa === 'Rocketseat' && item.idade > 18;
});
console.log('FILTER: ', arrFilter);
/** FIND */

var arrFind = usuarios.find(function (item) {
  return item.empresa === 'Google';
});
console.log('FIND: ', arrFind);
/** MAP and FILTER */

var arrMapAndFilter = usuarios.map(function (item) {
  return {
    nome: item.nome,
    idade: item.idade * 2,
    empresa: item.empresa
  };
}).filter(function (item) {
  return item.idade < 50;
});
console.log('MAP and FILTER: ', arrMapAndFilter);
