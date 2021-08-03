



import os
from shutil import copyfile

def gera_caminho_de_entrada(dado):
    return f'{ dado["caminho"]}\\{dado["arquivo"]}'

def gera_caminho_de_saida(dado,tipo):
    return f'saida\\{tipo}\\{dado["arquivo"]}'

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

def copila_babel(caminho_de_entrada,caminho_de_saida):
    nome_de_saida  = caminho_de_saida.replace('jsx','js')
    comando = f'''babel --presets /usr/local/lib/node_modules/babel-preset-react 
    {caminho_de_entrada} --out-file {caminho_de_saida}'''
    os.system(comando)

def arquivos_do_app():
    dados = []
    for r, d, arquivos in os.walk('App'):
        for arq in arquivos:
            dados.append({'caminho':r,'arquivo':arq})
    return dados

def main():
    dados = arquivos_do_app()
    for dado in dados:
        tipo =  retorna_tipo(dado['arquivo'])
        caminho_de_entrada = gera_caminho_de_entrada(dado)
        caminho_de_saida = gera_caminho_de_saida(dado,tipo) 

        if tipo == 'jsx':
            caminho_de_saida = gera_caminho_de_saida(dado,"scripts") 
            copila_babel(caminho_de_entrada,caminho_de_saida)
        else:
            copyfile(caminho_de_entrada, caminho_de_saida) 
        

main()


