
class Pesquisa extends React.Component {
    render(){
    return  <input class="form-control mr-sm-2 pesquisa" type="search" 
    placeholder={`🔎 Pesquise Pelo ${this.props.texto}`}aria-label="Search"/>
    }
}
  