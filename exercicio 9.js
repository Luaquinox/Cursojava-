// Definindo as variáveis
const nome = "luana";
const idade = 17;
const inscrito = true;
const curso = "Programação Front-end";

// Criando o objeto usuário
const usuario = {
  nome: nome,
  idade: idade,
  inscrito: inscrito,
  curso: curso
};

// Exibindo as informações no console
console.log("Nome do usuário:", nome);
console.log("Idade do usuário:", idade);
console.log("Status de inscrição:", inscrito);
console.log("Curso:", curso);
console.log("Informações completas do usuário:", usuario);

// Verificando se o usuário está inscrito
if (usuario.inscrito) {
  console.log(`${usuario.nome} está inscrito no curso de ${usuario.curso}.`);
} else {
  console.log(`${usuario.nome} não está inscrito em nenhum curso.`);
}