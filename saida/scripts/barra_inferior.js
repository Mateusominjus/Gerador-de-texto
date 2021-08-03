class Barra_inferior extends React.Component {
    render() {
        return React.createElement(
            "div",
            { "class": "row Barra_inferior" },
            React.createElement(
                "div",
                { "class": "col-2 Pagina_objeto" },
                "Configura\xE7\xF5es"
            ),
            React.createElement(
                "div",
                { "class": "col-2 Pagina_objeto" },
                "Dados"
            ),
            React.createElement(
                "div",
                { "class": "col-2 Pagina_objeto" },
                "Documentos"
            )
        );
    }
}
