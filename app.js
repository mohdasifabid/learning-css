const btnClick = document.querySelector(".btn-click")
const input = document.querySelector(".input-box")
const output = document.querySelector(".output")


btnClick.addEventListener("click",()=>{
let inputVal = input.value;
   let divForOutput = document.createElement("div")
   divForOutput.textContent = inputVal
   divForOutput.classList.add("box")
   output.appendChild(divForOutput)
})
