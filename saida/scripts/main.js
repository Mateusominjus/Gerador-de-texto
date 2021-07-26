

function filtrar_pesquisa(id) {
   const valor = $("#" + id).val();
   const novos_objetos = Objetos.filter(linha => {
      for (let texto in linha) {
         console.log(texto);
      }
   });
}

function main() {
   gerar_barra("junrandi");

   definir_paginas([{ nome: "Home" }]);
   const elemento = React.createElement(
      React.Fragment,
      null,
      React.createElement(Pesquisa, { texto: "Objeto", id: "botao_pesquisa" }),
      React.createElement(Tabela, { cabecalho: ["Nome", "Última modificação", "Autor"] })
   );

   ReactDOM.render(elemento, $("#root").get(0));

   definir_linhas(Objetos);
}

main();
