
class Usuario extends React.Component {
    render() {
        return<div class="dropdown" id="usuario">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
         {this.props.usuario}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li><button class="dropdown-item" type="button">Sair</button></li>
          <li><button class="dropdown-item" type="button">Voltar a plataforma</button></li>

        </ul>
      </div>
    }
}

