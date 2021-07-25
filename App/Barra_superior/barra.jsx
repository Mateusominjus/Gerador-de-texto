class Barra extends React.Component {
   render(){
      return <nav id="barra" > 
      <img src="imagens/logo.svg" alt="logo-ominjus" id="logo"></img>
      <Usuario usuario={this.props.usuario}></Usuario>
      </nav>   
   }

}



