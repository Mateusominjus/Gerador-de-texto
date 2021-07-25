
class Usuario extends React.Component {
  render() {
    return React.createElement(
      "div",
      { "class": "btn-group" },
      React.createElement(
        "button",
        { type: "button", "class": "btn btn-secondary dropdown-toggle", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
        this.props.usuario
      ),
      React.createElement(
        "div",
        { "class": "dropdown-menu dropdown-menu-right" },
        React.createElement(
          "button",
          { "class": "dropdown-item", type: "button" },
          "Sair"
        ),
        React.createElement(
          "button",
          { "class": "dropdown-item", type: "button" },
          "Voltar a Plataforma"
        )
      )
    );
  }
}
