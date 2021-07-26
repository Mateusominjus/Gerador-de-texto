




class Pesquisa extends React.Component {
    render(){
    return <div class="input-group Pesquisa">
    <input class="Input" placeholder="Objeto/Data/Nome" type="Search" id={this.props.id_input} />
   <button type="button" class="btn btn-outline-secondary" id={this.props.id_botao}>Pesquisar</button>
  </div>
    }
}

