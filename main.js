import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    //  let todoQuestion = await  inquirer.prompt(
    //   [   
    //        {
    //           name: "fitstQuestion",
    //           type: "input",
    //           message: "what would you like to add in you Todos? ",
    //         },
    //        {
    //           name: "SecondQuestion",
    //           type: "confirm",  // when type is confirm ans is in yes or no
    //           message: "would you like to add more in your Todos? ",
    //           default: "true",
    //         },
    //     ]      
    //   );
    //     todos.push(todoQuestion.fitstQuestion);
    //     console.log(todos);
    //    // the loop is runing on the basd of this variable condition 
    //   condition = todoQuestion.SecondQuestion;  
    //..............................home Work .................................
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "select an operation",
            choices: ["Add", "Update", "View", "Delete", "Exit"],
        }
    ]);
    // ........................ Add ....................................
    if (ans.select === "Add") {
        let addTodo = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "Add item in the list",
            //  .............. Empty input ............................
            validate: function (input) {
                if (input.trim() == "") {
                    return "please enter  a non-empty item.";
                }
                return true;
            }
        });
        if (addTodo.todo.trim() !== "") {
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo) // es trha k console se list ki form me ayga .
            );
        }
    }
    // ......................... Update ...........................
    if (ans.select === "Update") {
        let UpdateTodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "Update item in the list",
            choices: todos.map(item => item) // map method  array k ander jitne b elements hoty h unko ak ak kar k call karta . 
        });
        let addTodo = await inquirer.prompt({
            name: "todo",
            type: "input",
            message: "Add item in the list",
        });
        let newTodo = todos.filter(val => val !== UpdateTodo.todo);
        todos = [...newTodo, addTodo.todo];
        todos.forEach(todo => console.log(todo));
    }
    // ................................ View ..............................
    if (ans.select === "View") {
        console.log("***** TO-DO LIST *****");
        todos.forEach(todo => console.log(todo));
    }
    //........................... Delete ............................
    if (ans.select === "Delete") {
        let DeleteTodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "Delete item in the list",
            choices: todos.map(item => item)
        });
        let newTodo = todos.filter(val => val !== DeleteTodo.todo);
        todos = [...newTodo];
        todos.forEach(todo => console.log(todo));
    }
    // ....................... Exit .........................
    if (ans.select === "Exit") {
        console.log("Exiting Program...");
        condition = false;
    }
}
