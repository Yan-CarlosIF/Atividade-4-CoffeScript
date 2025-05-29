require "../stdlib.js"

print "Insira seu login"
login = input()

print "Insira sua senha"
password = input_password "*"

hashed_password = hash_md5( password )

dados = []

if (file_exists( "contas.yaml" )) # verifica se o arquivo existe
	dados = load_yaml( "contas.yaml" ) # carrega o arquivo

	if (!Array.isArray(dados)) # se não for um array, transforma em um
		dados = [dados]

dados.push( { login: login, password: hashed_password } )
save_yaml( "contas.yaml", dados )
print "Conta criada com sucesso!"
