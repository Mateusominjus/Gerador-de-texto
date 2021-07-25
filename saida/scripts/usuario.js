
class Usuario extends React.Component {
  render() {
    return React.createElement(
      "div",
      { "class": "dropdown" },
      React.createElement(
        "button",
        { "class": "btn btn-secondary dropdown-toggle", type: "button", id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
        "Bot\xE3o dropdown"
      ),
      React.createElement(
        "div",
        { "class": "dropdown-menu", "aria-labelledby": "dropdownMenuButton" },
        React.createElement(
          "a",
          { "class": "dropdown-item", href: "#" },
          "Alguma a\xE7\xE3o"
        ),
        React.createElement(
          "a",
          { "class": "dropdown-item", href: "#" },
          "Outra a\xE7\xE3o"
        ),
        React.createElement(
          "a",
          { "class": "dropdown-item", href: "#" },
          "Alguma coisa aqui"
        )
      )
    );
  }
}
