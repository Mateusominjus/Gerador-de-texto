



class Barra_Superior extends React.Component{
   render(){
      return <nav className="row" id="barra">
                     <img  className="col-2" src="../imagens/logo.svg" alt="logo-ominjus" id="logo"></img>
                     <Paginas paginas={this.props.paginas}></Paginas>
                     <div className="col-1">
                        <Usuario usuario={this.props.usuario}></Usuario>
                     </div>                    
               </nav>
   }
}




