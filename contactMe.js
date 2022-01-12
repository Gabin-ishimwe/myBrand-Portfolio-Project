const userName = document.getElementById("name")
const userEmail = document.getElementById("email")
const userMessage = document.getElementById("message")
const button = document.getElementById("submit-button")
const form = document.getElementById("form-control")
const inputTag = document.getElementsByTagName("input")

button.addEventListener("click", (event) => {
     event.preventDefault()
     checkInput()

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
          successMsg(userEmail, "", "form-user-email correctemail")
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
     console.log(nameInput)

}

// function errorEmail(input, message) {
//      let nameInput = input.parentNode
//      let errorMsg = nameInput.querySelector("small")
//      errorMsg.textContent = message

//      nameInput.className = "form-user-email erroremail"

// }

// function InvalidMessage(input, message) {
//      let nameInput = input.parentNode
//      let errorMsg = nameInput.querySelector("small")
//      errorMsg.textContent = message

//      nameInput.className = "form-user-messsage invalidtext"

// }

function successMsg(input, message, classNamee) {
     let nameInput = input.parentNode
     let errorMsg = nameInput.querySelector("small")
     errorMsg.textContent = message

     nameInput.className = classNamee
}

// function successEmail(input, message) {
//      let nameInput = input.parentNode
//      let errorMsg = nameInput.querySelector("small")
//      errorMsg.textContent = message

//      nameInput.className = "form-user-email correctemail"
// }

// function successMessage(input, message) {
//      let nameInput = input.parentNode
//      let errorMsg = nameInput.querySelector("small")
//      errorMsg.textContent = message

//      nameInput.className = "form-user-message text"
// }


