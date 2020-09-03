"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//usando a notação literal
var obj1 = {};
console.log(obj1); //object em JS

console.log(typeof Object === "undefined" ? "undefined" : _typeof(Object), _typeof(new Object()));
var obj2 = new Object();
console.log(obj2); //funções contrutoras

function Produto(nome, preco, desc) {
  this.nome;

  this.getPrecoComDesconto = function () {
    return preco * (1 - desc);
  };
}

var p1 = new Produto('Caneta', 7.99, 0.15);
var p2 = new Produto('NoteBook', 2999.99, 0.25); //Função Factory

function CriarFuncionario(nome, salarioBase, faltas) {
  return {
    nome: nome,
    salarioBase: salarioBase,
    faltas: faltas,
    getSalario: function getSalario() {
      return salarioBase / 30 * (30 - faltas);
    }
  };
}

var f1 = CriarFuncionario('João', 7980, 4);
var f2 = CriarFuncionario('Maria', 11400, 7);
console.log(f1.getSalario(), f2.getSalario()); //object.create

var filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha); //Um função famosa que retorna objeto..

var fromJSON = JSON.parse('{"info":"Sou um JASON"}');
console.log(fromJSON.info);