require "../stdlib.js"

if (file_exists( "lang.config" ))
	lang = open( "lang.config", "r" ).read()
else 
	throw new Error( "O arquivo lang.config nao foi encontrado!" )

hash = {
	"en" : "Hey how's it going?",
	"pt-BR" : "Oi, tudo bem?",
	"es" : "Hola, ¿cómo va todo?",
	"fr" : "Hé, comment ça va ?",
	"ko" : "안녕하세요, 잘 지내세요?",
}

print hash[lang]
