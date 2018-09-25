//programação funcional
function sejaBemVindo(){
	console.log("Seja bem vindo a Formação JavaScript Mestre Jedi!");
}

console.log("Chamando a função seja bem vindo sejaBemVindo():");
sejaBemVindo();

//programação orientada ao objeto POO
var dia = "sabado"
var objProfessor = { // = (atribuição referencia) {} Literal
	nome: "Professor Jedi", // as propriedades
	curso: "Formação JavaScript",
	administrarAula: function(){// metodo uma ação
		console.log("Adminstrando aula")
	},
	cursoSuplementar: {
		idiomas: "sim",
		matematica: "nao",
		data: function () {
			return {
 				dia: dia
			}
		}
	}
};

console.log("objeto Professor");
console.log(objProfessor);

console.log("acessando proprietades do objeto: objProfessor.nome");
console.log(objProfessor.nome);
console.log(objProfessor.curso);


console.log("chamando o método do objeto professor: objProfessor.administrarAula()");
objProfessor.administrarAula();




// com camilo

console.log("Acessando cursos complementar: objProfessor.cursoSuplementar.idiomas");
console.log(objProfessor.cursoSuplementar.idiomas);


console.log(objProfessor.cursoSuplementar.data().dia);

//programação funcional vs orientada a objeto
// funcional
function sejaBemVindoFuncional(){
	console.log("Seja bem vindo a Formação JavaScript Mestre Jedi!");
}

// orientada a objeto
var mensagem = "Seja bem vindo a Formação JavaScript Mestre Jedi!";
function sejaBemVindoOO(){
	console.log(mensagem);
}

function alerta (texto) {
	console.log(texto);
}

alerta(mensagem);
alerta(mensagem + " 2");