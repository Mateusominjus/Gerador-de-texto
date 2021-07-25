home = () => {
    definir_paginas([{nome:"Home"}])

    const elemento = <React.Fragment>
                          <Pesquisa texto="Objeto"></Pesquisa>
                     </React.Fragment>
    
    ReactDOM.render( elemento, $("#root").get(0))
    
}
