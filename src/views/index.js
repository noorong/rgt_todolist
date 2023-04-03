// import * as userList from "../services/db"
let todoList =  ["서류 전달하기"];
const inputBar = document.querySelector(".inputBar");
const olList = document.querySelector(".olList");
const clrBtn = document.querySelector(".clrBtn");

clrBtn.addEventListener("click", () => {
  olList.forEach((el) => el.innerHTML = "")
  todoList = [];
});
renderList();

//list 등록
inputBar.addEventListener("keyup", function (e) {
  if (todoList.length < 5) {
    if (e.keyCode === 13) {
      if (e.target.value !== "") {
        olList.innerHTML = ""
        todoList.unshift(e.target.value);
        renderList();
      }
      inputBar.value = "";
    }
  } else {
    alert("5개 이상 등록할 수 없습니다.");
    inputBar.value = "";
  }
});



//받아온 데이터 li에 정보 삽입
function renderList(){
  for (let i = 0; i < todoList.length; i++) {
    console.log(todoList)
    if(todoList[i] !== ""){
    olList.insertAdjacentHTML(
      "afterbegin",
      `
      <div>
      
      <select class="progress">
      <option value="">진행상황</option>
      <option value="Done" >Done</option>
      <option value="Ongoing">Ongoing</option>
      <option value="Delay">Delay</option>
    </select>
    <li>${todoList[i]}</li>  
      </div>       
      `
      );
  }
  }
  
  }

//사용자 이름 등록
const userName = document.querySelector(".userName");
userName.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    userName.parentNode.classList.add(userName.value);
    userName.setAttribute("disabled", "true");
  }
});

//진행상황 체크
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
