

class Pesquisa extends React.Component {
    render() {
        return React.createElement(
            "div",
            { "class": "input-group Pesquisa" },
            React.createElement("input", { "class": "Input", placeholder: "Objeto/Data/Nome", type: "Search", id: this.props.id }),
            React.createElement(
                "button",
                { type: "button", "class": "btn btn-outline-secondary", id: this.props.id },
                "Pesquisar"
            )
        );
    }
}
