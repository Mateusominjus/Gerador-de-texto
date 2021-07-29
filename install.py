



import os
from shutil import copyfile

def gera_caminho(dado):
    return f'{dado['caminho']}\\{dado['arquivo']}'

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
    dados = []
    for r, d, arquivos in os.walk('App'):
        for arq in arquivos:
            dados.append({'caminho':r,'arquivo':arq})
    return dados



def main():
    dados = arquivos_do_app()
    for dado in dados:
        tipo =  retorna_tipo(dado['arquivo']
        caminho = gera_caminho(dado)
        if tipo == 'jsx':
            copila_babel(caminho)
        else:
           copyfile(caminho, f'saida/{tipo}') 


main()


