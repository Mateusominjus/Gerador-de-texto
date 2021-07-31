
gerar_barra = (usuario) =>{
   const elem_barra= <React.Fragment>
                     <img  class="col-2" src="imagens/logo.svg" alt="logo-ominjus" id="logo"></img>
                     <div class="col-9" id="meio-da-barra"></div>
                     <div class="col-1">
                        <Usuario usuario={usuario}></Usuario>
                     </div>                    
                </React.Fragment>

    ReactDOM.render( elem_barra, $("#barra").get(0))
}


definir_paginas =(paginas) =>{
   const id = "#meio-da-barra"
   const elem = <div class="row">
                    {paginas.map(pagina=> (
                      <div class={"col-4 elementos_da_barra " + pagina.classe} >{pagina.nome}</div>
                     ))}
               </div>
  
   $(id).ready(()=>{
      ReactDOM.render(elem, $(id).get(0))
   })
   
}

