
copila_babel(){
   local arquivo=$1
   local saida=${arquivo//jsx/js}
   babel --presets react App/$pasta/$arquivo --out-file saida/$tipo/$saida
}

copia_arquivo(){
    local arquivo=$1
    cp App/$pasta/$arquivo  saida/$tipo/$arquivo 
}

#definindo caminhos de entrada e saida
tipo="scripts"

pasta="Paginas/"
copila_babel "main.jsx"


pasta="Barra_superior"
copila_babel  "barra.jsx"
copila_babel  "usuario.jsx"


pasta="Paginas/Home"
copila_babel "home.jsx"

pasta="Pesquisa/"
copila_babel "pesquisa.jsx"

 cp App/index.html saida/index.html

#fazendo cópias
tipo="estilo"
pasta="Barra_superior"
copia_arquivo "barra.css"


pasta="Pesquisa"
copia_arquivo "pesquisa.css"









