// import * as userList from "../services/db"
let userList =  ["서류 전달하기"];
const inputBar = document.querySelector(".inputBar");
const todoList = document.querySelector(".todoList");
const clrBtn = document.querySelector(".clrBtn");

clrBtn.addEventListener("click", () => (todoList.innerHTML = ""));

for (let i = 0; i < userList.length; i++) {
  todoList.children[0].children[1].innerHTML = userList[i];
}

inputBar.addEventListener("keyup", function (e) {
  console.log(e);
  if (userList.length < 5) {
    if (e.keyCode === 13) {
      insertList(e);
      inputBar.value = "";
    }
  } else {
    alert("5개 이상 등록할 수 없습니다.");
    inputBar.value = "";
  }
});

function insertList(e) {
  userList.push(e.target.value);

  let child = document.createElement("input");
  child.value = userList[userList.length - 1];
  let childLi = document.createElement("li");
  childLi.appendChild(child);
  todoList.appendChild(childLi);
}

const userName = document.querySelector(".userName");
userName.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    console.log(123);
    userName.parentNode.classList.add(userName.value);
    userName.setAttribute("disabled", "true");
  }
});

const progress = document.querySelector('.progress');
progress.addEventListener('change',  changeBackColor)

function changeBackColor() {
  if(progress.options.selectedIndex === 1) 
  progress.parentElement.style.backgroundColor = 'greenyellow'
  else if(progress.options.selectedIndex === 2) 
  progress.parentElement.style.backgroundColor = 'orange'
  else if(progress.options.selectedIndex === 3) 
  progress.parentElement.style.backgroundColor = 'pink'
}
