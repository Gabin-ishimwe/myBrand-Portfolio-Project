const userName = document.getElementById("name")
const userEmail = document.getElementById("email")
const userMessage = document.getElementById("message")
const button = document.getElementById("submit-button")
const form = document.getElementById("form-control")
const inputTag = document.getElementsByTagName("input")
// const querieContainer = document.getElementById("container")
button.addEventListener("click", (event) => {
     event.preventDefault()
     checkInput()
     storeQuerie()
     // insertQuerie()
     // userName.value = ""
     // userEmail.value = ""
     // userMessage.value = ""
})

function checkInput() {
     const nameValue = userName.value.trim()
     const emailValue = userEmail.value.trim()
     const messageValue = userMessage.value.trim()

     if (nameValue == "") {
          errorMsg(userName, "Input your name please!!!", "form-user-name errorname")
     }

     else if (nameValue != "") {
          successMsg(userName, "", "form-user-name correctname")
     }

     if (emailValue == "") {
          errorMsg(userEmail, "Input your Email please!!!", "form-user-email erroremail")
     }

     else if (emailValue != "") {
          let checkArt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
          if (checkArt.test(emailValue)) {
               successMsg(userEmail, "", "form-user-email correctemail")
          }

          else {
          errorMsg(userEmail, "Invalid Email!!!", "form-user-email erroremail")
               
          }
     }

     if (messageValue == "") {
          errorMsg(userMessage, "Leave a message please!!!", "form-user-message invalidtext")
     }

     else if (messageValue != "") {
          successMsg(userMessage, "", "form-user-message text")
     }
}


function errorMsg(input, message, classNamee) {
     let nameInput = input.parentNode
     let errorMsg = nameInput.querySelector("small")
     errorMsg.textContent = message

     nameInput.className = classNamee
     // console.log(nameInput)

}


function successMsg(input, message, classNamee) {
     let nameInput = input.parentNode
     let errorMsg = nameInput.querySelector("small")
     errorMsg.textContent = message

     nameInput.className = classNamee
}


function storeQuerie() {
     const nameValue = userName.value.trim()
     const emailValue = userEmail.value.trim()
     const messageValue = userMessage.value.trim()
     if (nameValue != "" && emailValue != "" && messageValue != "" && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue)) {
          const all = {"names": nameValue, "emails": emailValue, "messages": messageValue, "date": new Date()}
          console.log(all)
          
          const stored = localStorage.getItem("queryStore");
          if (stored) {
               const storing = Object.values(JSON.parse(stored))
               storing.push(all)
               localStorage.setItem("queryStore", JSON.stringify({...storing}))
               console.log(storing)

               form.reset()
          }
          else {
               localStorage.setItem("queryStore", JSON.stringify({0: all}))
               form.reset()
          }



     }    
}


