/*aula de type script da DIO - com João Santos
Tipos: 
boolean
string
listas
enum
any
void
function
unknown
never

*/
console.log('Estou vinculado ao index.html');
let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function adicionarNumero(numero1: number, numero2: number, devePrintar: boolean, frase: string) {
    let resultado = numero1 + numero2
    if (devePrintar) {
        console.log(frase + resultado)
    }
    return resultado
}

let devePrintar = true
let frase = "O valor é: "

if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase));

        }
    })
}

//objetos

const pessoa = {
    nome: 'mariana',
    idade: 28,
    profissao: 'dev'
}

//pessoa.idade = '29';

const andre: { nome: string, idade: number, profissao: string } = {
    nome: 'andre',
    idade: 25,
    profissao: 'pintor'
}

const paula: { nome: string, idade: number, profissao: string } = {
    nome: 'Paula',
    idade: 25,
    profissao: 'DEV'
}

enum profissao {
    Professor,
    Atriz,
    DEV,
    Jogador
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'vanessa',
    idade: 23,
    profissao: profissao.DEV
}

const maria: Pessoa = {
    nome: 'maria',
    idade: 28,
    profissao: profissao.Atriz
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 25,
    profissao: profissao.Jogador,
    materias: ['matematica', 'programacao']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 30,
    materias: ['matematica', 'programacao']
}

function listar(lista: string[]) {
    for (const i of lista) {
        console.log('- ', i)
    }
}

listar(monica.materias)

//variavel any
//tipo que pode ser qualquer tipo

let valorAny: any;
valorAny = 3;
valorAny = 'ola';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;
let valorString2: string = 'testao';
valorString2 = valorAny;

function somarStrings(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarStrings(valorString, valorString2)

somarStrings('olá', ' , como vai')

//variáveis personalizadas

type input = number | string;

function somaValores(input1: input, input2: input) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString()
    } else {
        return input1 + input2
    }
}

console.log(somaValores(1, 5));
console.log(somaValores('olá,', ' tudo bem?'));
console.log(somaValores('1', 5));


//Definindo tipo de retorno de uma função
function somaValoresN(n1: number, n2: number): number {
    // return n1+n2.toString();
    return n1 + n2
}

//fabao oreia criou sua primeira função
function print(x: any) {
    return console.log(x)
}
console.log(somaValores(1, 3))

print(somaValores(1, 3))

//function void
function printaValoresNumericos(n1: number, n2: number): void {
    console.log(n1 + n2)
}

//callback
function somaValoresNumericosETratar(n1: number, n2: number, callback: (n: number) => number): number {
    let resultado = n1 + n2
    return callback(resultado)
}

function nQuadrado(n: number) {
    return n * n
}

function dividirProEleMesmo(n: number) {
    return n / n
}

print(somaValoresNumericosETratar(1, 3, nQuadrado))
print(somaValoresNumericosETratar(1, 3, dividirProEleMesmo))


//any de volta com unknown
//unknown precisa de uma verificação para funcionar
let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest = 5;
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
/*unknownValor = true;
unknownValor = 'vai sim'

let stringTest2: string = 'agora vai';
//stringTest2 = unknownValor;

if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}

//funcao joga erro
//tipo de retorno never - tipo de retorno que nunca é finalizado
//throw para a parar a execussão
//trown pode ser utilizado no loop infinito
function jogaErro(erro:string, codigo: number):never {
    throw {error: erro, code: codigo}    
}

//jogaErro('deu erro', 500)*/

//desafios

//desafio1
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
interface Employee {
    code: number
    name: string
}

const funcionario1 = {} as Employee;
funcionario1.code = 10
funcionario1.name = "Jhon"

print(funcionario1)


//Desafio 2
// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

interface Pessoas {
    cod: string,
    nome: string,
    idade: number,
    profissao: lProfissao
}

enum lProfissao {
    'Atriz',
    'Padeiro'
}

const lPessoas: Array<Pessoas> = [
    { cod: 'pessoa1', nome: 'Maria', idade: 29, profissao: lProfissao.Atriz },
    { cod: 'pessoa2', nome: 'Roberto', idade: 19, profissao: lProfissao.Padeiro },
    { cod: 'pessoa3', nome: 'Laura', idade: 32, profissao: lProfissao.Atriz },
    { cod: 'pessoa4', nome: 'Carlos', idade: 19, profissao: lProfissao.Padeiro }
]

print(lPessoas)

//Desafio 3

// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let somatot = 0

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        somatot += soma
        campoSaldo.innerHTML = somatot.toString()
        limparCampoSoma();
    }
}

function limparCampoSoma() {
    soma.value = ""
}

function limparSaldo() {
    if (campoSaldo) {
        somatot = 0;
        campoSaldo.innerHTML = somatot.toString();

    }
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */

//DESAFIO 4

// Um desenvolvedor tentou criar um projeto que consome a base de dados de filme do TMDB para criar um organizador de filmes, mas desistiu 
// pois considerou o seu código inviável. Você consegue usar typescript para organizar esse código e a partir daí aprimorar o que foi feito?

// A ideia dessa atividade é criar um aplicativo que: 
//    - Busca filmes
//    - Apresenta uma lista com os resultados pesquisados
//    - Permite a criação de listas de filmes e a posterior adição de filmes nela

// Todas as requisições necessárias para as atividades acima já estão prontas, mas a implementação delas ficou pela metade (não vou dar tudo de graça).
// Atenção para o listener do botão login-button que devolve o sessionID do usuário
// É necessário fazer um cadastro no https://www.themoviedb.org/ e seguir a documentação do site para entender como gera uma API key https://developers.themoviedb.org/3/getting-started/introduction

var apiKey = '3f301be7381a03ad8d352314dcc3ec1d';
//let apiKey;
let requestToken: number;
let username: string;
let password: number;
let sessionId: string;
let listId = '7101979';

let loginButton = document.getElementById('login-button')as HTMLElement;
let searchButton = document.getElementById('search-button')as HTMLElement;
let searchContainer = document.getElementById('search-container')as HTMLElement;

loginButton.addEventListener('click', async () => {
  await criarRequestToken();
  await logar();
  await criarSessao();
})

searchButton.addEventListener('click', async () => {

    let lista = document.getElementById("lista");
  if (lista) {
    lista.outerHTML = "";
  }
  let query = document.getElementById('search').value;
  let listaDeFilmes = await procurarFilme(query);
  let ul = document.createElement('ul');
  ul.id = "lista"
  for (const item of listaDeFilmes.results) {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item.original_title))
    ul.appendChild(li)
  }
  console.log(listaDeFilmes);
  searchContainer.appendChild(ul);
})

function preencherSenha() {
  password = document.getElementById('senha').value;
  validateLoginButton();
}

function preencherLogin() {
  username =  document.getElementById('login').value;
  validateLoginButton();
}

function preencherApi() {
  apiKey = document.getElementById('api-key').value;
  validateLoginButton();
}

function validateLoginButton() {
  if (password && username && apiKey) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
}

class HttpClient {
  static async get({url, method, body = null}) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open(method, url, true);

      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          resolve(JSON.parse(request.responseText));
        } else {
          reject({
            status: request.status,
            statusText: request.statusText
          })
        }
      }
      request.onerror = () => {
        reject({
          status: request.status,
          statusText: request.statusText
        })
      }

      if (body) {
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        body = JSON.stringify(body);
      }
      request.send(body);
    })
  }
}

async function procurarFilme(query) {
  query = encodeURI(query)
  console.log(query)
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
    method: "GET"
  })
  return result
}

async function adicionarFilme(filmeId) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
    method: "GET"
  })
  console.log(result);
}

async function criarRequestToken () {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
    method: "GET"
  })
  requestToken = result.request_token
}

async function logar() {
  await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
    method: "POST",
    body: {
      username: `${username}`,
      password: `${password}`,
      request_token: `${requestToken}`
    }
  })
}

async function criarSessao() {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
    method: "GET"
  })
  sessionId = result.session_id;
}

async function criarLista(nomeDaLista, descricao) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      name: nomeDaLista,
      description: descricao,
      language: "pt-br"
    }
  })
  console.log(result);
}

async function adicionarFilmeNaLista(filmeId:number, listaId:[]) {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
    method: "POST",
    body: {
      media_id: filmeId
    }
  })
  console.log(result);
}

async function pegarLista() {
  let result = await HttpClient.get({
    url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
    method: "GET"
  })
  console.log(result);
}

{/* <div style="display: flex;">
  <div style="display: flex; width: 300px; height: 100px; justify-content: space-between; flex-direction: column;">
      <input id="login" placeholder="Login" onchange="preencherLogin(event)">
      <input id="senha" placeholder="Senha" type="password" onchange="preencherSenha(event)">
      <input id="api-key" placeholder="Api Key" onchange="preencherApi()">
      <button id="login-button" disabled>Login</button>
  </div>
  <div id="search-container" style="margin-left: 20px">
      <input id="search" placeholder="Escreva...">
      <button id="search-button">Pesquisar Filme</button>
  </div>
</div>*/}
