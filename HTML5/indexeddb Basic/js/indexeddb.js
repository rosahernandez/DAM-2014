window.indexedDB = window.indexedDB || window.mozIndexedDB ||
                window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction ||
                window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange ||
                window.webkitIDBKeyRange || window.msIDBKeyRange;

var db = null;

function onerror(e) {
    console.log(e);
}

function open () {
    var version = 4;
    var request = indexedDB.open("todo-list", version);

    request.onupgradeneeded = function(e) {
        db = e.target.result;

        if (db.objectStoreNames.contains('todo-list'))
            db.deleteObjectStore('todo-list');

        var store = db.createObjectStore("todo-list",
                    { keyPath: "timeStamp" });
    };

    request.onerror = onerror;

    request.onsuccess = function(e) {
        db = e.target.result;
        console.log("DB opened");
    };
}

function add (todoText) {
    var transaction = db.transaction(["todo-list"], "readwrite");
    var store = transaction.objectStore("todo-list");

    var data = {
        "text": todoText,
        "timeStamp": new Date().getTime(),
        "estado": "true"
    };
    //machaca el valor si esta
    var request = store.put(data);

    request.onsuccess = function(e) {
        console.log("Sucessful add: "+e);
    };

    request.onerror = function(e) {
        console.log("Error adding: ", e);
    };
}

function update (todoText) {
    var transaction = db.transaction(["todo-list"], "readwrite");
    var store = transaction.objectStore("todo-list");
    var singleKeyRange = IDBKeyRange.only(todoText);
    var request = store.openCursor(singleKeyRange);

    request.onsuccess = function(e) {
        var cursor = e.target.result;
        if (cursor) {
            var tarea = cursor.value;
            tarea.text = "MODIFICADO";
            store.put(tarea);
            cursor.continue();
        }
        console.log("Sucessful add: "+e);
    };

    request.onerror = function(e) {
        console.log("Error updating: ", e);
    };
}

function borrar () {
    var transaction = db.transaction(["todo-list"], "readwrite");
    var store = transaction.objectStore("todo-list");

    request.onsuccess = function(e) {
        var key = document.getElementById("todo").value;
        store.delete(parseInt(key));
        console.log("Sucessful delete: "+e);
    };

    request.onerror = function(e) {
        console.log("Error deleting: ", e);
};


function getAllTodoItems() {
    var todos = document.getElementById("todoItems");
    todos.innerHTML = "";

    var transaction = db.transaction(["todo-list"]);
    var store = transaction.objectStore("todo-list");

    var cursorRequest = store.openCursor();

    cursorRequest.onsuccess = function(e) {
        var result = e.target.result;
        if(!!result == false) return;

        console.log(result.value)
        result.continue();
    };

    cursorRequest.onerror = onerror;
};

function addTodo() {
    var todo = document.getElementById("todo");
    add(todo.value);
    todo.value = "";
}

function updateTodo() {
    var todo = document.getElementById("todo");
    update(todo.value);
    todo.value = "";
}

function deleteTodo() {
    var todo = document.getElementById("todo");
    borrar(todo.value);
    todo.value = "";
}

function init() {
    open();
}

window.addEventListener("DOMContentLoaded", init, false);
