function funcionarOunao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro')
        } resolve(valor)
    })
}

funcionarOunao('Testando..', 0.9)
    .then(console.log)
    .catch(err => console.log(`Erro: ${err}`))