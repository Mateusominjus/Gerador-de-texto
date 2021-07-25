



copila_babel(){
   local arquivo=$1
   local estencao=$2 
   local saida=$2
   if [[ "$estencao" == "jsx" ]];then 
     saida=js
   fi 
   babel --presets react $caminho_de_entrada/$arquivo.$estencao --out-file $caminho_de_saida/$arquivo.$saida
}



#babel --presets react Barra_superior/barra.jsx --out-file saida/scripts/index.js

#definindo caminhos de entrada e saida
caminho_de_entrada=barra_superior
caminho_de_saida=saida/scripts

#copilando
copila_babel barra jsx
copila_babel usuario jsx



#copiando arquivos 
#css
cp Barra_superior/estilo/barra.css  saida/estilo/barra.css



