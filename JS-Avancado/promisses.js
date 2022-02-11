function falarDepois(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepois(3, "Que legal!")
    .then(frase => frase.concat("!?!"))
    .then(outaFrase => console.log(outaFrase))