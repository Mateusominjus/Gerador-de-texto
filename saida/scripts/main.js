

main = () => {
   gerar_barra("junrandi");

   definir_paginas([{ nome: "Home" }]);
   const elemento = React.createElement(
      React.Fragment,
      null,
      React.createElement(Pesquisa, { texto: "Objeto" }),
      React.createElement(Tabela, { cabecalho: ["Nome", "Última modificação", "Autor"] })
   );

   ReactDOM.render(elemento, $("#root").get(0));
};

main();
