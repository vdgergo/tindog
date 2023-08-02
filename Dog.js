// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this,data)
    this.domElement = document.getElementById('dog-container')
    this.renderDogHTML()
  }

  renderDogHTML(){
    // <img class="dog__badge" src="images/badge-like.png" alt=""></img>
    const {name, avatar, age, bio} = this
    this.domElement.innerHTML = `
          <div id="dog" class="dog">
            <div class="description-wrapper">
              <h1 class="dog__name">${name},<span class="dog__age">${age}</span</h1>
              <p class="dog__bio">${bio}</p>
            </div>
          </div>
          <div class="input-wrapper">
            <button id="decline-btn" class="input-btn input-btn__decline input-btn__decline"><img src="images/icon-cross.png" alt=""></button>
            <button id="accept-btn" class="input-btn input-btn__accept input-btn__accept"><img src="images/icon-heart.png" alt=""></button>
          </div>`
    document.getElementById('dog').style.backgroundImage = `url(${avatar})`
  }

}



export default Dog