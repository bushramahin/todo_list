#! /usr/bin/env node
import inquirer from "inquirer";
let arr = [];
let todo = [
    {
        name: "todo_list",
        type: "string",
        message: "Enter Item"
    }
];
let more = [
    {
        name: "moreItems",
        type: "confirm",
        message: "Do you want to add more Items?"
    }
];
let condition = true;
while (condition) {
    let { todo_list } = await inquirer.prompt(todo);
    arr.push(todo_list);
    let { moreItems } = await inquirer.prompt(more);
    if (moreItems == true) {
        condition = true;
    }
    else {
        condition = false;
        console.log(arr);
    }
}
// for(let i = 0 ; i<=10 ; i++){
//     let{todo_list} = await inquirer.prompt(todo)
//     arr.push(todo_list)
// }
// console.log("Here is your list",arr);
