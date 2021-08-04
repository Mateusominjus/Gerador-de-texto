
class Main extends React.Component {
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Barra_Superior, { usuario: this.props.usuario, paginas: this.props.paginas }),
      React.createElement(Pesquisa, { placeholder: "Objetos/Autor/Data", id: "pesquisar" })
    );
  }
}

function renderizar_main(usuario) {
  const paginas = [{ nome: "youtube",
    link: "https://youtube.com.br",
    atual: true
  }, { nome: "goolge",
    link: "https://google.com.br"
  }];
  const main = React.createElement(Main, { usuario: usuario, paginas: paginas });
  ReactDOM.render(main, $("#root").get(0));
}
