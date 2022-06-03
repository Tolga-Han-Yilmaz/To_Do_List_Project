const todoButton = document.querySelector("#todo-form .btn");
const formInput = document.querySelector("#todo");
const todosDiv = document.getElementById("todolar");
const cardAdd = document.querySelector("#todolar .card");
const progress = document.getElementById("progress");
const done = document.getElementById("done");

todoButton.addEventListener("click", todoAdd);
function todoAdd() {
  const newValue = formInput.value.trim();
  if (newValue == "") {
  } else {
    cardAdd.innerHTML += `
    <div class="card-body my-0">
      <div class="d-flex justify-content-evenly">
        <span class="badge text-bg-danger">X</span>
        <span class="badge text-bg-success">In Progress</span>
      </div>
      ${newValue} 
    </div>
    
    `;
    formInput.value = "";
  }
}

todosDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-dark")) {
    e.target.previousElementSibling.previousElementSibling.innerHTML = "";
  } else if (e.target.classList.contains("text-bg-danger")) {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.classList.contains("text-bg-success")) {
    let todoProgress = e.target.parentElement.parentElement;
    todoProgress.remove();

    e.target.className = `badge text-bg-info`;
    e.target.innerText = "Done";
    progress.innerHTML += todoProgress.innerHTML;
  } else if (e.target.classList.contains("text-bg-info")) {
    let progressDone = e.target.parentElement.parentElement;

    progressDone.remove();
    e.target.remove();
    done.innerHTML += progressDone.innerHTML;
  }
});
