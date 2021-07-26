
gerar_barra = usuario => {
   const elem_barra = React.createElement(
      React.Fragment,
      null,
      React.createElement("img", { "class": "col-2", src: "imagens/logo.svg", alt: "logo-ominjus", id: "logo" }),
      React.createElement("div", { "class": "col-9", id: "meio-da-barra" }),
      React.createElement(
         "div",
         { "class": "col-1" },
         React.createElement(Usuario, { usuario: usuario })
      )
   );

   ReactDOM.render(elem_barra, $("#barra").get(0));
};

definir_paginas = paginas => {
   const id = "#meio-da-barra";
   const elem = React.createElement(
      "div",
      { "class": "row" },
      paginas.map(pagina => React.createElement(
         "div",
         { "class": "col-2 elementos_da_barra", onClick: pagina.lambda, id: pagina.id },
         pagina.nome
      ))
   );

   $(id).ready(() => {
      ReactDOM.render(elem, $(id).get(0));
   });
};
