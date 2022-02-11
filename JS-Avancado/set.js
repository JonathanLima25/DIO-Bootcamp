// não aceita repetição e não é indexado

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

const nomes = ['Ana Erica', 'Nicole', 'Natalia', 'Natalia', 'Gislaine']
const nomesSet = new Set(nomes)

console.log(nomesSet)