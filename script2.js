const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);
//ASSIm ira apenas colocar o set dentro do array
    //return mySet;

    return [...mySet]; //elemnto sprech
    //para criar um novo array
}

console.log(valoresUnicos(meuArray));