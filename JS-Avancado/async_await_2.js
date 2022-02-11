function gerarnumerosEntre(min, max, numerosproibidos) {
    if(min > max) {
        [max, min] = [min, max]
    }

    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        if(numerosproibidos.includes(aleatorio)) {
            reject('Numero repetido')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarMega(qtdNumeros) {
    try {
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarnumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        throw "Que chato!!!"
    }
}

gerarMega(8)
    .then(console.log)
    .catch(console.log)
