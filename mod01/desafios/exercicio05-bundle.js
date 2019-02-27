"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 5.1 REST
var arr = [1, 2, 3, 4, 5, 6];

var getX = function getX(a) {
  return a;
};

var x = getX(1, 2, 3, 4, 5, 6);
console.log(x); // 1

var getY = function getY(a) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return params;
};

var y = getY(1, 2, 3, 4, 5, 6);
console.log(y); // [2, 3, 4, 5, 6]

var soma = function soma() {
  for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
};

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2)); // 5.2 SPREAD

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Gabriel'
});

var usuario3 = _objectSpread({}, usuario, {
  endereco: {
    cidade: 'Lontras',
    uf: usuario.endereco.uf,
    pais: usuario.endereco.pais
  }
});

console.log(usuario);
console.log(usuario2);
console.log(usuario3);
