require "../stdlib.js"

if (file_exists( "hd.yaml" ))
	hd = load_yaml( "hd.yaml" )
else 
	throw new Error( "O arquivo hd.yaml não foi encontrado!" )


print "Insira o nome de um usuário: "
name = input()

if (!hd.find (dado) -> dado.usuario.toLowerCase() == name.toLowerCase()) # se o usuario nao for encontrado
	throw new Error("O usuário " + name + " não foi encontrado")

sizes = hd
	.filter (dado) ->
		dado.usuario.toLowerCase() == name.toLowerCase()
	.map (dado) ->
		dado.tamanho

total = sizes.reduce (a, b) -> a + b

stringSumSizes = sizes
	.map (size) ->
		size.toString()
	.join("+")

print "O total ocupado pelo '" + name + "' é " + stringSumSizes + " = " + total
