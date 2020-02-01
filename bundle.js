"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// class List {
//     constructor() {
//         this.data = [];
//     }
//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
// ;    }
// }
// class Todolist extends List{
//     constructor() {
//         super();
//         this.usuario = 'Renato';
//     }
//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }
// var MinhaLista = new Todolist();
// document.getElementById('novotodo').onclick = function () {
//     MinhaLista.add('Novo todo');
// }
// MinhaLista.mostraUsuario();
var TodoList =
/*#__PURE__*/
function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.todos = [];
  }

  _createClass(TodoList, null, [{
    key: "addTodo",
    value: function addTodo() {
      // erro: pois o metodo estatico nao enxerga o restante da classe (atributos, metodos, etc)
      this.todos.push('Novo todo');
      console.log(this.todos);
    }
  }]);

  return TodoList;
}();

TodoList.addTodo();
TodoList.addTodo();
TodoList.addTodo();
TodoList.addTodo();
