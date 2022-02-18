const adminName = document.getElementById("name")
const adminEmail = document.getElementById("email")
const adminPassword = document.getElementById("password")
const button = document.getElementById("submit")
const form = document.getElementById("form-control")
const inputTag = document.getElementsByTagName("input")

button.addEventListener("click", (event) => {
     event.preventDefault()
     checkInput()
     login()
})

function checkInput() {
     // const nameValue = adminName.value.trim()
     const emailValue = adminEmail.value.trim()
     const passwordValue = adminPassword.value.trim()

     // if (nameValue == "") {
     //      errorMsg(adminName, "Input your name please!!!", "name errorname")
     // }

     // else if (nameValue != "") {
     //      successMsg(adminName, "", "name successname")
     // }

     if (emailValue == "") {
          errorMsg(adminEmail, "Input your Email please!!!", "email erroremail")
     }

     else if (emailValue != "") {
          if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ .test(emailValue)) {
               successMsg(adminEmail, "", "email successemail")
          }
          else {
               errorMsg(adminEmail, "Invalid Email!!!", "email erroremail")

          }
     }

     if (passwordValue == "") {
          errorMsg(adminPassword, "Wrong password!!!", "password errorpassword")
     }

     else if (passwordValue != "") {
          // if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(passwordValue)) {
          successMsg(adminPassword, "", "password successpassword")
          // }
          // else {
          //      errorMsg(adminPassword, "Invalid password characters!!!", "password errorpassword")
          // }
     }

     // else if (nameValue != "" && emailValue != "" && passwordValue != "") {
     //      successMsg(adminName, "", "name successname")
     //      successMsg(adminEmail, "", "email successemail")

     //      successMsg(adminPassword, "", "password successpassword")

     //      window.location.href = "index.html";
     // }
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



function login() {
     // const nameValue = adminName.value.trim()
     const emailValue = adminEmail.value.trim()
     const passwordValue = adminPassword.value.trim()
     if (emailValue != "" && passwordValue != "" && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ .test(emailValue)) {
          fetch("https://mybrand-backend-deploy.herokuapp.com/api/v1/user/login", {
               method: "POST",
               headers: {
                    "Content-Type": "application/json"
               },
               body: JSON.stringify({
                    email: emailValue,
                    password: passwordValue
               })
          }).then(res => {
               return res.json()
          }).then(data => {
               console.log(data)
               if(data.message == "email doesn't exist!!!") {
                    swal("Error!!","Email doesn't exist!!!", "error", {
                         button: false
                    });
               }
               else if (data.error) {
                    swal("Error!!","Password doesn't exist!!!", "error", {
                         button: false
                    });
               }
               else {
                    const tokenSecret = localStorage.setItem("token", data.access)
                    window.location.href = "admingeneral.html";
               }
               
          })
          .catch(error => {
               console.log(error)
          })
          // const all = {emails: emailValue, passwords: passwordValue}
          // console.log(all)
          // const storage = localStorage.getItem("Security")
          // if(storage) {
          // const store = Object.values(JSON.parse(storage))
          // store.push(all)
          // localStorage.setItem("Security", JSON.stringify({...store}))
          // window.location.href = "admingeneral.html";
          // }
          // else {
          // localStorage.setItem("Security", JSON.stringify({0: all}))
          

     // }
     

     }
     // const all = {names: nameValue, emails: emailValue, passwords: passwordValue}
     // console.log(all)
     // const storage = localStorage.getItem("querieStorage")
     // if(storage) {
     //      const store = Object.values(JSON.parse(storage))
     //      store.push(all)
     //      localStorage.setItem("querieStorage", JSON.stringify({...store}))
     //      window.location.href = "index.html";


     // }
     // else {
     //      localStorage.setItem("querieStorage", JSON.stringify({0: all}))
     //      window.location.href = "admingeneral.html";

     // }

}
