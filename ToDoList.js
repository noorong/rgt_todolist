const inputList = document.querySelector(".inputList")


inputList.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        asda(e)
    }
  });

function asda(e){ 
    console.log(e.target.value)
}
