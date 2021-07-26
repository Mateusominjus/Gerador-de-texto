
copila_babel(){
   local arquivo=$1
   local saida=${arquivo//jsx/js}
  babel --presets /usr/local/lib/node_modules/babel-preset-react  App/$pasta/$arquivo --out-file saida/$tipo/$saida
}

copia_arquivo(){
    local arquivo=$1
    cp App/$pasta/$arquivo  saida/$tipo/$arquivo 
}

#definindo caminhos de entrada e saida
tipo="scripts"

pasta="Paginas/Main"
copila_babel "main.jsx"




pasta="Barra_superior"
copila_babel  "barra.jsx"
copila_babel  "usuario.jsx"

pasta="Tabela"
copila_babel "header.jsx"
copila_babel "tabela.jsx"
copila_babel "linha.jsx"



pasta="Pesquisa/"
copila_babel "pesquisa.jsx"
copia_arquivo "escutadores_pesquisa.js"



cp App/index.html saida/index.html
cp App/importe.js  saida/scripts/importe.js
cp App/testagem.js  saida/scripts/testagem.js
#fazendo cópias
tipo="estilo"
pasta="Barra_superior"
copia_arquivo "barra.css"



pasta="Pesquisa"
copia_arquivo "pesquisa.css"


pasta="Tabela"
copia_arquivo "tabela.css"





