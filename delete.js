const container = document.querySelector(".container")
const article1 = container.querySelector(".article1")
const article2 = container.querySelector(".article2")
const delBtn1 = article1.querySelector(".delete1")
const delBtn2 = article2.querySelector(".delete2")
// const back = delBtn.parentElement
// const behind = back.parentElement
// console.log(delBtn2)

delBtn1.addEventListener("click", (e) => {
     e.preventDefault()
     article1.className = "article1 delete"

})

delBtn2.addEventListener("click", (e) => {
     e.preventDefault()
     article2.className = "article2 delete"
})

function deleteBlog() {

     if (back.parentElement == article1) {
          article1.className = "article1 delete"
     }

     else if (back.parentElement == article2) {
          article2.className = "article2 delete"
     }
}

