let tarefas = []

function adicionarTarefa() {

    //recebe valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    // se o valor do input for vazio então mostre uma mensagem de erro para o usuário
    if (tarefa == "") {
        //mostre uma mensagem de erro
        let mensagemErro = "Digite uma tarefa para adicioná-la a sua lista!"
        mensagem.textContent = mensagemErro
    } else {
        //mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso

        tarefas.push(tarefa)
        renderizarTarefas()
        
    }

    //limpa o input do usuário
    inputTarefa.value = ""
}

function renderizarTarefas() {

    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    
    for (let i = 0; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefas[i]
        
        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "x"
        botaoRemover.onclick = () => removerTarefa(i)
        
        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "editar"
        botaoEditar.onclick = () => editarTarefa(i)

        novaTarefa.appendChild(botaoEditar)
        novaTarefa.appendChild(botaoRemover)
        listaTarefas.appendChild(novaTarefa)
    }

}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Escreva a nova tarefa: ")
    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada
        mensagem.textContent = "Tarefa editada!"
        renderizarTarefas()
    } 
}

function limparLista() {
    if (tarefas.length > 0) {
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas removida com sucesso"
    }
    else {
        mensagem.textContent = "Não há tarefas para remover"
    }
}