



copila_babel(){
   babel --presets react $caminho_de_entrada/$1 --out-file $caminho_de_saida/$2
}



#babel --presets react Barra_superior/barra.jsx --out-file saida/scripts/index.js

#definindo caminhos de entrada e saida
caminho_de_entrada=Barra_superior
caminho_de_saida=saida/scripts

#defini arquivos

copila_babel  barra.jsx barra.js




