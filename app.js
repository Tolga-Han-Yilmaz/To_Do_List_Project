const todoButton = document.querySelector("#todo-form .btn");
const formInput = document.querySelector("#todo");
const todosDiv = document.getElementById("todolar");
const cardAdd = document.querySelector("#todolar .card");
const progress = document.getElementById("progress");
const done = document.getElementById("done");
const deleteBtn = document.getElementById("delete");
const progresBtn = document.getElementById("progres");

todoButton.addEventListener("click", todoAdd);
function todoAdd() {
  const newValue = formInput.value.trim();
  if (newValue == "") {
  } else {
    cardAdd.innerHTML += `
    <div class="card-body my-0">
      <div class="d-flex justify-content-evenly">
      <h5>${newValue}</h5>
        <span class="badge text-bg-danger" id="delete">X</span>
        <span class="badge text-bg-success" id="progres">In Progress</span>
      </div>
    </div>
    
    `;
    formInput.value = "";
  }
}

todosDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-dark")) {
    console.log(e.target.id === "clear-todos");
    // e.target.previousElementSibling.innerHTML = "";
    if (e.target.id === "clear-todos") {
      cardAdd.innerHTML = "";
    } else if (e.target.id === "clear-progress") {
      progress.innerHTML = "";
    } else if (e.target.id === "clear-done") {
      done.innerHTML = "";
    }
  } else if (e.target.classList.contains("text-bg-danger")) {
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
  } else if (e.target.classList.contains("text-bg-success")) {
    let text = e.target.parentElement.children[0].innerText;
    progress.innerHTML += `
    <div class="card-body my-0">
    <div class="d-flex justify-content-evenly">
    <h5>${text}</h5>
      <span class="badge text-bg-danger" id="delete">X</span>
      <span class="badge text-bg-info" id="progres">Done</span>
    </div>
  </div>
  `;
    e.target.parentElement.parentElement.remove();
  } else if (e.target.classList.contains("text-bg-info")) {
    let text = e.target.parentElement.children[0].innerText;
    done.innerHTML += `
    <div class="card-body my-0">
    <div class="d-flex justify-content-evenly">
    <h5>${text}</h5>
      <span class="badge text-bg-danger" id="delete">X</span>
    </div>
  </div>
    `;
    e.target.parentElement.parentElement.remove();
  }
});
