



import os
from shutil import copyfile

def gera_caminho_de_entrada(dado):
    return f'{ dado["caminho"]}/{dado["arquivo"]}'

def gera_caminho_de_saida(dado,tipo):
    return f'saida/{tipo}/{dado["arquivo"]}'

def retorna_tipo(caminho:str):
        estensoes = {
            '.map':'scripts',
            '.ts':'typescript',
            '.jsx':'jsx',
            '.js':'scripts',
            '.css':'estilo',
            '.html':'paginas'
        }
        for arq in estensoes.keys():
            if arq in caminho:
                return estensoes[arq]

def copila_babel(caminho_de_entrada:str,caminho_de_saida:str):
    nome_de_saida  = caminho_de_saida.replace('.jsx','.js')
    comando = f'''babel --presets  /usr/local/lib/node_modules/babel-preset-react {caminho_de_entrada} --out-file {nome_de_saida}'''
    #print(caminho_de_saida)
    os.system(comando)

def copila_typescript(caminho_de_entrada:str,caminho_de_saida:str):
    nome_de_saida  = caminho_de_saida.replace('.ts','.js')
    comando = f'tsc {caminho_de_entrada} -out {nome_de_saida}'
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
        if tipo == None:
            continue
        caminho_de_entrada = gera_caminho_de_entrada(dado)
       
        
        if tipo == 'typescript':
         
           caminho_de_saida = gera_caminho_de_saida(dado,"scripts") 
           copila_typescript(caminho_de_entrada,caminho_de_saida)
 

        elif tipo == 'jsx':
            #print(caminho_de_entrada)
            caminho_de_saida = gera_caminho_de_saida(dado,"scripts") 
            copila_babel(caminho_de_entrada,caminho_de_saida)
        else:
            caminho_de_saida = gera_caminho_de_saida(dado,tipo) 
            copyfile(caminho_de_entrada, caminho_de_saida) 

main()


#mnt/c/Users/mateus.queiroz/Documents/Lawtex_nova_picPay/prints/Contestacao2_atualizada

