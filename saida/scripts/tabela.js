class Tabela extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "Tabela" },
      React.createElement(Header, { cabecalho: this.props.cabecalho }),
      React.createElement("div", { id: "linhas" })
    );
  }
}
