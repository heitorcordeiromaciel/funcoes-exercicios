const adição = (num1, num2) => {
    return num1 + num2;
};

const subtração = (num1, num2) => {
    return num1 - num2;
};

const multiplicação = (num1, num2) => {
    return num1 * num2;
};

const divisão = (num1, num2) => {
    return num1 / num2;
};

const num1 = parseInt((prompt('insira um numero')));
const num2 = parseInt((prompt('insira outro numero')));

const resultAdição = adição(num1, num2);

const resultSubtração = subtração(num1, num2);

const resultMultiplicação = multiplicação(num1, num2);

const resultDivisão = divisão(num1, num2);

console.log(resultAdição, resultSubtração, resultMultiplicação, resultDivisão)
