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
     storeQuerie(getLocation)
     // getLocation()
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

const allQueries = []
function storeQuerie(callBack) {
     const nameValue = userName.value.trim()
     const emailValue = userEmail.value.trim()
     const messageValue = userMessage.value.trim()
     if (nameValue != "" && emailValue != "" && messageValue != "" && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue)) {
          const all = {"names": nameValue, "emails": emailValue, "messages": messageValue, "date": new Date(), "location": ""}
          console.log(all)
          allQueries.push(all)
          const stored = localStorage.getItem("queryStore");
          if (stored) {
               const storing = JSON.parse(stored)
               storing.push(all)
               localStorage.setItem("queryStore", JSON.stringify(storing))
               console.log(storing)
               form.reset()
               callBack()
          }
          else {
               localStorage.setItem("queryStore", JSON.stringify(allQueries))
               form.reset()
               callBack()
          }



     }    
}

function getLocation() {
     var listLocation = []
     function successCall(position) {
          console.log(position)
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          console.log(latitude)
          console.log(longitude)

          const locationAPI = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=13f33db6084847fcae6bf192cff57501`
          fetch(locationAPI)
          .then(response => response.json())
          .then(data => {
               console.log(data)
               listLocation.push(data.results[0].formatted)
               console.log(listLocation)
               const locations = localStorage.getItem("getLocation")
               console.log(locations)
               const changeList = JSON.parse(locations)
               // console.log(changeList)
               if(locations) {
                    changeList.push(listLocation[0])
                    // console.log(changeList)
                    localStorage.setItem("getLocation", JSON.stringify(changeList))
                    const retriveLocation = localStorage.getItem("queryStore")
                    const changeLocation = JSON.parse(retriveLocation)
                    changeLocation[changeList.length - 1].location = changeList[changeList.length - 1]
                    console.log(changeLocation)
                    if(retriveLocation) {
                         localStorage.setItem("queryStore", JSON.stringify(changeLocation))
                    }
               }

               else {
                    localStorage.setItem("getLocation", JSON.stringify(listLocation))
                    const retriveLocation = localStorage.getItem("queryStore")
                    const changeLocation = JSON.parse(retriveLocation)
                    changeLocation[listLocation.length - 1].location = listLocation[listLocation.length - 1]
                    console.log(changeLocation)
                    if(retriveLocation) {
                         localStorage.setItem("queryStore", JSON.stringify(changeLocation))
                    }
               }
               
          })
          // .catch(error => {
          //      console.log("there is an error somewhere")
          // })
     }

     function errorCall(errorMessage) {
          console.log(errorMessage)
     }
     navigator.geolocation.getCurrentPosition(successCall, errorCall)
     // console.log(location)
}