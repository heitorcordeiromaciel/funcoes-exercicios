const soma = (num1, num2) => {
    return num1 + num2;
};

console.log(soma(2, 5));

const maior = (num1, num2) => {
    return (num1 > num2);
};

console.log(maior(3, 2));

const par = (num) => {
    return (num % 2 === 0);
};

console.log(par(2));

const convertSalario = (salario) => {
    return (salario - (salario * 0.1));
};

console.log(convertSalario(5612));