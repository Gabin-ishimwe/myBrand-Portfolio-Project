const container = document.querySelector(".container")

const retrival = localStorage.getItem("updatingArticle")
const changeObj = JSON.parse(retrival)

for (var i = 0; i < changeObj.length; i++) {
     if (changeObj[i].hasOwnProperty("content")) {
          let splittedArr = changeObj[i].content.split(" ")
          splittedArr.splice(12)
          container.innerHTML +=  `<div class="article1">
                    <a href="view1.html" class="view-article1">
                         <div class="greenborder">
                              <img src=${changeObj[i].file} alt="" class="article-image1">
                              <h2 class="article-title">${changeObj[i].nameArticle}</h1>
                                   <p class="article-description">
                                        ${splittedArr.join(" ")}...
                                   </p>
                         </div>
                    </a>
                    <div class="lines">
                         <img src="/Images/blog-topline.png" alt="" class="blog-topline">
                         <img src="/Images/blog-bottomline.png" alt="" class="blog-bottomline">
                    </div>
               </div>`

     }
}

const clickArticle = document.querySelectorAll(".view-article1")
const fullArticle = localStorage.getItem("updatingArticle")
const changeFull = JSON.parse(fullArticle)
console.log(clickArticle)
for (var j = 0; j < clickArticle.length; j++) {
     let title = clickArticle[j].querySelector("h2").innerHTML
     clickArticle[j].addEventListener("click", (e) => {
          e.preventDefault()
          console.log(title)
          for (var p = 0; p < changeFull.length; p++) {
               if (title == changeFull[p].nameArticle) {
                    let currentClickArticle = []
                    currentClickArticle.push(changeFull[p])
                    localStorage.setItem("currentClick", JSON.stringify(currentClickArticle))
                    window.location.href= "view1.html"
                    
               }
          }

     })
}