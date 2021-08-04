



function adicionar_escutador_de_pesquisa(id,calback,parametros){

 function faz_chamada(){
    calback($(`#input_${id}`).get(0),parametros)
 }
     
 $(`#botao_${id}`).on("click",faz_chamada)
}







