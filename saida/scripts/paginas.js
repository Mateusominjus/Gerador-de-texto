

class Paginas extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "col-9 row" },
            this.props.paginas.map(pagina => React.createElement(
                "a",
                { className: "col-3 paginas ", href: pagina.link },
                pagina.nome
            ))
        );
    }
}
