var form = document.querySelector(".todo-form");        // Select Form
var error = document.getElementById("error");           // Select Error Element
var clear = document.querySelector("#clear");           // Select Clear Button
var empty = document.querySelector("#empty");           // Select Empty Button
var save = document.querySelector("#save");           // Select Save Button
var olList = document.querySelector(".todo-list");      // Select Ordered List



function newToDoItem(itemText, completed) {
    if (validateInput(itemText) !== 0){
        var listDiv = document.createElement("div");
        var listItem = document.createElement("li");
        var toDoText = document.createTextNode(itemText);
        listItem.appendChild(toDoText);
        listDiv.appendChild(listItem);
        listDiv.classList.add("listitem");

        if (completed) {
            listItem.classList.add("completed");
        }

        olList.appendChild(listDiv);
        // toDoItem.addEventListener("dblclick", toggleToDoItemState);
    }
    
}



// Validate input function
function validateInput(input){
    var res=1;
    for (var i = 0; i < olList.children.length; i++) {
        var toDo = olList.children.item(i);
        if (toDo.innerText == input){
            error.innerHTML = "Duplicate entry is not allowed!";
            res = 0;
        }
    }
    return res;
}



// Empty List Function
function emptyList(){
    return olList.innerHTML = "";     
}

// Clear Completed Function
function clearCompleted(){
    var completedItem = document.getElementsByClassName("completed");
    while (completedItem.length > 0){
        completedItem.item(0).remove();
    }
} 

// Save List Function
function saveList(){

    var toDos = [];

    for (var i = 0; i < olList.children.length; i++) {
        var toDo = olList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
    alert("Todo Saved");
}


function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}
loadList()

// Get to item completed
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

// ------------------------------       EVENTS       -------------------------------

// Form Submit Event
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    error.innerHTML = "";
    var input = document.querySelector("#todo-input").value;

    if (input.length > 1){newToDoItem(input, false);}
    // newToDoItem(input, false);
});

// Clear Completed Event
clear.addEventListener("click", ()=>{clearCompleted()});

// Empty List Event
empty.addEventListener("click", ()=>{emptyList()});


// Save List Event
save.addEventListener("click", ()=>{saveList()});

// Complete Task Event
olList.addEventListener('dblclick', function(e){
    var target = getEventTarget(e);
    target.classList.toggle("completed");
});



































/*
Assignment 10-08-2020


1. Create An Array Of Numbers 1 - 10
    - Loop through every item of the array using the 3 looping techniques
    - Add 1 to every item of the array
2. Create an array Of human objects with attribute of (name, age, nationality) age should be numbers DT
    - Loop through every item of the array using the for and foreach loop
    - Display the details of all human object
*/
