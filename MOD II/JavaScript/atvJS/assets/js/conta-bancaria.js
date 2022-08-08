class contaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return console.log('Saque negado; Saldo insuficiente!');
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'Corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Poupanca';
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Universitária';
    }

    sacar(valor) {
        if (valor > 500) {
            return console.log('Operação negada. Valor não pode ser maior que 500');
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}

const minhaConta = new contaCorrente(1, 234, true)
console.log(minhaConta)
console.log(minhaConta._saldo)
minhaConta.depositar(1000)
console.log(minhaConta._saldo)
minhaConta.sacar(500)
console.log(minhaConta._saldo)
minhaConta.sacar(600)

const contaPoup = new contaPoupanca(1, 22)
console.log(contaPoup)
const contaUni = new contaUniversitaria(1,22)
console.log(contaUni)
contaUni.depositar(1000)
console.log(contaUni._saldo)
contaUni.sacar(2000)

const contaTeste = new contaCorrente(234, 556, true)

const agencia = document.querySelector('#agencia');
const numero = document.querySelector('#numero');
const valor = document.querySelector('#valor');
const tipo = document.querySelector('#tipo');
const rst = document.querySelector("#campo-rst");
const btnCriar = document.querySelector("#btnCriar");
const btnLimpar = document.querySelector("#btnLimpar");
const btnDepositar = document.querySelector("#btnDepositar");
const btnSacar = document.querySelector("#btnSacar");
var conta = "";


valor.value = 0;


function atualizar() {
    
    rst.innerHTML = `Sua Conta ${conta.tipo}, Agencia ${conta.agencia}, Nº ${conta.numero} tem saldo = ${conta._saldo}`;
}

btnCriar.addEventListener("click", function () {
    if (agencia.value === "" && numero.value === "") {
        alert("Preencha os campos")
    } else {
        if (tipo.value === "Corrente") {
        conta = new contaCorrente(agencia.value, numero.value, true);
        }if (tipo.value === 'Poupança') {
            conta = new contaPoupanca(agencia.value, numero.value);
        }if (tipo.value === 'Universitaria') {
            conta = new contaUniversitaria(agencia.value, numero.value);
        }
        atualizar();   
    }    
});

btnLimpar.addEventListener("click", function () {
	agencia.value = "";
        numero.value = "";
        tipo.value = "Corrente"
        valor.value = 0
        rst.innerHTML = " "
});

btnDepositar.addEventListener("click", function () {
	conta.depositar(Number(valor.value));
    console.log(conta._saldo)
    atualizar()
});
console.log(conta._saldo)
btnSacar.addEventListener("click", function () {
    if (valor.value > conta._saldo) {
        alert('Saldo Insuficiente!')
    }else{
	conta.sacar(Number(valor.value));
    atualizar();
}
});

