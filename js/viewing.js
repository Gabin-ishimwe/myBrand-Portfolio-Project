const reactions = document.getElementsByClassName("reaction")
const clickThumb = document.getElementsByClassName("fa-thumbs-up")
const clickHand = document.getElementsByClassName("fa-handshake")
const clickBulb = document.getElementsByClassName("fa-lightbulb")
const commentBtn = document.getElementsByClassName("submit-comment")
const commentUpdate = document.querySelector("#comment-post")
const section = document.querySelector(".comment-section")
const fullDetail = document.querySelector("#details")
const fullView = document.querySelector(".full-article")
const commentsList = []
const thumbLikeList = []
const handLikeList = []
const bulbLikeList = []

const retriveArticle = localStorage.getItem("currentClick")
const changing = JSON.parse(retriveArticle)
console.log(changing[0].bulbLike[changing[0].bulbLike.length - 1])
fullDetail.innerHTML =`<div class="article1" id="article1">
               <div class="return">
                    <a href="/blog page.html" class="return-blog">
                         <i class="fas fa-long-arrow-alt-left"></i>
                         <!-- <p class="info-return">Back</p> -->
                    </a>
                    
               </div>

               <div class="contents">
                    <div class="full-article">
                         <img src=${changing[0].file} alt="" class="article1-image">
                         <h1>${changing[0].nameArticle}</h1>
                         <p class="article-p">
                              ${changing[0].content}
                         </p> 
                    </div>

                    <div class="reaction">
                         <i class="fas fa-thumbs-up"></i><small id="thumb-likes">${changing[0].thumbLike[changing[0].thumbLike.length - 1]}</small>
                         <i class="fas fa-handshake"></i><small id ="handshake-likes">${changing[0].handLike[changing[0].handLike.length - 1]}</small>
                         <i class="fas fa-lightbulb"></i><small id="bulb-likes">${changing[0].bulbLike[changing[0].bulbLike.length - 1]}</small>
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

                         <form action="" class="comment-form">
                              <label for="">Leave comment:</label><br>
                              <textarea name="" id="commenting-message" cols="30" rows="10" placeholder="Comment"></textarea><br>
                              <i class="fas fa-check"></i>
                              <i class="fas fa-exclamation"></i>
                              <small>Add comment!!!</small>
                              <button class="submit-comment" type="submit">Post</button>
                         </form>
                    </div>
          
               </div>`


clickThumb[0].addEventListener("click", (e) => {
     e.preventDefault()
     thumbLike()
})
clickHand[0].addEventListener("click", (e) => {
     e.preventDefault()
     handLike()
})

clickBulb[0].addEventListener("click", (e) => {
     e.preventDefault()
     bulbLike()
})

commentBtn[0].addEventListener("click", (e) => {
     e.preventDefault()

     postComment()
})

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
     const commentStore = msgPost.value.trim()
     commentsList.push(commentStore)
     if (commentStore == "") {
          errorForm.className = "comment-form invalid"
     }

     else {
          changing[0].comments.push(commentStore)
          changeFull[index].comments = changing[0].comments
          localStorage.setItem("currentClick", JSON.stringify(changing))
          localStorage.setItem("updatingArticle", JSON.stringify(changeFull))
          errorForm.reset()
          location.reload()

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

function commenting() {
     const newForm = document.querySelector("#new")
     const retriveComments = localStorage.getItem("currentClick")
     const changeComments = JSON.parse(retriveComments)
     for (var i = 0; i < changeComments[0].comments.length; i++) {
          newForm.innerHTML += `<textarea name="" id="comment-post" cols="30" rows="10" readonly>${changeComments[0].comments[i]}</textarea>`
     }

}

commenting()