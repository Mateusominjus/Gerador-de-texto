

class Barra_Superior extends React.Component {
   render() {
      return React.createElement(
         "nav",
         { className: "row", id: "barra" },
         React.createElement("img", { className: "col-2", src: "../imagens/logo.svg", alt: "logo-ominjus", id: "logo" }),
         React.createElement(Paginas, { paginas: this.props.paginas }),
         React.createElement(
            "div",
            { className: "col-1" },
            React.createElement(Usuario, { usuario: this.props.usuario })
         )
      );
   }
}
