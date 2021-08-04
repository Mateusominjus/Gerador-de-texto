


class Paginas extends React.Component {
    render(){
        return  <div className="col-9 row" >
                    {this.props.paginas.map(pagina=> (

                      <a className="col-3 paginas "  href={pagina.link}>
                                 {pagina.nome}</a>
                     ))}
             </div>
    }
}