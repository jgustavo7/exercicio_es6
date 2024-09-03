const alunos = [
    {nome: "Alice", nota: 7},
    {nome: "Gustavo", nota: 5.5},
    {nome: "Dailane", nota: 6},
    {nome: "Thiago", nota: 8},
    {nome: "Miguel", nota: 4.5}
]

const aprovados = alunos.filter((aluno) => {
    return aluno.nota >= 6
})

console.log(aprovados)