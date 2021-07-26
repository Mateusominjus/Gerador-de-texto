class Header extends React.Component {
     render(){
            return <div className="row">
                   
                   {this.props.cabecalho.map(titulo=> (
                   <h5 className="col">{titulo}</h5>
                   ))}  
            </div>
     }
}
