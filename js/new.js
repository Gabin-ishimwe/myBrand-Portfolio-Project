const fileUpload = document.getElementById("file-input")
const articleName = document.getElementById("article-name")
const articleContent = document.getElementById("article-content")
const imgPreview = document.querySelector(".img-preview")
const button = document.getElementById("submit")
const form = document.getElementById("form")
const inputTag = document.getElementsByTagName("input")
const keepLocal = []
button.addEventListener("click", (event) => {
     event.preventDefault()
     checkInput()
     create()
     // synch().then((results) => {
     //      results()
     // }).catch((message) => {
     //      console.log(message)
     // })

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
          // console.log(localStorage.getItem("img"))
          // callBack()
          // location.href = "adminpanel.html"

     })
     reader.readAsDataURL(uploadValue[0])
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

// function Upload(callBack) {
//      const uploadValue = fileUpload.files
//      const reader = new FileReader()
//      reader.addEventListener("load", () => {
//           localStorage.setItem("img", reader.result)
//           // console.log(reader.result)
//           console.log(localStorage.getItem("img"))
//           callBack()

//      })
//      reader.readAsDataURL(uploadValue[0])
//      console.log(uploadValue[0].name)
// }

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


function create() {
     var storeImg = ""
     const uploadValue = fileUpload.files
     const nameValue = articleName.value.trim()
     const contentValue = articleContent.value.trim()
     if (uploadValue != "" && nameValue != "" && contentValue != "" && contentValue.length > 200) {
          let formData = new FormData()
          formData.append("title", nameValue)
          formData.append("content", contentValue)
          formData.append("image", uploadValue[0])
          fetch("https://mybrand-backend-deploy.herokuapp.com/api/v1/articles", {
               method: "POST",
               headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
               },
               body: formData

          }).then(res => {
               return res.json()
          }).then(data => {
               console.log(data)
               form.reset()
               imgPreview.setAttribute("src", "")

               swal("Article created!!!", {
                    icon: "success",
                    button: false
               })
               // window.location.href = "adminpanel.html"
          })
          .catch(error => {
               console.log(error)
          })
          
          // const storeInputs = {file: uploadValue, nameArticle: nameValue, content: contentValue, thumbLike:[0], handLike:[0], bulbLike:[0], comments: []}
          // keepLocal.push(storeInputs)
          // const stored = localStorage.getItem("updatingArticle")
          // if (stored) {
          //      const retrival = JSON.parse(stored)
          //      retrival.push(storeInputs)
          //      console.log(storeImg)
          //      localStorage.setItem("updatingArticle", JSON.stringify(retrival))
          // } else {
          //      localStorage.setItem("updatingArticle", JSON.stringify(keepLocal))
          // }
          
     }
     // localstorage.removeItem("img")
     
}


