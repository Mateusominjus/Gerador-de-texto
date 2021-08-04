

function main() {
    let paginas = [{ nome: "teste1",
        link: "https://youtube.com.br"
    }];

    const elemento_main = React.createElement(
        React.Fragment,
        null,
        React.createElement(Barra_Superior, { usuario: usuario, paginas: paginas })
    );

    ReactDOM.render(elemento_main, $("#root").get(0));
}

main();
