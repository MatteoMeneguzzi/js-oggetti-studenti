// 	Descrizione
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array.

// var student = {
// 	nome: ["Mario"],
// 	cognome: ["Rossi"],
// 	eta: ["19"],
// };

// for (var key in student) {
// 	// console.log(key, student[key]);
// }

var classe = [
	{
		nome: ["Mario"],
		cognome: ["Rossi"],
		eta: ["19"],
	},
	{
		nome: ["Albert"],
		cognome: ["Einstein"],
		eta: ["20"],
	},
	{
		nome: ["Diego"],
		cognome: ["Maradona"],
		eta: ["18"],
	},
	{
		nome: ["Barack"],
		cognome: ["Obama"],
		eta: ["22"],
	},
	{
		nome: ["Steve"],
		cognome: ["Jobs"],
		eta: ["19"],
	},
	{
		nome: ["Dante"],
		cognome: ["Alighieri"],
		eta: ["19"],
	},
];

var newStudent = {
	nome: prompt("Inserisci il tuo nome").trim(),
	cognome: prompt("Inserisci il tuo cognome").trim(),
	eta: parseInt(prompt("Inserisci la tua età").trim()),
};

classe.push(newStudent);

for (var i = 0; i < classe.length; i++) {
	var student = classe[i];

	// console.log(student);
	console.log(student.nome);
	console.log(student.cognome);
}
