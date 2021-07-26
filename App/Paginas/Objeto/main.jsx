




function main(){
   gerar_barra("junrandi")

   definir_paginas([{nome:"Home", classe:"atual"}])
   const elemento = <React.Fragment>
                         <Pesquisa texto="Objeto" id_botao="botao_pesquisa" id_input="input_pesquisa"></Pesquisa>
                         <Tabela cabecalho={["Nome","Última modificação","Autor"]}></Tabela>
                    </React.Fragment>
   
   ReactDOM.render( elemento, $("#root").get(0)) 

   definir_linhas(Objetos)
   adiciona_escutador_de_filtragem(Objetos)
}       


main()

