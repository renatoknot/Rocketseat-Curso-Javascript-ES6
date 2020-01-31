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

class TodoList {
    constructor() {
        this.todos = [];
    }

    static addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

TodoList.addTodo();