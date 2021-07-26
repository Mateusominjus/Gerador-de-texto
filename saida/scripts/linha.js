
class Linha extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "Linha_da_tabela" },
            React.createElement(
                "div",
                { className: "row" },
                this.props.linha.map(texto => React.createElement(
                    "div",
                    { className: "col Linha" },
                    texto
                ))
            )
        );
    }
}

function definir_linhas(matriz) {
    linhas = React.createElement(
        React.Fragment,
        null,
        matriz.map(linha => React.createElement(Linha, { linha: linha }))
    );
    ReactDOM.render(linhas, $("#linhas").get(0));
}
