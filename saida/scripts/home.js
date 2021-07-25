home = () => {
    definir_paginas([{ nome: "Home" }]);

    const elemento = React.createElement(
        React.Fragment,
        null,
        React.createElement(Pesquisa, { texto: "Objeto" })
    );

    ReactDOM.render(elemento, $("#root").get(0));
};
