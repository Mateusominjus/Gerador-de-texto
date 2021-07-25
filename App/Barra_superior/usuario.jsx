
class Usuario extends React.Component {
    render() {
        return  <div class="btn-group">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         {this.props.usuario}
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <button class="dropdown-item" type="button">Sair</button>
          <button class="dropdown-item" type="button">Voltar a Plataforma</button>
        </div>
      </div>
    }
}

