




class Pesquisa extends React.Component {
    render(){
    return <div class="input-group Pesquisa">
    <input class="Input" placeholder={this.props.placeholder} type="Search" id={`input_${this.props.id}`} />
   <button type="button" class="btn btn-outline-secondary" id={`botao_${this.props.id}`}>Pesquisar</button>
  </div>
  }
}

