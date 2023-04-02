const inputBar = document.querySelector(".inputBar");
let userList = ["서류 전달하기"];
const todoList = document.querySelector(".todoList");
const clrBtn = document.querySelector(".clrBtn");

clrBtn.addEventListener("click", () => (todoList.innerHTML = ""));

for (let i = 0; i < userList.length; i++) {
  let child = document.createElement("input");
  child.value = i + 1 + "." + userList[i];
  let childLi = document.createElement("li");
  childLi.appendChild(child);
  todoList.appendChild(childLi);
}

inputBar.addEventListener("keyup", function (e) {
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
