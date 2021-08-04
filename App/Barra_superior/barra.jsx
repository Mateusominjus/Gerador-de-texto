

gerar_barra = (usuario,paginas) =>{
   const elem_barra= <React.Fragment>
                     <img  className="col-2" src="imagens/logo.svg" alt="logo-ominjus" id="logo"></img>
                     <Paginas ></Paginas>
                     <div className="col-1">
                        <Usuario usuario={usuario}></Usuario>
                     </div>                    
                </React.Fragment>

    ReactDOM.render( elem_barra, $("#barra").get(0))
}




