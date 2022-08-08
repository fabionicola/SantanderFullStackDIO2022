//tratamento de erros

function validaArray(arr, num) {

    try {
        if (!arr && !num) throw new ReferenceError("Envie os Parâmetros")
        if (typeof arr !== 'object') throw new TypeError("Array dprecisa ser do tipo Object")
        if (typeof num !== 'number') throw new TypeError("Array dprecisa ser do tipo Number")
        if (arr.length !== num) throw new RangeError("Tamanho Inválido")

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Este erro é um referenceError!')
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError!')
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log('Este erro é um RangeError!')
            console.log(e.message)
        } else {
            console.log("Erro Desconhecido" + e)
        }
    }
}

console.log(validaArray([1, 2, 3], 0));

//Map filter e reduce
//map

console.log('map com this');
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value
    }, thisArg);
}

const nums = [2, 3];

console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));

//map sem this
console.log('map sem this');

function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const nums2 = [2, 4, 6, 8, 10];

console.log(nums2);
console.log(mapSemThis(nums2));

//filter
console.log('filter')

function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}

const pares = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(pares));

//reduxe
console.log('reduce')

function somaNum(arr) {
    return arr.reduce(function (prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current
    })
}

const arr = [1, 2];

console.log(somaNum(arr));

const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    }
]

saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));