const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual sua linguagem favorita?", (language) => {
    if(language === "Python"){
        console.log("Isso não é linguagem")
    }
    else{
        console.log(`A minha linguagem favoritra é: ${language}`)
    }
    readline.close()
})