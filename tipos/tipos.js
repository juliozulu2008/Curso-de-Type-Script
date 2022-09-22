// String
// Lembrando que o compilador noa impede o codigo de executar apenas vai ficar errado
var nome = "Julio";
console.log(nome);
// depois de inferido um tipo para a variavel no type script nao tem como mudar.
// numbers
var idade = 27;
// tudo para js é number no caso ele nao difere inteiros de floats ou decimal
idade = 27.5;
console.log(idade);
//boolean
var possuiHobbies = false;
console.log(possuiHobbies);
// no Type Script se eu declarar a variavel e nao utilizar ela fica com o tipo flexivel
// tipos explicitos
var minhaIdade; // flexsivel
minhaIdade = 27;
console.log(typeof minhaIdade); // neste caso o compilador ira dezer que é Number
minhaIdade = "Minha idade é  27 anos";
console.log(typeof minhaIdade); // neste caso ele vai dizer que é String pois o valor fica como explicito
//array
var atividades = ["Animes", "Jogar Futebol", "Corinthians"];
console.log(atividades[0]);
console.log(typeof atividades);
atividades = [100]; // isto nao vai ser possivel pois ele tambem tipa os arrays
//tuplas
var endereco = ["av principal", 99, ""];
console.log(endereco);
// pode se colocar quantos tipos sring number quiser, porem tem que ser declarado
endereco = ["Rua Jose mancini", 412, "jardim explanada"];
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Preto"] = 3] = "Preto"; //3 Etc é igual ao C#
})(Cor || (Cor = {}));
var minhaCor = Cor.Preto;
console.log(minhaCor);
console.log(typeof minhaCor);
//any
var carro = "Fusion";
console.log(carro);
carro = {
    marca: "Ford",
    ano: 2006
};
