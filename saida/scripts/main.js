

main = () => {
   gerar_barra("junrandi");

   definir_paginas([{ nome: "Home" }]);
   const elemento = React.createElement(
      React.Fragment,
      null,
      React.createElement(Pesquisa, { texto: "Objeto" }),
      React.createElement(Tabela, { cabecalho: ["Elemento1", "Elemento2", "Elemento3"] })
   );

   ReactDOM.render(elemento, $("#root").get(0));
};

main();
