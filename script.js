const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");

btnAdicionar.addEventListener("click", function() {
    const texto = inputTarefa.value;

    if (texto.trim() === "") {
        alert("Digite uma tarefa válida!");
        return;
    }

    const novaTarefa = document.createElement("li");
    novaTarefa.textContent = texto;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.classList.add("btn-remover");

    novaTarefa.addEventListener("click", function() {
        novaTarefa.classList.toggle("concluida");
    });

    btnRemover.addEventListener("click", function(event) {
        event.stopPropagation(); 
        listaTarefas.removeChild(novaTarefa); 
    });

    novaTarefa.appendChild(btnRemover);
    listaTarefas.appendChild(novaTarefa);

    inputTarefa.value = "";
    inputTarefa.focus();
});