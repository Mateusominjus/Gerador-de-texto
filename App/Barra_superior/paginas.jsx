


class Paginas extends React.Component {
    render(){
        return  <div className="row">
                    {this.props.paginas.map(pagina=> (
                      <div className={"col-4 elementos_da_barra"} >{pagina}</div>
                     ))}
             </div>
    }
}