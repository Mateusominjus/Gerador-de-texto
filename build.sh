
copila_babel(){
   local arquivo=$1
   local saida=${arquivo//jsx/js}
   babel --presets react App/$caminho_de_entrada/$arquivo --out-file saida/$tipo/$saida
}

copia_arquivo(){
    local arquivo=$1
    cp App/$caminho_de_entrada/$arquivo  saida/$tipo/$arquivo 
}

#definindo caminhos de entrada e saida
caminho_de_entrada="Barra_superior"
tipo="scripts"
copila_babel  "barra.jsx"
copila_babel  "usuario.jsx"



caminho_de_entrada="Paginas/Objeto"
tipo="htmls"
copila_babel "objeto.html"



#fazendo cópias
caminho_de_entrada="Barra_superior/estilo"
tipo="estilo"
copia_arquivo "barra.css"










