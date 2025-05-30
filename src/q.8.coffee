require "../stdlib.js"

if (file_exists( "processos.yaml" ) and file_exists( "usuarios.yaml" ))
	processos = load_yaml( "processos.yaml" )
	usuarios = load_yaml( "usuarios.yaml" )
else 
	throw new Error( "O arquivo processos.yaml ou usuarios.yaml nao foi encontrado!" )

usuarios.forEach (usuario) -> 
	userProcess = processos.filter (processo) -> processo.login == usuario.login

	print "Processos iniciados pelo usuario " + usuario.login + ": "
	print if userProcess.length > 0 then userProcess else "Nenhum"
