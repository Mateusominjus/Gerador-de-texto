

class Pesquisa extends React.Component {
    render() {
        return React.createElement(
            "div",
            { "class": "input-group Pesquisa" },
            React.createElement("input", { "class": "Input", placeholder: this.props.placeholder, type: "Search", id: `input_${this.props.id}` }),
            React.createElement(
                "button",
                { type: "button", "class": "btn btn-outline-secondary", id: `botao_${this.props.id}` },
                "Pesquisar"
            )
        );
    }
}
