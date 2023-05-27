const input = document.querySelector("#name")
const button = document.querySelector("#btn-page")

button.addEventListener("click",()=>{
    const userName = input.value
    console.log(userName)
    return userName
})

