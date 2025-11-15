console.log("hello world~!");

const inputUsername = document.getElementById("input-username");

inputUsername.addEventListener("input", () => {
  localStorage.setItem("username", inputUsername.value.trim());
});

const savedName = localStorage.getItem("username");
if (savedName) {
  inputUsername.value = savedName;
}

let todos = [];
let activeFilter = null;

const buttonTodoTag = document.getElementById("button-todo-tag");
const tagsRadio = document.getElementById("tags-radio");
const buttonTagSave = document.getElementById("button-tag-save");
const tagLabel = document.getElementById("tag-label");

let selectedTag = null;

buttonTodoTag.addEventListener("click", () => {
  tagsRadio.classList.toggle("hidden");
});

buttonTagSave.addEventListener("click", () => {
  const tagPicked = document.querySelector("input[name='tag']:checked");

  if (tagPicked) {
    selectedTag = tagPicked.value;
    tagLabel.textContent = selectedTag;
  }
  tagsRadio.classList.add("hidden");
});

const ulTodoList = document.getElementById("todo-list");
function renderTodos() {
  ulTodoList.innerHTML = "";

  if (todos.length === 0) {
    ulTodoList.innerHTML = `<span class="text-gray-600">nothing to do, yet...<br />find something to do, add it here<br />just click an item to cross it out</span>`;
    return;
  }

  const visibleTodos = activeFilter ? todos.filter((t) => t.tag === activeFilter) : todos;

  if (visibleTodos.length === 0) {
    ulTodoList.innerHTML = `<span class="text-gray-600">
    No item for this tag...
    </span>`;
    return;
  }

  visibleTodos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "cursor-pointer hover:text-pink-300 focus:text-pink-300 transition-colors duration-300";

    li.innerHTML = `
    ${todo.text}
    <span class="px-1 bg-yellow-800 text-yellow-300 rounded">#${todo.tag}</span>
    ${todo.date}
    `;

    li.addEventListener("click", () => {
      li.classList.add("line-through", "opacity-50");

      setTimeout(() => {
        todos = todos.filter((t) => t !== todo);
        saveTodos();
      }, 1000);
    });

    ulTodoList.appendChild(li);
  });
}

const storedTodos = JSON.parse(localStorage.getItem("todos"));
if (storedTodos) {
  todos = storedTodos;
  renderTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

function addTodo() {
  const inputText = document.getElementById("input-todo-text");
  const inputDate = document.getElementById("input-todo-date");

  const textVal = inputText.value.trim();
  const dateVal = inputDate.value.trim();
  const tagVal = selectedTag;

  console.log("input:", textVal, dateVal, tagVal);

  if (!textVal || !dateVal || !tagVal) {
    alert("fill all fields, please");
    return;
  }
  console.log("success!");
  console.log("todo data:", {
    text: textVal,
    date: dateVal,
    tag: tagVal,
  });

  todos.push({
    text: textVal,
    date: dateVal,
    tag: tagVal,
  });
  saveTodos();

  inputText.value = "";
  inputDate.value = "";
  selectedTag = null;
  tagLabel.textContent = "Tag";
}

function getAvailableTags() {
  const set = new Set(todos.map((tags) => tags.tag));
  return Array.from(set);
}
let filterIndex = -1;

const filterLabel = document.getElementById("filter-label");
const buttonTodoFilter = document.getElementById("button-todo-filter");
buttonTodoFilter.addEventListener("click", () => {
  const tags = getAvailableTags();

  if (tags.length === 0) {
    alert("No tags available, yet..");
    return;
  }
  filterIndex++;

  if (filterIndex >= tags.length) {
    filterIndex = -1;
    activeFilter = null;
    filterLabel.textContent = "Filter";
  } else {
    activeFilter = tags[filterIndex];
    filterLabel.textContent = "#" + activeFilter;
  }
  renderTodos();
});

function clearTodos() {
  todos = [];
  localStorage.removeItem("todos");
  renderTodos();
}
