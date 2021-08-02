
class Usuario extends React.Component {
  render() {
    return React.createElement(
      "div",
      { "class": "dropdown", id: "usuario" },
      React.createElement(
        "button",
        { "class": "btn btn-secondary dropdown-toggle", type: "button", id: "dropdownMenu2", "data-bs-toggle": "dropdown", "aria-expanded": "false" },
        this.props.usuario
      ),
      React.createElement(
        "ul",
        { "class": "dropdown-menu", "aria-labelledby": "dropdownMenu2" },
        React.createElement(
          "li",
          null,
          React.createElement(
            "button",
            { "class": "dropdown-item", type: "button" },
            "Sair"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            "button",
            { "class": "dropdown-item", type: "button" },
            "Voltar a plataforma"
          )
        )
      )
    );
  }
}
