
let myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.getElementById("input-btn");



inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
})

