let p = new Promise(function(resolve) {
    resolve(['Larissa', 'Beatriz', 'Nicole', 'Ana Erica', 'Natalie', 'Mileny'])
})

const prefere = (valor) => valor[2]
const letra = (valor) => valor[0]
const minusculo = (valor) => valor.toLowerCase()  

p.then(prefere)
    .then(letra)
    .then(minusculo)
    .then(console.log)