class Header extends React.Component {
     render(){
            return <div className="row">
                   
                   {this.props.cabecalho.map(titulo=> (
                   <div className="col Cabecalho">{titulo}</div>
                   ))}  
            </div>
     }
}
