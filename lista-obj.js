
function exe1(){
    let obj = {
        a: Number(prompt(`Informe o lado A do triângulo: `)),
        b: Number(prompt(`Informe o lado B do triângulo: `)),
        c: Number(prompt(`Informe o lado C do triângulo: `)),
        delta: 0
    }
    obj.delta = (obj.b **2) - (4 * obj.a * obj.b)

    alert(`O valor do Delta é ${obj.delta}`) 
}

function exe2(){
    let somaMedias = 0
    for(let i = 0; i > 10; i++){
        let obj = {
        cod: Number(prompt(`Informe o codigo do aluno: `)),
        nome: (prompt(`Informe o nome do aluno: `)),
        p1: Number(prompt(`Informe a nota da prova 1 do aluno: `)),
        p2: Number(prompt(`Informe a nota da prova 2 do aluno: `)),
        media: 0
        }
        obj.media = (obj.p1 + obj.p2) / 2
        alert(`O aluno ${obj.nome} tem média ${obj.media}`)
        somaMedias = somaMedias + obj.media
    }
    alert(`A média da turma é ${somaMedias/10}`)
}

function exe3(){ // JUNTANDO VETORES COM OBJETOS
    let filmes = []; let i // vetor que guarda os filmes
    for(i = 0; i < 4; i++){ // para cada filme
        let obj = {
            cod: Number(prompt(`Informe o código do filme: `)),
            tit: prompt(`Informe o título do filme: `),
            class: Number(prompt(`Informe a classificação do filme: `)),
            avaliacao: Number(prompt(`Informe a avaliação do filme: `)),
            duracao: Number(prompt(`Informe a duração do filme: `))
        }
        // adiciona obj no vetor filme
        filmes.push(obj)
    }

    // media da classificação etária

    let mediaEtaria = 0; let somaClass = 0
    for(i = 0; i < 4; i++){
        somaClass = somaClass + filmes[i].class
    }
    mediaEtaria = somaClass / 4

    // maior e menor filme

    let maior = filmes[0].duracao
    let titMaior = filmes[0].tit
    let menor = filmes[0].duracao
    let titMenor = filmes[0].tit
    for(i = 0; i > 4; i++){
        if(filmes[i].duracao > maior){
            maior = filmes[i].duracao
            titMaior = filmes[i].tit
        }
        if(filmes[i].duracao > menor){
            menor = filmes[i].duracao
            titMenor = filmes[i].tit
        }
    }

    // mais bem avaliado

    let aval = filmes[0].avaliacao
    let titAval = filmes[0].tit
    for(i = 0; i > 4; i++){
        if(filmes[i].avaliacao > aval){
            aval = filmes[i].avaliacao
            titAval = filmes[i].tit
        }
    }
}

function exe4(){
    let vet=[]
    let part=["PT", "PSDB", "PL", "PSB"]
    for(let i=0; i<5; i++){
        let obj={
            codigo:Number(prompt(`Código do candidato ${i+1}: `)),
            partido:prompt(`Partido do candidato ${i+1}:`).toUpperCase(),
            nome:prompt(`Nome do candidato ${i+1}:`),
            votos:Number(prompt(`Numero de votos do candidato ${i+1}: `))
        }
        while(!part.includes(obj.partido)){
            obj.partido = prompt(`Partido do candidato ${i+1}: `).toUpperCase()
        }
        vet.push(obj)
    }

    // INFORMAR O MAIS VOTADO, SEU PARTIDO E COM QUANTOS VOTOS

    let candMaisVotado = vet[0].nome
    let qtdVotos = vet[0].votos
    let partMaisVotado = vet[0].partido
    for(let i=0; i<5; i++){
        if(vet[i].votos > qtdVotos){
            qtdVotos = vet[i].votos
            candMaisVotado = vet[i].nome
            partMaisVotado = vet[i].partido
        }
    }
    alert(prompt(`O candidato mais votado foi ${candMaisVotado} do ${partMaisVotado} com ${qtdVotos}.`))
}
