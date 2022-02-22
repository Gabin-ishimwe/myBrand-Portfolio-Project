const reactions = document.getElementsByClassName("reaction")
const clickThumb = document.getElementsByClassName("fa-thumbs-up")
const clickHand = document.getElementsByClassName("fa-handshake")
const clickBulb = document.getElementsByClassName("fa-lightbulb")
const commentUpdate = document.querySelector("#comment-post")
const section = document.querySelector(".comment-section")
const fullDetail = document.querySelector("#details")
const fullView = document.querySelector(".full-article")
const commentsList = []
const thumbLikeList = []
const handLikeList = []
const bulbLikeList = []


const retriveArticleId = localStorage.getItem("currentClick")
const changing = JSON.parse(retriveArticleId)
console.log(changing)
const spinner = document.querySelector(".spinner")

const display = async () => {
     spinner.style.display = "inline-block"
     await fetch(`https://mybrand-backend-deploy.herokuapp.com/api/v1/articles/${changing}`, {
          method: "GET"
     }).then((res) => {
          return res.json()
     }).then((data) => {
          spinner.style.display = "none"
          fullDetail.innerHTML =`<div class="article1" id="article1">
                    <div class="return">
                         <a href="/blog page.html" class="return-blog">
                              <i class="fas fa-long-arrow-alt-left"></i>
                              <!-- <p class="info-return">Back</p> -->
                         </a>
                         
                    </div>

                    <div class="contents">
                         <div class="full-article">
                              <img src=${data.image} alt="" class="article1-image">
                              <h1>${data.title}</h1>
                              <p class="article-p">
                                   ${data.content}
                              </p> 
                         </div>

                         <div class="reaction">
                              <i class="fas fa-thumbs-up"></i>
                              <i class="fas fa-handshake"></i>
                              <i class="fas fa-lightbulb"></i>
                              <!-- <i class="far fa-laugh"></i> -->
                         </div>

                         <div class="author-id">
                              <img src="/Images/gabin.jpeg" alt="" class="gabin">
                              <div class="identity">
                                   <p class="author">
                                        <strong>Author: <br></strong>
                                        Gabin Ishimwe<br>
                                        software engineer<br>
                                        21/12/2021
                                   </p>
               
                              </div>
               
                         </div>

               
                         <div class="comment-section">
                              <form action="" id="new">
                                   <!-- <textarea name="" id="comment-post" cols="30" rows="10" readonly></textarea> -->

                              </form>
                              <div class="all-comments">
                              </div> 
                              <form action="" class="comment-form">
                                   <label for="">Leave comment:</label><br>
                                   <input type="text" value="" id="name-commenter" placeholder="Name"><br>
                                   <textarea name="" id="commenting-message" cols="30" rows="10" placeholder="Comment"></textarea><br>
                                   <i class="fas fa-check"></i>
                                   <i class="fas fa-exclamation"></i>
                                   <small>Add comment!!!</small>
                                   <button class="submit-comment" type="submit">Post</button>
                              </form>
                         </div>
               
                    </div>`
          if (data.comments.length != 0) {
               const allComments = document.querySelector(".all-comments")
               data.comments.map(comment => {
                    allComments.innerHTML += `<div class="comment-contain">
                                        <div class="name">${comment.name}</div>
                                        <div class="message">${comment.content}</div>
                                   </div>`
                    
               })
          }
          // clickThumb[0].addEventListener("click", (e) => {
          //      e.preventDefault()
          //      thumbLike()
          // })
          // clickHand[0].addEventListener("click", (e) => {
          //      e.preventDefault()
          //      handLike()
          // })

          // clickBulb[0].addEventListener("click", (e) => {
          //      e.preventDefault()
          //      bulbLike()
          // })     
     })

     const commentBtn = document.querySelector(".submit-comment")
     commentBtn.addEventListener("click", (e) => {
          e.preventDefault()
          postComment()
     })

}
display()


const retriveFull = localStorage.getItem("updatingArticle")
const changeFull = JSON.parse(retriveFull)

var index = 0
for (var i = 0; i < changeFull.length; i++) {
     for (var j = 0; j < changing.length; j++) {
          if (changeFull[i].nameArticle == changing[j].nameArticle && 
               changeFull[i].content == changing[j].content) {
                    index = i
                    // console.log(index, true)
               }
     }
}


function thumbLike() {
     // css(update, {color: "#0fa187", transform: "scale(1.1)"})
     const thumbId = document.getElementById("thumb-likes")
     const updateThumb = document.getElementsByClassName("fa-thumbs-up")
     updateThumb[0].style.color = "#0fa187"
     updateThumb[0].style.transform = "scale(1.1)"
     thumbId.style.color = "#0fa187"
     reactions.className = "reaction"
     console.log(reactions)
     // thumbId.innerHTML = `1`
     // console.log(thumbId.innerHTML)
     // thumbLikeList.push(thumbId.innerHTML)
     // const num = localStorage.getItem("cu")
     if(retriveArticle) {
          
          thumbId.innerHTML = `${parseInt(changing[0].thumbLike[changing[0].thumbLike.length - 1]) + parseInt(1)}`
          let pushing = parseInt(changing[0].thumbLike[changing[0].thumbLike.length -1]) + 1
          changing[0].thumbLike.push(pushing)
          changeFull[index].thumbLike = changing[0].thumbLike
          localStorage.setItem("currentClick", JSON.stringify(changing))
          localStorage.setItem("updatingArticle", JSON.stringify(changeFull))
     }

}

const retriveThumbLike = localStorage.getItem("thumbsUp")
const thumbList = JSON.parse(retriveThumbLike)
// console.log(thumbList)

function handLike() {
     const updateHand = document.querySelector(".fa-handshake")
     const handId = document.getElementById("handshake-likes")
     updateHand.style.color = "#0fa187"
     updateHand.style.transform = "scale(1.1)"
     handId.style.color = "#0fa187"
     reactions.className = "reaction"
     // handLikeList.push(handId.innerHTML = 1)
     // const num = localStorage.getItem("handlikes")
     if(retriveArticle) {
          handId.innerHTML = `${parseInt(changing[0].handLike[changing[0].handLike.length - 1]) + parseInt(1)}`
          let pushing = parseInt(changing[0].handLike[changing[0].handLike.length -1]) + 1
          changing[0].handLike.push(pushing)
          changeFull[index].handLike = changing[0].handLike
          localStorage.setItem("currentClick", JSON.stringify(changing))
          localStorage.setItem("updatingArticle", JSON.stringify(changeFull))
     }
     // else {
     //      localStorage.setItem("handlikes", JSON.stringify(handLikeList))
          
     // }
}

function bulbLike () {
     const bulbId = document.getElementById("bulb-likes")
     const updateBulb = document.querySelector(".fa-lightbulb")
     updateBulb.style.color = "#0fa187"
     updateBulb.style.transform = "scale(1.1)"
     bulbId.style.color = "#0fa187"
     reactions.className = "reaction"
     // bulbLikeList.push(bulbId.innerHTML = 1)
     // const num = localStorage.getItem("bulblikes")
     if(retriveArticle) {
          bulbId.innerHTML = `${parseInt(changing[0].bulbLike[changing[0].bulbLike.length - 1]) + parseInt(1)}`
          let pushing = parseInt(changing[0].bulbLike[changing[0].bulbLike.length -1]) + 1
          changing[0].bulbLike.push(pushing)
          changeFull[index].bulbLike = changing[0].bulbLike
          localStorage.setItem("currentClick", JSON.stringify(changing))
          localStorage.setItem("updatingArticle", JSON.stringify(changeFull))
     }
     else {
          // bulbId.innerHTML = 1
          localStorage.setItem("bulblikes", JSON.stringify(bulbLikeList))
          
     }
}
function postComment() {
     // section.className
     const errorForm = document.querySelector(".comment-form")
     const msgPost = document.querySelector("#commenting-message")
     const commenter = document.querySelector("#name-commenter")
     const commentStore = msgPost.value.trim()
     const commenterValue = commenter.value.trim()
     commentsList.push(commentStore)
     if (commentStore == "") {
          errorForm.className = "comment-form invalid"
     }

     else {
          // changing[0].comments.push(commentStore)
          // changeFull[index].comments = changing[0].comments
          // localStorage.setItem("currentClick", JSON.stringify(changing))
          // localStorage.setItem("updatingArticle", JSON.stringify(changeFull))

          fetch(`https://mybrand-backend-deploy.herokuapp.com/api/v1/articles/${changing}/addComment`, {
               method: "POST",
               body: JSON.stringify({
                    name: commenterValue,
                    content: commentStore
               }),
               headers: {
                    "Content-Type": "application/json",
               }

          }).then(res => {
               return res.json()
          }).then(data => {
               console.log(data)
               errorForm.reset()
               const allComments = document.querySelector(".all-comments")
               allComments.innerHTML += `<div class="comment-contain">
                                   <div class="name">${data.data.comments[data.data.comments.length - 1].name}</div>
                                   <div class="message">${data.data.comments[data.data.comments.length - 1].content}</div>
                              </div>`
          })
          .catch(error => {
               console.log(error)
          })
          // errorForm.reset()
          // location.reload()

     //      const storeComment = localStorage.getItem("comments")
     //      if (storeComment) {
     //           const update = JSON.parse(storeComment)
     //           update.push(commentStore)
     //           localStorage.setItem("comments", JSON.stringify(update))
     //           errorForm.reset()
     // }

     //      else {
     //           localStorage.setItem("comments", JSON.stringify(commentsList))
     //           errorForm.reset()
     //      }
     }
     
}
// const newForm = document.querySelector("#new")
// const retriveComments = localStorage.getItem("comments")
// const changeList = JSON.parse(retriveComments)
// console.log(changeList)
// for (var i =0; i < changeList.length; i++) {
//      newForm.innerHTML += `<textarea name="" id="comment-post" cols="30" rows="10" readonly>${changeList[i]}</textarea>`
// }

// function commenting() {
//      const newForm = document.querySelector("#new")
//      const retriveComments = localStorage.getItem("currentClick")
//      const changeComments = JSON.parse(retriveComments)
//      for (var i = 0; i < changeComments[0].comments.length; i++) {
//           newForm.innerHTML += `<textarea name="" id="comment-post" cols="30" rows="10" readonly>${changeComments[0].comments[i]}</textarea>`
//      }

// }

// commenting()