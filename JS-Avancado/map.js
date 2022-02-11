const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true})

const chavesVariados = new Map([
    [function(){}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

console.log(chavesVariados.get(123))
chavesVariados.forEach((vl, ch) => {
    console.log(ch, vl)
})