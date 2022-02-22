const container = document.querySelector("#container")
const spinner = document.querySelector(".spinner")
const retrieving = async() => {
    // swal("Retrieving...", "success", {
    //     button: false
    // });
    spinner.style.display = "inline-block"

    await fetch("https://mybrand-backend-deploy.herokuapp.com/api/v1/queries/", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
        
    })
    .then(res => {
        return res.json()
    }).then(data => {
        spinner.style.display = "none"
        data.map(query => {
            container.innerHTML += `<div id="querie1">
        <div class="name">${query.name}</div>
        <div class="email">${query.email}</div>
        <div class="dates">${query.date}</div>
        <div class="locations">${query.location}</div>
        <p class="description">${query.message}</p>
        </div>`
        })
        
    })
    swal("Success!","Query retrieved successfull!", "success", {
        button: false
    });
    
}
retrieving()


// const retrieve = localStorage.getItem("queryStore")
// const changeObj = JSON.parse(retrieve)
// console.log(changeObj)
// const changeList = []
// for (key in changeObj) {
//      changeList.push(changeObj[key])
// }

// console.log(changeList)

// for (var i = 0; i < changeList.length; i++) {
//      console.log(changeList[i].location)
//      container.innerHTML += `<div id="querie1">
//      <div class="name">${changeList[i].names}</div>
//      <div class="email">${changeList[i].emails}</div>
//      <div class="dates">${changeList[i].date}</div>
//      <div class="locations">${changeList[i].location}</div>
//      <p class="description">${changeList[i].messages}</p>
//      </div>`

// }

// console.log(container.innerHTML)



