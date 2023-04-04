let todoList =  ["서류 전달하기","서류 전달하기","서류 전달하기"];
const inputBar = document.querySelector(".inputBar");
const olList = document.querySelector(".olList");
const clrBtn = document.querySelector(".clrBtn");

clrBtn.addEventListener("click", () => {
  olList.innerHTML = "";
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
        const selectElements = document.querySelectorAll('select.progress');
        selectElements.forEach(selectElement => {
          selectElement.addEventListener('change', (event) => {
            const selectedValue = event.target.value;
            const divElement = event.target.parentNode;
            changeColor(selectedValue, divElement);
          });
        });
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
const userColumn = document.querySelector(".userColumn");
const userName = document.querySelector(".userName");
userName.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    userName.parentNode.classList.add(userName.value);
    userName.setAttribute("disabled", "true");
    userColumn.children[1].removeAttribute("disabled");
    userColumn.children[1].focus();
  }  
});

//진행상황 체크,
const selectElements = document.querySelectorAll('select.progress');
selectElements.forEach(selectElement => {
  selectElement.addEventListener('change', (event) => {
  const selectedValue = event.target.value;
  const divElement = event.target.parentNode;
  changeColor(selectedValue,divElement);
  });
});

function changeColor(selectedValue,divElement) {
  switch (selectedValue) {
    case 'Done':
      divElement.style.backgroundColor = 'greenyellow';
      break;
    case 'Ongoing':
      divElement.style.backgroundColor = 'orange';
      break;
    case 'Delay':
      divElement.style.backgroundColor = 'pink';
      break;
    default:
      divElement.style.backgroundColor = 'white';
      break;
  }
}