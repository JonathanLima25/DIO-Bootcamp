// setTimeout(function() {
//     console.log("Executando callback...")

//     setTimeout(function() {
//         console.log("Executando callback...")
//         setTimeout(function() {
//             console.log("Executando callback...")
//         }, 3000)
//     }, 3000)
// }, 3000)

function esperarPor(tempo=3000){
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log("Executando promise...")
            resolve("Vixi")
        }, tempo)
    })
}

esperarPor(3000).then(() => esperarPor())
    .then(esperarPor)