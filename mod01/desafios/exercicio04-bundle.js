"use strict";

// 4.1
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    cidade = empresa.endereco.cidade,
    estado = empresa.endereco.estado;
console.log(nome); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC
// 4.2

var usuario = {
  nomeU: 'Diego',
  idade: 23
};

function mostraInfo(_ref) {
  var nomeU = _ref.nomeU,
      idade = _ref.idade;
  console.log("".concat(nomeU, " tem ").concat(idade, " anos."));
}

mostraInfo(usuario);
