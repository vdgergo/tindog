import { dogs } from "./data.js";
import Dog from "./Dog.js";

const dogElement = document.getElementById('dog')

const dogsArray = ["Rex","Bella","Teddy"]
// const rex = new Dog(dogs[2])
// rex.renderDogHTML()


function getNewDog() {
  const newDogName = dogsArray.shift()
  const nextDogData = dogs.filter(function(item){
    return item.name === newDogName
  })[0]
  return nextDogData ? new Dog(nextDogData) : false
}

function render(){
  dog.renderDogHTML()
  document.getElementById("decline-btn").addEventListener("click", swipeLeft)
  document.getElementById("accept-btn").addEventListener("click", swipeRight)
}

function swipeLeft(){
  dog.hasBeenSwiped = true;
  dog.hasBeenLiked = false
  console.log("nope")
  document.getElementById("dog").insertAdjacentHTML("afterbegin",`<img class="dog__badge" src="images/badge-nope.png" alt=""></img>`)
  dog = getNewDog()
  console.log(dog)
  if (dog) {
    setTimeout(render,1500)
  }
  else {document.getElementById("dog-container").innerText = "No more single dogs around you!"}

  
}

function swipeRight(){
  dog.hasBeenSwiped = true;
  dog.hasBeenLiked = true;
  console.log("like")
  document.getElementById("dog").insertAdjacentHTML("afterbegin",`<img class="dog__badge" src="images/badge-like.png" alt=""></img>`)
  dog = getNewDog()
  setTimeout(render,1500)
}


let dog = getNewDog()
render()