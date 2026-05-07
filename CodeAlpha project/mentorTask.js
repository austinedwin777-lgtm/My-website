// Getting Documents As Object
const input = document.getElementById("input");
const addButton = document.getElementById("addButton");
let listItems = document.getElementById("listItems");

// Creating Storage
let tasks = [];

//Renderer
function render() {
  listItems.innerHTML = "";
  
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerText = task.text;
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete"
    delBtn.addEventListener("click", () => {
      deleteTask(index)
    })
    
        li.textContent = task.completed
      ? "✔ " + task.text
      : task.text;

    // ➕ COMPLETE TOGGLE (no keyword)
    li.addEventListener("click", () => {
      task.completed = !task.completed; // update data
      render();
    });
    
    li.appendChild(delBtn);
    listItems.appendChild(li);
  })

}

function addTask(value) {
  tasks.push({ text: input.value, completed: false });
  render();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  render();
}

addButton.addEventListener("click", () => {
  addTask(input.value);
  
  input.value = "";
})