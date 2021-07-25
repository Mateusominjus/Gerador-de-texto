class Barra extends React.Component {
   render() {
      return React.createElement(
         "nav",
         { id: "barra" },
         React.createElement("img", { src: "imagens/logo.svg", alt: "logo-ominjus", id: "logo" }),
         React.createElement(
            "div",
            null,
            React.createElement(
               "h1",
               null,
               "teste"
            ),
            React.createElement(
               "h1",
               null,
               "teste2"
            )
         ),
         React.createElement(Usuario, { usuario: this.props.usuario })
      );
   }

}
