const funcionario = { nome: "maria", salario: 2800 };
const clone = { ativo: true, ...funcionario };

const grupoA = ['joão', 'Pedro', 'Gloria'];
const grupoFinal = ['Jonathan', 'Mariana', ...grupoA];

console.log(grupoA, grupoFinal);