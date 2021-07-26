
class Linha extends React.Component{
    render(){
        return <div className="row">
                  {this.props.linha.map(texto=> (
                       <div className="col linha">{texto}</div>
                 ))}  
               </div>
    }
}

function definir_linhas(matriz){
        linhas =  <React.Fragment>
                {matriz.map(linha=> (
                     <Linha linha={linha}></Linha>
                 ))} 
        </React.Fragment>
        ReactDOM.render( linha, $("#linhas").get(0)) 
}
   
