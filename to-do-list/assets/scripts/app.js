// selectors
let toDoInputElement = document.getElementById("to-do-input");
let addToDoBtnElement = document.getElementById("add-to-do");
let toDoListElement = document.getElementById("to-do-list");
let mainElement = document.getElementById("main-section");

let my_list = [];

// event listeners
addToDoBtnElement.addEventListener("click", addTask);

// functions
function addTask(){
    const toDoItem = toDoInputElement.value;
    if(toDoItem !== ""){
        const listObject = {task: toDoItem, isCompleted: false};
        my_list.push(listObject);
        updateTask();
        toDoInputElement.value = "";
    }
}

function completeTask(button){
    const id = button.parentNode.id;
    my_list[id]['isCompleted'] = true;
    updateTask();
}

function deleteTask(button){
    const id = button.parentNode.id;
    my_list.splice(id, 1);
    updateTask();
}

function updateTask(){
    toDoListElement.remove();
    toDoListElement = document.createElement("section");
    toDoListElement.setAttribute("id", "to-do-list");

    if(!(my_list.length === undefined || my_list.length == 0)){
        for (let i=0; i<my_list.length; i++){
            let listItem = document.createElement("div");
            listItem.setAttribute("id", i);
            listItem.setAttribute("class", "list-item");
            let listSpanChild = document.createElement("span");
            let listBtnCompleteChild = document.createElement("button");
            let listBtnDeleteChild = document.createElement("button");

            listSpanChild.setAttribute("class", "task");
            listSpanChild.innerText = my_list[i]['task'];
            
            listBtnCompleteChild.setAttribute("id", "complete-to-do");
            listBtnCompleteChild.setAttribute("onclick", "completeTask(this)");
            listBtnCompleteChild.innerText = "Complete";
            
            listBtnDeleteChild.setAttribute("id", "delete-to-do");
            listBtnDeleteChild.setAttribute("onclick", "deleteTask(this)");
            listBtnDeleteChild.innerText = "Delete";

            if(my_list[i]['isCompleted']){
                listSpanChild.setAttribute("id", "task-complete");
                listBtnCompleteChild.setAttribute("disabled", true);
            }

            listItem.appendChild(listSpanChild);
            listItem.appendChild(listBtnCompleteChild);
            listItem.appendChild(listBtnDeleteChild);
            toDoListElement.appendChild(listItem);
        }
        mainElement.appendChild(toDoListElement);
    }
}