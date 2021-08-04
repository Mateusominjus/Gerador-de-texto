




function main(){
   let paginas = [
       {nome:"teste1",
         link:"https://youtube.com.br"
    }
   ]

   const elemento_main = <React.Fragment>
       <Barra_Superior usuario={usuario} paginas={paginas}></Barra_Superior>
   </React.Fragment>

   ReactDOM.render( elemento_main, $("#root").get(0)) 

}       


main()

