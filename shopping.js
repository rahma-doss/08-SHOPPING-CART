const hearts = document.querySelectorAll (".fa-heart")
const croix = document.querySelectorAll('.fa-times') 
let btnPlus = document.querySelectorAll('.fa-plus-circle') 
let btnMinus = document.querySelectorAll('.fa-minus-circle') 
let sum = document.querySelector(".total")


hearts.forEach(heart => {
    heart.addEventListener('click', function(){
        heart.classList.toggle('red-hearts')
    })
})
croix.forEach(btncroix => {
    btncroix.addEventListener('click', function(){
        btncroix.parentElement.parentElement.remove()
        totalSum ()
    })
})

btnPlus.forEach(plus =>{
    plus.addEventListener('click', function(){
        plus.nextElementSibling.innerHTML++
        totalSum ()
    })
})

btnMinus.forEach(minus =>{
    minus.addEventListener('click', function(){
        if (minus.previousElementSibling.innerHTML > 0) {
        minus.previousElementSibling.innerHTML--
    }
    totalSum ()
    })
})


  

function totalSum () {
    let total = []
    let prices = Array.from(document.querySelectorAll('.prix'))
    let quantities = Array.from(document.querySelectorAll('.count'))
    for(let i=0; i<prices.length; i++) {
      total.push(prices[i].innerHTML * quantities[i].innerHTML)
      sum.innerHTML = total.reduce((a,b)=>a+b)
    }
  }



