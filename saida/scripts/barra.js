
barra = usuario => {
   const barra = React.createElement(
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

   ReactDOM.render(barra, $("#barra").get(0));
};

definir_paginas = paginas => {
   const id = "#meio-da-barra";
   const elem = React.createElement(
      "div",
      { "class": "row" },
      React.createElement(
         "h4",
         { "class": "col-2" },
         "teste"
      )
   );
   $(id).ready(() => {
      ReactDOM.render(elem, $(id).get(0));
   });
};
