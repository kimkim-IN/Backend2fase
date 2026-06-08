const animal = {
    nome: "Sakura", //string
    especie: "Cachorro",
    idade: 9, //number
    tutor: false,
    vacinada: true
};

//console.log(animal);
console.log(animal.nome);
console.log(animal.tutor);

animal.idade = 9;
//console.log(animal);

console.log(`${animal.nome} é um ${animal.especie} com ${animal.idade} anos de idade e possui sua vacina em dia (${animal.vacinada}).`);