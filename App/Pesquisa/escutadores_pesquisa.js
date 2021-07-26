
function sanitiza(texto){
     minusculo = texto.toLowerCase()
     sem_espaco = minusculo.replace(" ","")
     return sem_espaco
}


function adiciona_escutador_de_filtragem(matriz){

    $("#botao_pesquisa").on("click",()=>{

        const valor = $("#input_pesquisa").val()
        const valor_sanitizado = sanitiza(valor)
        const novos_objetos = matriz.filter((linha) =>{

            const filtragem = linha.filter((texto)=>{
                     const texto_sanitizado  = sanitiza(texto)
                     if(texto_sanitizado.indexOf(valor_sanitizado) !== -1){
                         return true
                     }
            })
            if(filtragem.length !== 0){
                return true
            }
        })
        definir_linhas(novos_objetos)
    })

    $("#input_pesquisa").on('search', function () {
        definir_linhas(matriz)
    });
    
}
