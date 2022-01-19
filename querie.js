const container = document.querySelector("#container")

const retrieve = localStorage.getItem("queryStore")
const changeObj = JSON.parse(retrieve)
console.log(changeObj)
const changeList = []
for (key in changeObj) {
     changeList.push(changeObj[key])
}

console.log(changeList)

for (var i = 0; i < changeList.length; i++) {
     container.innerHTML += `<div id="querie1">
     <div class="name">${changeList[i].names}</div>
     <div class="email">${changeList[i].emails}</div>
     <div class="dates">${changeList[i].date}</div>
     <p class="description">${changeList[i].messages}</p>
     </div>`

}

console.log(container.innerHTML)



