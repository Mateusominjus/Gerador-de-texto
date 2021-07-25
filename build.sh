
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

pasta="Barra_superior"
copila_babel  "barra.jsx"
copila_babel  "usuario.jsx"


pasta="Paginas/Objeto"
copila_babel "objeto.jsx"




#fazendo cópias
pasta="Barra_superior/estilo"
tipo="estilo"
copia_arquivo "barra.css"










