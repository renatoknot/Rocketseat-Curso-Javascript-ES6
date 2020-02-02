const a = 1;

// a = 3; // erro de atribuição a uma variavel constante

const usuario = {nome : "Renato"};

usuario.nome = "Cleiton"; //Mutação, altera valores dentro de uma constante
console.log(usuario);

function teste(x) {
    let  y = 2;


    if (x > 5) {
        let y = 4; 
        console.log(x, y);
    } 
}



teste(15);