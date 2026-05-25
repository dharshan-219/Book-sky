//select elements
var overbox = document.querySelector(".overbox")
var overlay = document.querySelector(".overlay")
var addbutn = document.querySelector(".addbutn")

var cancelpopup = document.querySelector(".del")

var container = document.querySelector(".container")
var addbook = document.querySelector(".ad")

var bookname = document.getElementById("bkname")
var bookauthor = document.getElementById("bkauthor")
var bookdesc = document.getElementById("bkdescription")

//open popup
addbutn.addEventListener("click", function(){
    overbox.style.display = "block"
    overlay.style.display = "block"
})

//close popup
cancelpopup.addEventListener("click", function(event){
    event.preventDefault()
    overbox.style.display = "none"
    overlay.style.display = "none"
})

//add book
addbook.addEventListener("click", function(event){
    event.preventDefault()

    var div = document.createElement("div")
    div.setAttribute("class","bookcontainer")

    div.innerHTML =
    `<h2>${bookname.value}</h2>
     <h5>${bookauthor.value}</h5>
     <p>${bookdesc.value}</p>
     <button onclick="deletebook(event)">DELETE</button>`

    container.append(div)

    overbox.style.display = "none"
    overlay.style.display = "none"
})
function deletebook(event){
    event.target.parentElement.remove()
}