Página criada para comtemplar as listas de exercícios de Javascript
do bootcamp do Santander Full Stack na DIO
Lista de Exercícios JavaScript

### Map, Filter e Reduce ###
######
map
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.
Filter
Filtre e retorne todos os números pares de um array.
Reduce
Some todos os números de um array
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
######

### TRATAMENTO DE ERROS ###
######
Atividade: validação de erros por tipo
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
######

### Javascript Assìncrono ###
######
Mostra Gatinhos
Este repositório contém a atividade prática do Curso "Javascript Assíncrono", que faz parte do Basecamp de Javascript que minstrei pela Digital Innovation One.

Atividade: API "catAPI"
Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

Utilize a API https://thatcopy.pw/catapi/rest para fazer as chamadas com o método fetch();
Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!
######

### CONTA BANCARIA ###
######
Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
######

### MODULOS ###
######
Atividade - Trabalhando com modulos
Esta atividade tem como objetivo que você veja no console do seu navegador como os módulos funcionam.

Instale a extensão "Live Server" no seu VSCode;
Crie um arquivo com uma estrutura HTML padrão;
Crie dois arquivos .js ou .mjs, um chamado funcoes e outro chamado main;
No arquivo funcoes:
Crie uma função chamada mostraIdade, que recebe nome e idade e retorna a string: A idade de ${nome} é ${idade};
Siga o mesmo padrão para outras funções como mostraCidade e mostraHobby;
Exporte estas funções.
No arquivo main:
Importe as funções do arquivo funcoes;
Faça a chamada de todas elas;
Utilizando a extensão "Live Server", abra o seu navegador e veja no console que as informações foram logadas corretamente.
######

### Manipulando o DOM ###
Atividade: Light Mode/Dark Mode
Crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
Copie o HTML e o CSS deste repositório
Crie um arquivo chamado scripts.js na sua pasta assets/js
Selecione os elementos: h1, button, footer e body
Se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, volte os estilos para o original
/img/dark-mode-exercicio.gif

