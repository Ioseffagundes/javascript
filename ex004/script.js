// Teste separando o script do html

function aula() {
  var nome = window.prompt("Qual é o seu nome");
  document.write(`Olá ${nome}, seu nome tem ${nome.length} letras e <br/>`);
  document.write(
    `seu nome em maiusculo fica assim ${nome.toUpperCase()} <br/>`
  );
  document.write(`e em minuscula assim ${nome.toLocaleLowerCase()}`);
}
