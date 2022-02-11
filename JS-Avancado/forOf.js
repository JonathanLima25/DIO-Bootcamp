for(let letra of 'Jonathan'){
    console.log(letra)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let assunto of assuntosMap.keys()){
    console.log(assunto)
}

for(let assunto of assuntosMap.values()){
    console.log(assunto)
}

for(let [cl,vl] of assuntosMap.entries()){
    console.log(cl, vl)
}

