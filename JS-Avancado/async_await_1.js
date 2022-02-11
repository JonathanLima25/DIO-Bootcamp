function esperarPor(tempo=3000){
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log("Executando promise...")
            resolve("Vixi")
        }, tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log("Executa promise 1..."))
//     .then(esperarPor)
//     .then(() => console.log("Executa promise 2..."))
//     .then(esperarPor)
//     .then(() => console.log("Executa promise 2..."))


async function executar() {
    await esperarPor()
    console.log("Async/Await...")
    await esperarPor()
    console.log("Async/Await...")
    await esperarPor()
    console.log("Async/Await...")
}

executar()