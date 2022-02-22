const container = document.querySelector(".container")
const spinner = document.querySelector(".spinner")

let allArticles = []
const retrieving = async () => {
     spinner.style.display = "inline-block"
     await fetch("https://mybrand-backend-deploy.herokuapp.com/api/v1/articles", {
          method: "GET",
     })
     .then(res => {
          return res.json()
     }).then(data => {
          spinner.style.display = "none"
          data.data.map(article => {
               allArticles.push(article)
               let splittedArr = article.content.split(" ")
               splittedArr.splice(12)
               container.innerHTML +=  `<div class="article1">
                         <a href="view1.html" class="view-article1">
                              <div class="greenborder">
                                   <img src=${article.image} alt="" class="article-image1">
                                   <h2 class="article-title">${article.title}</h1>
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
          })
          swal("Article retrieved!!!", {
               button: false,
               icon: "success"
          })
          // article()
          const clickArticle = document.querySelectorAll(".view-article1")
          for (let j = 0; j < clickArticle.length; j++) {
               let title = clickArticle[j].querySelector("h2").innerHTML
               clickArticle[j].addEventListener("click", (e) => {
                    e.preventDefault()
                    console.log(title, j)
                    for (let p = 0; p < allArticles.length; p++) {
                         if (j == p) {
                              let articleId = ""
                              articleId = allArticles[p]._id
                              console.log(articleId)
                              localStorage.setItem("currentClick", JSON.stringify(articleId))
                              window.location.href= "view1.html"
                              
                         }
                    }

               })
          }

     })
     .catch(error => console.log(error))
}

retrieving()


// const retrival = localStorage.getItem("updatingArticle")
// const changeObj = JSON.parse(retrival)

// for (var i = 0; i < changeObj.length; i++) {
//      if (changeObj[i].hasOwnProperty("content")) {
//           let splittedArr = changeObj[i].content.split(" ")
//           splittedArr.splice(12)
//           container.innerHTML +=  `<div class="article1">
//                     <a href="view1.html" class="view-article1">
//                          <div class="greenborder">
//                               <img src=${changeObj[i].file} alt="" class="article-image1">
//                               <h2 class="article-title">${changeObj[i].nameArticle}</h1>
//                                    <p class="article-description">
//                                         ${splittedArr.join(" ")}...
//                                    </p>
//                          </div>
//                     </a>
//                     <div class="lines">
//                          <img src="/Images/blog-topline.png" alt="" class="blog-topline">
//                          <img src="/Images/blog-bottomline.png" alt="" class="blog-bottomline">
//                     </div>
//                </div>`

//      }
// }


// const fullArticle = localStorage.getItem("updatingArticle")
// const changeFull = JSON.parse(fullArticle)
// console.log(clickArticle)




// fetch("https://mybrand-backend-deploy.herokuapp.com/api/v1/articles", {
//      method: "GET",
// }).then(response => {
//      return response.json()
// }).then(data => {
//      for (var j = 0; j < clickArticle.length; j++) {
//           let title = clickArticle[j].querySelector("h2").innerHTML
//           clickArticle[j].addEventListener("click", (e) => {
//                e.preventDefault()
//                console.log(title)
//                for (var p = 0; p < data.data.length; p++) {
//                     if (j ===p) {
//                          articleId += data.data[p]._id
//                          console.log(articleId)
//                          // window.location.href= "view1.html"
                         
//                     }
//                }

//           })
//      }
// })



// export default articleId





