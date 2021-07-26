

main = () =>{
   gerar_barra("junrandi")

   definir_paginas([{nome:"Home"}])
   const elemento = <React.Fragment>
                         <Pesquisa texto="Objeto"></Pesquisa>
                         <Tabela cabecalho={["Elemento1","Elemento2","Elemento3"]}></Tabela>
                    </React.Fragment>
        
   ReactDOM.render( elemento, $("#root").get(0)) 
}

main()

