
barra = (usuario) =>{
   const barra = <React.Fragment>
                     <img  class="col-2" src="imagens/logo.svg" alt="logo-ominjus" id="logo"></img>
                     <div class="col-9" id="meio-da-barra"></div>
                     <div class="col-1">
                        <Usuario usuario={usuario}></Usuario>
                     </div>                    
                </React.Fragment>

    ReactDOM.render( barra, $("#barra").get(0))
}


definir_paginas =(paginas) =>{
   const id = "#meio-da-barra"
   const elem = <div class="row">

                     {paginas.map(pagina=> (
                      <h4 class="col-2" onClick={pagina.lambda} >{pagina.nome}</h4>
                     ))}
                   
               </div>
 $(id).ready(()=>{
   ReactDOM.render(elem, $(id).get(0))
 })

}