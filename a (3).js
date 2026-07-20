const input = document.getElementById("nameInput")
const data = document.getElementById("data")

input.addEventListener("keyup",()=>{
data.innerText = "Hey" +" "+ input.value + "," +" How are you"
})