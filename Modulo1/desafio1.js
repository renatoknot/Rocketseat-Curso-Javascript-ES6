//EXERCICIO1

class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }
    isAdmin(){
        if(this.admin === true){
            console.log('O usuário é admin.')
        } else {
            console.log('O usuário não é admin.')
        }
    }
}

class Admin extends Usuario {
    constructor(email, senha){
        super(email, senha);
        this.admin = true;
    }
}

const admin = new Admin('renatoslip@hotmail.com', 123);
const usuario =  new Usuario('diego3g@rocketseat.com.br', 12345);
console.log(admin);

console.log(admin.isAdmin());
console.log(usuario.isAdmin());


//EXERCICIO 2

const usuarios = [
    {nome: 'Renato', idade: 31, empresa: 'Rocketseat'},
    {nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    {nome: 'Gabriel', idade: 18, empresa: 'Google'}
]

//2.1 map - array com a idade de todos
const idades = usuarios.map(usuario => usuario.idade);
console.log(idades);

//2.2 filter - variavel que tenha apenas quem trabalhe na rocketseat e mais de 20 anos
const rocket = usuarios.filter(usuario => usuario.empresa ==='Rocketseat' && usuario.idade >20);
console.log(rocket);

//2.3 find - variável que procura por um usuário que trabalhe na empresa Google
const google = usuarios.find(usuario => usuario.empresa ==='Google');
console.log(google);

//2.4 unindo operações - Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no max 50 anos
const usuariosMenor50 = usuarios.map(usuario => ({...usuario, idade: usuario.idade *2})).filter(usuario => usuario.idade <=50);
console.log(usuariosMenor50);