




function cria_objeto(objeto){

   definir_paginas([{nome:"Home"},
   {nome:objeto,classe:"atual"}
   ])
 
   const elemento = <React.Fragment>
                         <Barra_inferior></Barra_inferior>
                         <Pesquisa texto="Objeto" id_botao="botao_pesquisa" id_input="input_pesquisa"></Pesquisa>
                         <Tabela cabecalho={["Nome","Última modificação","Autor"]}></Tabela>
                    </React.Fragment>
   

   ReactDOM.render( elemento, $("#root").get(0)) 
   definir_linhas(Documentos)
   adiciona_escutador_de_filtragem(Documentos)
}       


main()

