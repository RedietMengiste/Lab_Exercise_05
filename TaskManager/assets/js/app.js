const taskInput = document.querySelector("#task"); //the task input text field

const form = document.querySelector("#task-form"); //The form at the top

const filter = document.querySelector("#filter"); //the task filter text field

const taskList = document.querySelector(".collection"); //The ul

const clearBtn = document.querySelector(".clear-tasks"); //the all task clear button

const reloadIcon = document.querySelector(".fa"); //the reload button at the top navigation

// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit
form.addEventListener("submit", addNewTask);

// Clear All Tasks
clearBtn.addEventListener("click", clearAllTasks);

//   Filter Task
filter.addEventListener("keyup", filterTasks);
// Remove task event [event delegation]
taskList.addEventListener("click", removeTask);
// Event Listener for reload
reloadIcon.addEventListener("click", reloadPage);

// Add New  Task Function definition
function addNewTask(e) {
  // Check empty entry
  if (taskInput.value === "") {
    taskInput.style.borderColor = "red";

    return;
  }

  // Create an li element when the user adds a task
  const li = document.createElement("li");
  // Adding a class
  li.className = "collection-item";
  // Create text node and append it
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new element for the link
  const link = document.createElement("a");
  // Add class and the x marker for a
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);
  // Append to UL
  taskList.appendChild(li);

  e.preventDefault(); //disable form submission
}

// Clear Task Function definition
function clearAllTasks() {
  //This is the first way
  // taskList.innerHTML = '';

  //  Second Wy
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}
// Filter tasks function definition
function filterTasks(e) {
  document.querySelectorAll(".collection.item").forEach((item) => {
    if (item.firstChild.textContent.toString() === filter.value.toString()) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
// var vals, ul, li;
// vals = filter.value;
// ul = taskList;
// li = taskList.getElementsByTagName("li");
// for (i = 0; i < li.length; i++) {
//   keywords = li[i].getElementsbyClassName(".collection-item")[0];
//   // txtValue = a.textContent || a.innerText;
//   if (keywords.toUpperCase().indexOf(vals.toLowerCase()) > -1) {
//     li[i].style.display = "";
//   } else {
//     li[i].style.display = "none";
//   }
// }
// let keyword = filter.value.toLowerCase();
// //tasks.filter((keyword) => keyword.toLowerCase().indexOf(query.toLowerCase()) !== -1);

// let filterTaskList = tasks.filter(
//   (task) => task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
// );
// displayFilter(filterTaskList);
// }
// Remove Task function definition
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure about that ?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

//Reload function
function reloadPage() {
  //using the reload fun on location object
  location.reload();
}

//const cardTitle = document.querySelector(".card-title");
//document.write(5 + 6);
//cardTitle.innerHTML = "New text one";
//cardTitle.innerText = "New text 2";
//cardTitle.textContent = "New text 3";

// const li = document.createElement("li");
// li.className = "collection-item";
// li.id = "new-item";
// li.setAttribute("title", "New Item");

// const txt = document.createTextNode("Hello World");
// li.appendChild(txt);

// var el = document.getElementById("task-form");
// el.remove();

// var elem = document.querySelector('#some-element');
// elem.parentNode.removeChild(elem);
