// comece a criar a sua função add na linha abaixo
function add(a, b) {
    return a + b;
}


// descomente a linha seguinte para testar sua função
console.log(add(2,6));


// comece a criar a sua função multiply na linha abaixo
function multiply(c, d) {
    let resultadoMultiplicacao = 0;
    for (let i = 1; i <= d; i++) {
        resultadoMultiplicacao = add(resultadoMultiplicacao, c);
    }
    return resultadoMultiplicacao;
}

// descomente a linha seguinte para testar sua função
console.log(multiply(4,6));


// comece a criar a sua função power na linha abaixo
function power(x, n) {
    let resultadoPower= 0;
    for(let i = 1; i<n; i++){
        if(i == 1){
        resultadoPower= multiply(x,x);
        }
        else{
            resultadoPower = multiply(resultadoPower,x);
        }

    }
    return resultadoPower;
}

// descomente a linha seguinte para testar sua função
console.log(power(2,8));


// comece a criar a sua função factorial na linha abaixo
function factorial(y){
    resultadoFactorial = 0;
    for (let i = 1; i<y; i++){
        if(i == 1){
        resultadoFactorial = multiply(i,(i+1));
        }
        else{
            resultadoFactorial = multiply(resultadoFactorial,(i+1));
        }
    }
    return resultadoFactorial;
}


// descomente a linha seguinte para testar sua função
console.log(factorial(5));


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
