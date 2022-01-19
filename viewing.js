const reactions = document.querySelector(".reaction")
const clickThumb = document.getElementsByClassName("fa-thumbs-up")
const clickHand = document.getElementsByClassName("fa-handshake")
console.log(clickHand)
const clickBulb = document.getElementsByClassName("fa-lightbulb")
const thumbId = document.querySelector("#thumb-likes")
const handId = document.querySelector("#handshake-likes")
const bulbId = document.querySelector("#bulb-likes")
const commentBtn = document.getElementsByClassName("submit-comment")
console.log(commentBtn)
const commentUpdate = document.querySelector("#comment-post")
const section = document.querySelector(".comment-section")
const msgPost = document.querySelector("#commenting-message")
const newForm = document.querySelector("#new")
const errorForm = document.querySelector(".comment-form")
const fullDetail = document.querySelector("#details")
const fullView = document.querySelector(".full-article")
const commentsList = []
const thumbLikeList = []
const handLikeList = []
const bulbLikeList = []

const retriveArticle = localStorage.getItem("currentClick")
const changing = JSON.parse(retriveArticle)
console.log(changing)
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
                         <i class="fas fa-thumbs-up"></i><small id= "thumb-likes"></small>
                         <i class="fas fa-handshake"></i><small id = "handshake-likes"></small>
                         <i class="fas fa-lightbulb"></i><small id= "bulb-likes"></small>
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

function thumbLike() {
     // css(update, {color: "#0fa187", transform: "scale(1.1)"})
     const updateThumb = reactions.querySelector(".fa-thumbs-up")
     console.log(updateThumb)
     updateThumb.style.color = "#0fa187"
     updateThumb.style.transform = "scale(1.1)"
     reactions.className = "reaction likes"
     thumbLikeList.push(thumbId.innerHTML = 1)
     const num = localStorage.getItem("thumbsUp")
     if(num) {
          const bring = JSON.parse(num)
          bring.length - 1
          thumbId.innerHTML = parseInt(bring[bring.length - 1]) + parseInt(1)
          bring.push(thumbId.innerHTML)
          localStorage.setItem("thumbsUp", JSON.stringify(bring))
          // console.log(thumbId.innerHTML)
     }
     else {
          // thumbId.innerHTML = 1
          localStorage.setItem("thumbsUp", JSON.stringify(thumbLikeList))
          
     }

}

const retriveThumbLike = localStorage.getItem("thumbsUp")
const thumbList = JSON.parse(retriveThumbLike)
// console.log(thumbList)

function handLike() {
     const updateHand = reactions.querySelector(".fa-handshake")
     updateHand.style.color = "#0fa187"
     updateHand.style.transform = "scale(1.1)"
     reactions.className = "reaction likes"
     handLikeList.push(handId.innerHTML = 1)
     const num = localStorage.getItem("handlikes")
     if(num) {
          const bring = JSON.parse(num)
          bring.length - 1
          handId.innerHTML = parseInt(bring[bring.length - 1]) + parseInt(1)
          bring.push(handId.innerHTML)
          localStorage.setItem("handlikes", JSON.stringify(bring))
     }
     else {
          localStorage.setItem("handlikes", JSON.stringify(handLikeList))
          
     }
}

function bulbLike () {
     const updateBulb = reactions.querySelector(".fa-lightbulb")
     updateBulb.style.color = "#0fa187"
     updateBulb.style.transform = "scale(1.1)"
     reactions.className = "reaction likes"
     bulbLikeList.push(bulbId.innerHTML = 1)
     const num = localStorage.getItem("bulblikes")
     if(num) {
          const bring = JSON.parse(num)
          bring.length - 1
          bulbId.innerHTML = parseInt(bring[bring.length - 1]) + parseInt(1)
          bring.push(bulbId.innerHTML)
          localStorage.setItem("bulblikes", JSON.stringify(bring))
     }
     else {
          // bulbId.innerHTML = 1
          localStorage.setItem("bulblikes", JSON.stringify(bulbLikeList))
          
     }
}
function postComment() {
     // section.className
     const commentStore = msgPost.value.trim()
     commentsList.push(commentStore)
     if (commentStore == "") {
          errorForm.className = "comment-form invalid"
     }

     else {
          const storeComment = localStorage.getItem("comments")
          if (storeComment) {
               const update = JSON.parse(storeComment)
               update.push(commentStore)
               localStorage.setItem("comments", JSON.stringify(update))
               errorForm.reset()
     }

          else {
               localStorage.setItem("comments", JSON.stringify(commentsList))
               errorForm.reset()
          }
     }
     
}

const retriveComments = localStorage.getItem("comments")
const changeList = JSON.parse(retriveComments)
console.log(changeList)
for (var i =0; i < changeList.length; i++) {
     newForm.innerHTML += `<textarea name="" id="comment-post" cols="30" rows="10" readonly>${changeList[i]}</textarea>`
}


