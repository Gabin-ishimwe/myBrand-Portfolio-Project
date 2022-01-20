const fileUpload = document.getElementById("file-input")
const articleName = document.getElementById("article-name")
const articleContent = document.getElementById("article-content")
const button = document.getElementById("submit")
const form = document.getElementById("form")
const inputTag = document.getElementsByTagName("input")
const keepLocal = []
button.addEventListener("click", (event) => {
     event.preventDefault()
     checkInput()
     Upload(create)
     // synch().then((results) => {
     //      results()
     // }).catch((message) => {
     //      console.log(message)
     // })

})

function checkInput() {
     const uploadValue = fileUpload.value.trim()
     const nameValue = articleName.value.trim()
     const contentValue = articleContent.value.trim()
     if (uploadValue == "") {
          errorMsg(fileUpload, "Upload file !!!", "file errorfile errorfile")
     }

     else if (uploadValue != "") {
          successMsg(fileUpload, "", "file successfile")
     }

     if (nameValue == "") {
          errorMsg(articleName, "Input article title !!!", "name errorname")
     }

     else if (nameValue != "") {
          successMsg(articleName, "", "name successname")
     }

     if (contentValue == "") {
          errorMsg(articleContent, "Add content !!!", "content errorcontent")
     }

     else if (contentValue != "") {
          if (contentValue.length < 200) {
               errorMsg(articleContent, "Article must have at least 200 characters!!!", "content errorcontent")
          }
          else {
               successMsg(articleContent, "", "content successcontent")
          }
     }
}


function errorMsg(input, message, classNamee) {
     let nameInput = input.parentNode
     let errorMsg = nameInput.querySelector("small")
     errorMsg.textContent = message

     nameInput.className = classNamee
     console.log(nameInput)

}

function successMsg(input, message, classNamee) {
     let nameInput = input.parentNode
     let errorMsg = nameInput.querySelector("small")
     errorMsg.textContent = message

     nameInput.className = classNamee
}

function Upload(callBack) {
     const uploadValue = fileUpload.files
     const reader = new FileReader()
     reader.addEventListener("load", () => {
          localStorage.setItem("img", reader.result)
          // console.log(reader.result)
          console.log(localStorage.getItem("img"))
          callBack()

     })
     reader.readAsDataURL(uploadValue[0])
     console.log(uploadValue[0].name)
}

// function synch() {
//      return new Promise((resolve, reject) => {
//           const uploadValue = fileUpload.files
//           const reader = new FileReader()
//           reader.addEventListener("load", () => {
//                localStorage.setItem("img", reader.result)
//           })
//           reader.readAsDataURL(uploadValue[0])
//           if(uploadValue[0].name) {
//                resolve(create)
//           }
//           else {
//                reject("nothing sent on local storage")
//           }
//      })
// }


// let synch = new Promise((resolve, reject) => {
//      const uploadValue = fileUpload.files
//      if (uploadValue != "") {
//           resolve(Upload())
//      }
//      else {
//           reject(checkInput())
//      }
// })

// synch.then((results) => {
//      results
// }).catch((results) => {
//      results
// })

function create() {
     var storeImg = ""
     const uploadValue = localStorage.getItem("img")
     const nameValue = articleName.value.trim()
     const contentValue = articleContent.value.trim()
     if (uploadValue != "" && nameValue != "" && contentValue != "" && contentValue.length > 200) {
          const storeInputs = {file: uploadValue, nameArticle: nameValue, content: contentValue, thumbLike:[0], handLike:[0], bulbLike:[0], comments: []}
          keepLocal.push(storeInputs)
          const stored = localStorage.getItem("updatingArticle")
          if (stored) {
               const retrival = JSON.parse(stored)
               retrival.push(storeInputs)
               console.log(storeImg)
               localStorage.setItem("updatingArticle", JSON.stringify(retrival))
          } else {
               localStorage.setItem("updatingArticle", JSON.stringify(keepLocal))
          }
          form.reset()
          window.location.href = "adminpanel.html"
     }

     
}


