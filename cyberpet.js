/*let input = prompt("input your details here:")
console.log(input)

const heading = document.getElementById("heading")
heading.textContent = `Hi ${input}, let's play with Jasper`*/

/*const happiness = document.getElementsByClassName("happiness")
const hunger = document.getElementByClassName("hunger")
const mice = document.getElementByClassName("mice")*/

/*const treat = document.getElementByClassName("treat")
const play = document.getElementByClassName("play")
const exercise = document.getElementByClassName("exercise")*/


class animal {
  constructor (happiness = 50, hunger = 50, mice = 0) {

    this._happiness = happiness
    this._hunger = hunger
    this._mice = 0
  }

  get happiness() {
      return this._happiness
  }

  get hunger() {
    return this._hunger
  }


  increaseMice() {
    this._mice++
  }

  eat() {
    return this._hunger
  }

}

/*const Jasper = new animal ("Jasper")

console.log(Jasper)
Jasper.increaseMice()
console.log(Jasper)
Jasper.increaseMice()
console.log(Jasper)*/



//subclass

class dog extends animal {
  constructor(name, lovesBiscuits) {
      super(name);
      this._lovesBiscuits = lovesBiscuits;
      }
      bark() {
          console.log("Bruno is barking!")
      }     
  }

const Bruno = new dog("Bruno")

Bruno.bark()



//subclass


