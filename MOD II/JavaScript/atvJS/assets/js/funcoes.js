

export function mostraIdade (nome, idade){
return console.log(`A Idade de ${nome} é ${idade}`);
}

export function mostraCidade (nome, cidade){
return console.log(`A Cidade de ${nome} é ${cidade}`)
}

export function mostraHobby (nome, hobby){
return console.log(`O Hobby de ${nome} é ${hobby}`)
}

export function juntar(nome, idade, cidade, hobby, rst){
    
    const resultado = `O nome é ${nome}, tem ${idade} anos, mora em ${cidade} e gosta de ${hobby}`
    nome = nome.value;
    idade = idade.value;
    cidade = cidade.value;
    hobby = hobby.value;
    rst.innerHTML = resultado;
    console.log(rst)
    return rst

}

export function limpar(nome, idade, cidade, hobby, rst){


    nome.value = "";
    idade.value = "";
    cidade.value = "";
    hobby.value = "";
    rst.innerHTML = "";
 
}

export default{
    mostraIdade,
    mostraCidade,
    mostraHobby,
    juntar,
    limpar
}