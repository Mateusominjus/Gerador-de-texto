class Header extends React.Component {
       render() {
              return React.createElement(
                     "div",
                     { className: "row" },
                     this.props.cabecalho.map(titulo => React.createElement(
                            "h5",
                            { className: "col" },
                            titulo
                     ))
              );
       }
}
