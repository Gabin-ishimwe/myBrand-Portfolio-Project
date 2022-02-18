const container = document.querySelector(".container")
let allArticles = []
// const retrival = localStorage.getItem("updatingArticle")
// const changeObj = JSON.parse(retrival)
// var ids = []
const spinner = document.querySelector(".spinner")
const displayBlog = async () => {
    spinner.style.display = "inline-block"
     await fetch("https://mybrand-backend-deploy.herokuapp.com/api/v1/articles", {
          method: "GET"
     }).then(res => {
          return res.json()
     }).then(data => {
          spinner.style.display = "none"
          data.data.map(article => {
               allArticles.push(article)
               let splittedArr = article.content.split(" ")
               splittedArr.splice(12) 
               // console.log(changeObj[i].file)
               container.innerHTML += `<div class="container1">
                         <div class="article1">
                              <div class="left-panel">
                                   <a href="#" class="view-article1" id="article-id${0}">
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
                              </div>
                         
                              <div class="panels">
                                   <div class="update"><a href="updateblog1.html" class="">Update Blog</a></div>
                                   <div class="delete1" id = "del"><a href="#" class="">Delete Blog</a></div>
                              </div>
                         
                         </div>
                    </div>`
          })

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

          const deleteButton = document.querySelectorAll(".delete1")
          for (let i = 0; i < deleteButton.length; i++) {
               deleteButton[i].addEventListener("click", (e) => {
                    e.preventDefault()
                    swal({
                         title: "Are you sure?",
                         text: "Article once deleted can not be retrieve!!!",
                         icon: "warning",
                         buttons: true,
                         dangerMode: true
                    }).then(deleted => {
                         if(deleted) {
                              for( let p = 0; p < allArticles.length; p++) {
                                   if (i == p) {
                                        let articleId = ""
                                        articleId = allArticles[p]._id
                                        fetch(`https://mybrand-backend-deploy.herokuapp.com/api/v1/articles/${articleId}`, {
                                             method: "DELETE",
                                             headers: {
                                                  "Authorization": `Bearer ${localStorage.getItem("token")}`
                                             }
                                        })
                                        .then(res => {
                                             return res.json()
                                        })
                                        .then(data => {
                                             console.log(data)
                                             swal("Article deleted!!!", {
                                                  icon: "warning"
                                             })
                                             location.reload()
                                        })
                                        .catch(error => {
                                             console.log(error)
                                        })
                                   }
                              }
                         }
                         else {
                              swal("Your article is safe!!!", {
                                   icon: "success"
                              })
                         }
                    })
                    
               })
          }

          const updateButton = document.querySelectorAll(".update")
          for (let j = 0; j < updateButton.length; j++) {
               updateButton[j].addEventListener("click", (e) => {
                    e.preventDefault()
                    for(let p = 0; p < allArticles.length; p++) {
                         if (j == p) {
                              // console.log(allArticles[p])
                              localStorage.setItem("updatingArticle", JSON.stringify(allArticles[p]))
                              window.location.href = "updateblog1.html"
                         }
                    }
               })
          }
          
     })
     .catch(error => {
          console.log(error)
     })
     // for (var i = 0; i < changeObj.length; i++) {
     // if (changeObj[i].hasOwnProperty("content")) {
     //      let splittedArr = changeObj[i].content.split(" ")
     //      splittedArr.splice(12) 
     //      // console.log(changeObj[i].file)
     //      container.innerHTML += `<div class="container1">
     //                <div class="article1">
     //                     <div class="left-panel">
     //                          <a href="#" class="view-article1" id="article-id${0}">
     //                               <div class="greenborder">
     //                                    <img src=${changeObj[i].file} alt="" class="article-image1">
     //                                    <h2 class="article-title">${changeObj[i].nameArticle}</h1>
     //                                         <p class="article-description">
     //                                              ${splittedArr.join(" ")}...
     //                                         </p>
     //                               </div>
     //                          </a>
     //                          <div class="lines">
     //                               <img src="/Images/blog-topline.png" alt="" class="blog-topline">
     //                               <img src="/Images/blog-bottomline.png" alt="" class="blog-bottomline">
     //                          </div>
     //                     </div>
                    
     //                     <div class="panels">
     //                          <div class="update"><a href="updateblog1.html" class="">Update Blog</a></div>
     //                          <div class="delete1" id = "del"><a href="#" class="">Delete Blog</a></div>
     //                     </div>
                    
     //                </div>
     //           </div>`
     //      }
     // }
}
displayBlog()


// const delBtn = document.querySelectorAll(".delete1")
// console.log(delBtn)
// var titles = []
// function deleteArticle() {
//      for (var m = 0; m < delBtn.length; m++) {
//      titles.push(delBtn[m].parentElement.parentElement.querySelector("h2").innerHTML)
//      let namy = delBtn[m].parentElement.parentElement.querySelector("h2").innerHTML
//      // console.log(namy)
//      delBtn[m].addEventListener("click", (e) => {
//           e.preventDefault()
//           location.reload()
//           for (var n = 0; n < changeObj.length; n++) {
//                if (namy == changeObj[n].nameArticle) {
//                     changeObj.splice(n,1)
//                     localStorage.setItem("updatingArticle", JSON.stringify(changeObj))
//                     console.log(namy)


//                     }
//                }
//           })
//      }
     
// }

// deleteArticle()


// const clickArticle = document.querySelectorAll(".view-article1")
// const fullArticle = localStorage.getItem("updatingArticle")
// const changeFull = JSON.parse(fullArticle)
// console.log(clickArticle)
// for (var j = 0; j < clickArticle.length; j++) {
//      let title = clickArticle[j].querySelector("h2").innerHTML
//      clickArticle[j].addEventListener("click", (e) => {
//           e.preventDefault()
//           console.log(title)
//           for (var p = 0; p < changeFull.length; p++) {
//                if (title == changeFull[p].nameArticle) {
//                     let currentClickArticle = []
//                     currentClickArticle.push(changeFull[p])
//                     localStorage.setItem("currentClick", JSON.stringify(currentClickArticle))
//                     window.location.href= "view1.html"
                    
//                }
//           }

//      })
// }

// const updateBtn = document.querySelectorAll(".update")
// console.log(updateBtn)
// for (var r = 0; r < updateBtn.length; r ++) {
//      let title = updateBtn[r].parentElement.parentElement.querySelector("h2").innerHTML
//      // console.log(title)
//      updateBtn[r].addEventListener("click", (e) => {
//           e.preventDefault()

//           // for (var s = 0; s < changeFull.length; s++) {
//           //      if (title == changeFull[s].nameArticle) {
//           //           let currentUpdateArticle = []
//           //           currentUpdateArticle.push(changeFull[s])
//           //           localStorage.setItem("currentUpdate", JSON.stringify(currentUpdateArticle))
//           //           window.location.href = "updateblog1.html"
//           //      }
//           // }
//      })
// }