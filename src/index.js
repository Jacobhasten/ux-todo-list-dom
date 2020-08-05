
let todos = [
    {
        completed: false,
        description: "Take Jim to the hair salon"
    },
    {
        completed: true,
        description: "Drop off wedding invitation at mailbox"
    },
    {
        completed: false,
        description: "Pick up the cake"
    },
    {
        completed: false,
        description: "Call the caterers"
    }
];

function renderTodoApp() {
    let app = document.querySelector("#app");
    let h1 = document.createElement("h1");
    let todoListElement = document.createElement("ul");
    let buttonElement = document.querySelector("btn");
    // let formElement = document.querySelector("#form");
    let formInputElement = document.querySelector("#input");

    function onButtonClick() {
        todos.push({'description' : formInputElement.value})
        console.log(todos)
    }

    // formElement.onsubmit = (e) => {
    //     e.preventDefault()
    //     formInputElement.value = " "

    // }


 

    for (let i = 0; i < todos.length; i++) {
        let todoItems = todos[i]
        let stateOfCheckbox = todoItems.completed ? 'checked' : '';
        let todoMarkup = `
            <li class="list-item">
                <input type="checkbox" ${stateOfCheckbox}/>
                 ${todoItems.description}
                </li>`

           
        
        
        
        todoListElement.innerHTML += todoMarkup;

    }
    


    h1.innerText = "Todo List"

    app.append(h1, todoListElement);
    buttonElement.addEventListener("click", onButtonClick);
    // and maybe some here
}

renderTodoApp()