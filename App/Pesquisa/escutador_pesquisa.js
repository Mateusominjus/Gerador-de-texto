



function adicionar_escutador_de_pesquisa(id,calback,parametros){

 function faz_chamada(){
    const input = $(`#input_${id}`).val()
    calback(input,parametros)
 }
     
 $(`#botao_${id}`).on("click",faz_chamada)
}







