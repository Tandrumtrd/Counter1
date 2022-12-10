// let variable countel = html dokument get the element by id ("count-el")

let saveel = document.getElementById("save-el")

console.log(saveel)

let countel = document.getElementById("count-el")



// on console log out countel
console.log(countel)

let count = 0
// use the button to evoke increment function 
function increment(){
  count += 1
  // >0< innertext
  countel.innerText = count
  console.log(count)
}

function save() {
  let countstr = count + " - "
  //render to innertext += (savell.. = saveel...+ countstring)
  // Google alternative to innertext mdn .textcontent
  //saveel.innerText += countstr
 saveel.textContent += countstr
  
  console.log (count)
  countel.innerText =0
  count = 0
}

