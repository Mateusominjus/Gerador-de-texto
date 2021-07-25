main = () => ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(
        Barra,
        { usuario: "Jurandi" },
        " "
    ),
    React.createElement(Objeto, null)
), $("body").get(0));

main();
