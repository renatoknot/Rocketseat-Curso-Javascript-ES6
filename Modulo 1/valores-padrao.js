function soma(a, b) {
    return a + b;
}

soma(1);//ambos retorna NaN, pois so foi passado um parametro
soma();

function soma2(a =3, b=6){
    return a +b;
}

soma2(1);//retorna 7 pois o valor default do segundo parametro é 6
soma2(); //retorna 9 pois o o valor padrao de ambos é 3 e 6

//EM ARROW FUNCTION

const soma3 = (a=3, b=6) =>  a+b;

console.log(soma3(2))