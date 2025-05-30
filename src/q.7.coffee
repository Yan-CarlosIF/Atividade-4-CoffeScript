# Programa de PCB – I/O bound: lê o arquivo processos.yaml anterior e diz todos os nomes, 
# acompanhados dos respectivos PID’s, dos processos que são I/O bound.

require "../stdlib.js"

if (file_exists( "processos.yaml" ))
	processos = load_yaml( "processos.yaml" )
else 
	throw new Error( "O arquivo processos.yaml nao foi encontrado!" )

processosIoBound = processos
	.filter (dado) -> dado.io_bound
	.map (dado) -> 
		name: dado.name
		pid: dado.pid


print "Processos I/O bound: "
print processosIoBound
