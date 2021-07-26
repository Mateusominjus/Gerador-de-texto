class Header extends React.Component {
       render() {
              return React.createElement(
                     "div",
                     { className: "row" },
                     this.props.cabecalho.map(titulo => React.createElement(
                            "div",
                            { className: "col Cabecalho" },
                            titulo
                     ))
              );
       }
}
