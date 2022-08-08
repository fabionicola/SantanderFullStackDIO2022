
import { mostraIdade, mostraCidade, mostraHobby, limpar, juntar } from "./funcoes.js";

mostraIdade('Fabio', 34);
mostraCidade('Fabio', 'Ibitinga');
mostraHobby('Fabio', 'Airsoft');

const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const cidade = document.querySelector('#cidade');
const hobby = document.querySelector('#hobby');
const rst = document.querySelector("#campo-rst");
const btnJuntar = document.querySelector("#btnJuntar");
const btnLimpar = document.querySelector("#btnLimpar");

btnJuntar.addEventListener("click", function () {
	if (nome.value === "" &&
		idade.value === "" &&
		cidade.value === "" &&
		hobby.value === ""
		) {
			alert("Preencha os campos")
	} else {
		juntar(nome.value, idade.value, cidade.value, hobby.value, rst)
	}
});

btnLimpar.addEventListener("click", function () {
	limpar(nome, idade, cidade, hobby, rst)
});