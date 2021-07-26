class Header extends React.Component {
       render() {
              React.createElement(
                     "div",
                     { className: "row" },
                     this.props.cabecalho.map(titulo => React.createElement(
                            "h5",
                            { className: "col" },
                            "titulo"
                     ))
              );
       }
}
