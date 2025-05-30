require "../stdlib.js"

if (file_exists( "processos.yaml" ))
	processos = load_yaml( "processos.yaml" )
else 
	throw new Error( "O arquivo processos.yaml nao foi encontrado!" )

ready = processos.filter (dado) -> dado.state == "ready"
running = processos.filter (dado) -> dado.state == "running"
blocked = processos.filter (dado) -> dado.state == "blocked"

# printando em baixo porque o print não exibe os arrays quando concatenados
print "Processos ready: "
print ready

print "Processos running: "
print running

print "Processos blocked: "
print blocked
