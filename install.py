



import os



def retorna_tipo(caminho:str):
        estensoes = {
            '.jsx':'jsx',
            '.js':'scripts',
            '.css':'estilo',
            '.html':'paginas'
        }
        for arq in estensoes.keys():
            if arq in caminho:
                return estensoes[arq]

def copila_babel(caminho:str):
    nome_de_saida  = caminho.replace('jsx','js')
    comando = f'''babel --presets /usr/local/lib/node_modules/babel-preset-react 
        App/{caminho} --out-file saida/scripts/{nome_de_saida}'''
    print(comando)

def arquivos_do_app():
    caminhos = []
    for r, d, arquivos in os.walk('App'):
        for arq in arquivos:
            caminhos.append(f'{r}\\{arq}')
    return caminhos


def main():
    caminhos = arquivos_do_app()

    for caminho in caminhos:
        tipo = retorna_tipo(caminho)
        print(tipo)
 


main()


