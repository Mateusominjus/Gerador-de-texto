

function cria_objeto(objeto) {

   definir_paginas([{ nome: "Home" }, { nome: objeto, classe: "atual" }]);

   const elemento = React.createElement(
      React.Fragment,
      null,
      React.createElement(Barra_inferior, null),
      React.createElement(Pesquisa, { texto: "Objeto", id_botao: "botao_pesquisa", id_input: "input_pesquisa" }),
      React.createElement(Tabela, { cabecalho: ["Nome", "Última modificação", "Autor"] })
   );

   ReactDOM.render(elemento, $("#root").get(0));
   definir_linhas(Documentos);
   adiciona_escutador_de_filtragem(Documentos);
}

main();
