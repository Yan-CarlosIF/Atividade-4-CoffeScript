require "../stdlib.js"
say = require "say"

if (file_exists( "contas.yaml" ))
	dados = load_yaml( "contas.yaml" )
else 
	throw new Error( "O arquivo contas.yaml nao foi encontrado!" )

print "Insira seu login"
login = input()

print "Insira sua senha"
password = input_password "*"

hashed_password = hash_md5( password )

loginSuccessful = false

for dado in dados
	if (dado.login == login and dado.password == hashed_password)
		print "Login efetuado com sucesso! bem vindo" + dado.login
		say.speak( "Login efetuado com sucesso! bem vindo" + dado.login )
		loginSuccessful = true
		break

if (!loginSuccessful)
	print "Login ou senha incorretos!"
	say.speak( "Login ou senha incorretos!" )

