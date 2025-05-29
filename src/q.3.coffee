require "../stdlib.js"
say = require "say"

if (file_exists( "contas.yaml" ))
	dados = load_yaml( "contas.yaml" )
else 
	throw new Error( "O arquivo contas.yaml nao foi encontrado!" )

sorteio = rand(0, dados.length - 1)

say.speak "Parabens " + dados[sorteio].login + " voce ganhou um premio!", "Good News", 0.8
