const fileUpload = document.getElementById("file-input")
const articleName = document.getElementById("article-name")
const articleContent = document.getElementById("article-content")
const button = document.getElementById("submit")
const form = document.getElementById("form")
const inputTag = document.getElementsByTagName("input")
const imgPreview = document.querySelector(".img-preview")
const keepLocal = []
const uploadValue = fileUpload.value.trim()
const nameValue = articleName.value.trim()
const contentValue = articleContent.value.trim()

button.addEventListener("click", (event) => {
     event.preventDefault()
     checkInput()
     update()

})

fileUpload.addEventListener("change", () => {
     const uploadValue = fileUpload.files
     const reader = new FileReader()
     reader.addEventListener("load", () => {
          localStorage.setItem("img", reader.result)
          // console.log(reader.result)
          imgPreview.setAttribute("src", reader.result)
          imgPreview.style.height = "300px";
          imgPreview.style.weigth = "300px";
          imgPreview.style.objectFit = "cover";
          imgPreview.style.objectPosition = "top center";
          console.log(localStorage.getItem("img"))
          // callBack()
          // location.href = "adminpanel.html"

     })
     reader.readAsDataURL(uploadValue[0])
})

function checkInput() {
     const uploadValue = fileUpload.value.trim()
     const nameValue = articleName.value.trim()
     const contentValue = articleContent.value.trim()
     // if (uploadValue == "") {
     //      errorMsg(fileUpload, "Upload file !!!", "file errorfile errorfile")
     // }

     // else if (uploadValue != "") {
     //      successMsg(fileUpload, "", "file successfile")
     // }

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

// const retriveUpdate = localStorage.getItem("currentUpdate")
// const changeUpdate = JSON.parse(retriveUpdate)
const retriveFull = localStorage.getItem("updatingArticle")
const changeArticle = JSON.parse(retriveFull)
// console.log(changeArticle)
fileUpload.file = changeArticle.image
imgPreview.setAttribute("src", changeArticle.image)
imgPreview.style.height = "300px";
imgPreview.style.weigth = "300px";
imgPreview.style.objectFit = "cover";
imgPreview.style.objectPosition = "top center";
articleName.value = changeArticle.title
articleContent.value = changeArticle.content

function update() {
     const upload = fileUpload.files
     console.log(upload)
     const formData = new FormData()
     formData.append("title", articleName.value)
     formData.append("content", articleContent.value)
     formData.append("image", upload[0])
     // console.log(Object.fromEntries(formData))
     fetch(`https://mybrand-backend-deploy.herokuapp.com/api/v1/articles/${changeArticle._id}`, {
          method: "PATCH",
          body: formData,
          headers: {
               "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
     }).then(res => {
          return res.json()
     }).then(data => {
          console.log(data)
          form.reset()
          imgPreview.setAttribute("src", "")

          swal("Article updated!!!", {
               icon: "success",
               button: false
          })
          // window.location.href = "adminpanel.html"
     })
     .catch(error => {
          console.log(error)
     })
     // for (var m = 0; m < changeFull.length; m++) {
     //      if(index == m) {
     //           if (fileUpload.value != "") {
     //                console.log(fileUpload.value)
     //                changeUpdate[0].file = localStorage.getItem("img")
     //                changeUpdate[0].nameArticle = articleName.value
     //                changeUpdate[0].content = articleContent.value
     //                changeFull[index] = changeUpdate[0]
     //                if (articleName.value != "" && articleContent.value != "" && articleContent.value.length >= 200) {
     //                     if (retriveFull) {
     //                          localStorage.setItem("updatingArticle", JSON.stringify(changeFull))
     //                          window.location.href = "adminpanel.html"
     //                          // console.log("INDEX",index)

     //                     }

     //                     else {
     //                          localStorage.setItem("updatingArticle", JSON.stringify(changeFull))
     //                          window.location.href = "adminpanel.html"
     //                     }
     //                }
     //           }

     //           else {
     //                changeUpdate[0].file = changeUpdate[0].file
     //                changeUpdate[0].nameArticle = articleName.value
     //                changeUpdate[0].content = articleContent.value
     //                changeFull[index] = changeUpdate[0]
     //                if (articleName.value != "" && articleContent.value != "" && articleContent.value.length >= 200) {
     //                     if (retriveFull) {
     //                          localStorage.setItem("updatingArticle", JSON.stringify(changeFull))
     //                          window.location.href = "adminpanel.html"
     //                          // console.log("INDEX",index)

     //                     }

     //                     else {
     //                          localStorage.setItem("updatingArticle", JSON.stringify(changeFull))
     //                          window.location.href = "adminpanel.html"
     //                     }
     //                }
     //           }
               
               
     //      }
     // }


}

// function Upload(callBack) {
//      const uploadValue = fileUpload.files
//      const reader = new FileReader()
//      reader.addEventListener("load", () => {
//           localStorage.setItem("img", reader.result)
//           // console.log(reader.result)
//           imgPreview.setAttribute("src", reader.result)
//           console.log(localStorage.getItem("img"))
//           callBack()
//           // location.href = "adminpanel.html"

//      })
//      reader.readAsDataURL(uploadValue[0])
//      console.log(uploadValue[0].name)
// }


