const fileUpload = document.getElementById("file-input")
const articleName = document.getElementById("article-name")
const articleContent = document.getElementById("article-content")
const button = document.getElementById("submit")
const form = document.getElementById("form")
const inputTag = document.getElementsByTagName("input")
const keepLocal = []
const uploadValue = fileUpload.value.trim()
const nameValue = articleName.value.trim()
const contentValue = articleContent.value.trim()
button.addEventListener("click", (event) => {
     event.preventDefault()
     checkInput()
     Upload(update)

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

const retriveUpdate = localStorage.getItem("currentUpdate")
const changeUpdate = JSON.parse(retriveUpdate)
const retriveFull = localStorage.getItem("updatingArticle")
const changeFull = JSON.parse(retriveFull)
var index = 0
for (var i = 0; i < changeFull.length; i++) {
     for (var j = 0; j < changeUpdate.length; j++) {
          if (changeFull[i].nameArticle == changeUpdate[j].nameArticle) {
               index = i
               console.log(index)
               fileUpload.file = changeUpdate[0].file
               articleName.value = changeUpdate[0].nameArticle
               articleContent.value = changeUpdate[0].content
               console.log(changeUpdate)
          }
     }
}

function update() {
     for (var m = 0; m < changeFull.length; m++) {
          if(index == m) {
               changeUpdate[0].file = localStorage.getItem("img")
               changeUpdate[0].nameArticle = articleName.value
               changeUpdate[0].content = articleContent.value
               changeFull[index] = changeUpdate[0]
               if (fileUpload.value != "" && articleName.value != "" && articleContent.value != "" && articleContent.value.length >= 200) {
                    if (retriveFull) {
                         localStorage.setItem("updatingArticle", JSON.stringify(changeFull))
                         // window.location.href = "adminpanel.html"
                         // console.log("INDEX",index)

                    }

                    else {
                         localStorage.setItem("updatingArticle", JSON.stringify(changeFull))
                         // window.location.href = "adminpanel.html"
                    }
               }
               
          }
     }


}

function Upload(callBack) {
     const uploadValue = fileUpload.files
     const reader = new FileReader()
     reader.addEventListener("load", () => {
          localStorage.setItem("img", reader.result)
          // console.log(reader.result)
          console.log(localStorage.getItem("img"))
          callBack()
          location.href = "adminpanel.html"

     })
     reader.readAsDataURL(uploadValue[0])
     console.log(uploadValue[0].name)
}


