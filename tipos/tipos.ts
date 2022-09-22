// String
// Lembrando que o compilador noa impede o codigo de executar apenas vai ficar errado
let nome: string = "Julio"
console.log(nome)
// depois de inferido um tipo para a variavel no type script nao tem como mudar.

// numbers
let idade: number = 27
// tudo para js é number no caso ele nao difere inteiros de floats ou decimal
idade = 27.5
console.log(idade)

//boolean

let possuiHobbies: boolean = false

console.log(possuiHobbies)

// no Type Script se eu declarar a variavel e nao utilizar ela fica com o tipo flexivel
// tipos explicitos
let minhaIdade: any // flexsivel
minhaIdade = 27
console.log(typeof minhaIdade) // neste caso o compilador ira dezer que é Number
minhaIdade = "Minha idade é  27 anos"
console.log(typeof minhaIdade)// neste caso ele vai dizer que é String pois o valor fica como explicito

//array

let atividades: any[] = ["Animes", "Jogar Futebol", "Corinthians"]
console.log(atividades[0])
console.log(typeof atividades)

atividades = [100] // isto nao vai ser possivel pois ele tambem tipa os arrays

//tuplas
let endereco: [string, number, string] = ["av principal", 99, ""]
console.log(endereco)
// pode se colocar quantos tipos sring number quiser, porem tem que ser declarado
endereco = ["Rua Jose mancini", 412, "jardim explanada"]

// enums
enum Cor {
    Cinza, //0
    Verde,//1
    Azul,//2
    Preto//3 Etc é igual ao C#
}

let minhaCor: Cor = Cor.Preto

console.log(minhaCor)
console.log(typeof minhaCor)


//any
let carro: any = "Fusion"
console.log(carro)
carro = {
    marca: "Ford",
    ano: 2006
}
console.log(carro)// o tipo any deixa o js como ele é as variaveis inferindo tipos automaticamente

//funçoes

function meunome(){
    return nome;
}
console.log(meunome()); // funciona normar igaula oa Js

function meuNomeTs(): string{
    return nome;
}
console.log(meuNomeTs);// neste caso o retorno sera string idependente dos valores informados

//tambem posso craiar uma funçao que nao retorna nada VOID

function digaOi(): void{
    console.log("Oi");
}

digaOi()

// tambem uma funçao que retornar numeros e strings

function somar(a: number, b: number): number{
    return a + b;
}

console.log(somar(4,9))

//Tipo funçao
let multiplicacao
multiplicacao = digaOi
multiplicacao();

let divisao: (a: number, b: number) => number

divisao = somar
console.log(divisao(90,2))

// objetos
let usuario: { nome: string , idade: number } = { 
    nome: 'julio',
    idade: 27
}

console.log(usuario)

usuario = {
    idade: 25,
    nome: "Kelly"
}

console.log(usuario)




// alias
type Funcionario = {
    nomesSupervisores: string[],
    baterpnto: (horas: number)=> string
}



let funcionario: Funcionario = {
    nomesSupervisores: ["Julio", "Kelly", "laura", "Ravi"],
    baterpnto(horario: number): string{
        if(horario <= 8) {
            return "Ponto Normal"
        } else {
            return "Fora do horario de ponto"
        }
    }
}


console.log(funcionario.nomesSupervisores)
console.log(funcionario.baterpnto(8))

// union types

let nota: number | string  = 10 // neste caso os valores de atribuiçao serao como os que forem marcadaos
console.log(`minha nota é ${nota}`)

// never

function falha(msg: string): never {
    trow new Error(msg);
}

const produto = {
    nome: 'sabao',
    preco: 4,
    validaProduto(){
        if(!this.nome|| this.nome.trim().length == 0){
            falha("Precisa ter um nome!");
        }
        if(this.preco <= 0){
            falha("Preço Invalido!");
        }
    }
}

produto.validaProduto();

// null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: ' Fulano',
    tel1: '987654321',
    tel2: null
}

console.log(contato1)
console.log(contato1.tel1)
console.log(contato1.tel2)

// Desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)