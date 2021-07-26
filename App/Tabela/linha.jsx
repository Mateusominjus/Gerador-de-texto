
class Linha extends React.Component{
    render(){
        return <div className="Linha_da_tabela">
                    <div className="row">
                    {this.props.linha.map(texto=> (
                        <div className="col Linha">{texto}</div>
                    ))}  
                   </div>
              </div>
    }
}

function definir_linhas(matriz){
        linhas =  <React.Fragment>
                {matriz.map(linha=> (
                     <Linha linha={linha}></Linha>
                 ))} 
        </React.Fragment>
        ReactDOM.render( linhas, $("#linhas").get(0)) 
}
   
