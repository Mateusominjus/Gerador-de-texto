

function main(){
   gerar_barra("junrandi")

   definir_paginas([{nome:"Home"}])
   const elemento = <React.Fragment>
                         <Pesquisa texto="Objeto"></Pesquisa>
                         <Tabela cabecalho={["Nome","Última modificação","Autor"]}></Tabela>
                    </React.Fragment>
        
   ReactDOM.render( elemento, $("#root").get(0)) 
   
   definir_linhas([
      ["objeto1","objeto2","Objeto3"],
      ["objeto1","objeto2","Objeto3"],
      ["objeto1","objeto2","Objeto3"]
   ])

}       


main()

