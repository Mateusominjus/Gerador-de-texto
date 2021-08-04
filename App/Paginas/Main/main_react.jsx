
class Main extends React.Component{
  render(){
    return  <React.Fragment>
    <Barra_Superior usuario={this.props.usuario} paginas={this.props.paginas}></Barra_Superior>
    <Pesquisa placeholder="Objetos/Autor/Data" id="pesquisar"></Pesquisa>
    </React.Fragment>
  }
}


function renderizar_main(usuario){
  const paginas = [
    {nome:"youtube",
      link:"https://youtube.com.br",
      atual:true
    },

    {nome:"goolge",
      link:"https://google.com.br",
    }      
  ]
  const main = <Main usuario={usuario} paginas={paginas}></Main>
  ReactDOM.render(main, $("#root").get(0))       
}
