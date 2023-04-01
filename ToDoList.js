const inputBar = document.querySelector(".inputBar")
const userList = [0,1,2,3,4]
const todoList = document.querySelector(".todoList");

for (let i = 0; i < userList.length; i++) {
    let child = document.createElement("input")
    child.value = userList[i]
    let childLi = document.createElement("li")
    childLi.appendChild(child)
    todoList.appendChild(childLi)
}

// inputBar.addEventListener("keyup", function (e) {
//     if (e.keyCode === 13) {
//         insertList(e)
//     }
//   });

// function insertList(e) { 
//     console.log(e.target.value)
// }
