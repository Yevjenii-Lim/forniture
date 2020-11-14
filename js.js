let product = document.querySelectorAll('.options-input')
let next = document.querySelectorAll('.next')
let card = document.querySelectorAll('.form-body')
let divans = document.querySelector('.divans')
let choise
let sofas = document.querySelector('.sofas')
let step = document.querySelector('.step-two')
let productItem = document.querySelectorAll('.item-input')
let radioButtons = document.querySelector('.radio-buttons')
let qtRadio = document.querySelectorAll('.qt_place')
let radioExtra = document.querySelector('.radio-extra')
let result 
let radioDone = false
let number = document.createElement('span')
let newChoice = document.querySelectorAll('.choice')
let extraParametry = false 
let extraParametryForm = document.querySelector('.extra-parametry')
let options = document.querySelector('.first-form')
let over = document.querySelector('.over2')
let addExtraParametryBool = false
let order = {}



// chair
let chairs = document.querySelector('.forms-armchair')
let radioChair = document.querySelector('.radio-buttons-chair')
let radioChairBool = false
let extraChair = false
let addExtraParametryChair = false

// small chair
let stul = document.querySelector('.forms-chair')
let radioStul = document.querySelector('.radio-stul')
let radioStulBool = false
let extraStul = false
let addExtraParametryStul = false



// beds

let beds = document.querySelector('.forms-bed')
let radioBeds = document.querySelector('.radio-beds')
radioBeds.addEventListener('click', bedsQt)
let radioBedsBool = false
let extraBeds = false
let addExtraParametryBeds = false


radioStul.addEventListener('click', stulQt)


radioChair.addEventListener('click', chairQt)






extraParametryForm.addEventListener('click', addExtraParametry)
 radioExtra.addEventListener('click', addExtra)
// for(let i of radioExtra) {
//      i.addEventListener('click', addExtra)
// } 

for(let i of qtRadio) {
    i.addEventListener('input', addPlace)
}
for(let i of productItem) {
    i.addEventListener('click', choose)
}
// let change = document.querySelector('.chose-inside')
for(let i of product) {
    i.addEventListener('click', choose)
}
for(let i of next) {
    // i.addEventListener('click', nextStep)
}
for(let i of card) {
    i.addEventListener('click', makeStep)
}


// фунция для дивов
// function nextStep(event) {

// console.log(event.target.querySelector('.item-name'))
// let choice = document.querySelectorAll('.choisen-item')
// for(let i of choice) {
//     i.innerText = event.target.parentElement.lastElementChild.innerText
// }
//     for(let i of choice){
//         choise = i.innerText
//     }
   
// }


// функция для инпутов
function choose(e) {

    choise = e.target.value

    let label = document.querySelectorAll('.choisen-item')
    for(let i of label) {
        // console.log(e.target.nextElementSibling.innerText)
        i.innerText = e.target.value
        // i.innerText = e.target.nextElementSibling.innerText
    }

    // e.target.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.innerText = e.target.nextElementSibling.innerText
  
}

// фунция для кнопки далле
function makeStep(event) {

    if(event.target.nodeName == 'A') {
 
        // console.log('buttonpush')
 // sofas section 
    if(choise == 'Диваны') {

        // choise = document.querySelector('.choisen-item').innerText
     
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        
        options.classList.add('hide')
        sofas.classList.remove('hide')
        step.classList.add('linear-gradient')
        document.querySelector('.line-step-two').classList.add('linear-step-gradient')

       
    }
    // console.log(choise)
    if(choise == "Диван прямой," || choise == "Диван угловой," || choise == "Диван модульный,") {
        let name = choise
        // choise = document.querySelector('.choice').lastElementChild.innerText
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        sofas.classList.add('hide')
        radioButtons.classList.remove('hide')
        order.name = name
        document.querySelector('.step-three').classList.add('linear-gradient')
        document.querySelector('.line-step-three').classList.add('linear-step-gradient')

    }
    if(radioDone) {
        this.classList.add('hide')
        radioExtra.classList.remove('hide')
        radioDone = false
        document.querySelector('.step-four').classList.add('linear-gradient')
        document.querySelector('.line-step-four').classList.add('linear-step-gradient')
    }
    if(extraParametry) {
        radioExtra.classList.add('hide')
        extraParametryForm.classList.remove('hide')
        document.querySelector('.step-five').classList.add('linear-gradient')
    }
    if(addExtraParametryBool) {
        extraParametryForm.classList.add('hide')
        over.classList.remove('hide')
    }
// end of sofas section
        
//arm chair
    if(choise == 'Кресла') {

        // choise = document.querySelector('.choice').lastElementChild.innerText
     
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        
        options.classList.add('hide')
        chairs.classList.remove('hide')
        // console.log(options)
        step.classList.add('linear-gradient')
        document.querySelector('.line-step-two').classList.add('line-step-gradient')

    }

    if(choise == "Кресло с мягкими подлокотниками," || choise == "Кресло с деревянными подлокотникам,"
     || choise == "Кресло соспальным местом," || choise == "Офисное кресло,") {
        let name = choise
        // choise = document.querySelector('.choice').lastElementChild.innerText
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        order.name = name
        chairs.classList.add('hide')
        radioChair.classList.remove('hide')
        document.querySelector('.step-three').classList.add('linear-gradient')
        document.querySelector('.line-step-three').classList.add('line-step-gradient')
    }

      if(radioChairBool) {
        radioChair.classList.add('hide')
        radioExtra.classList.remove('hide')
        radioDone = false
        document.querySelector('.step-four').classList.add('linear-gradient')
        document.querySelector('.line-step-four').classList.add('line-step-gradient')
    }

    if(extraChair) {
        radioExtra.classList.add('hide')
        extraParametryForm.classList.remove('hide')
        document.querySelector('.step-five').classList.add('linear-gradient')
    }
      if(addExtraParametryChair) {
        extraParametryForm.classList.add('hide')
        over.classList.remove('hide')
    }
// chair end

     if(choise == 'Стулья') {

        // choise = document.querySelector('.choice').lastElementChild.innerText
     
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        
        options.classList.add('hide')
        stul.classList.remove('hide')
        // console.log(options)
        step.classList.add('linear-gradient')
        document.querySelector('.line-step-two').classList.add('linear-step-gradient')

    }

     if(choise == "Стулья без мягкой спинки," || choise == "Стулья с мягкой спинкой,") {
       
        let name = choise
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        order.name = name
        stul.classList.add('hide')
        radioStul.classList.remove('hide')
        document.querySelector('.step-three').classList.add('linear-gradient')
        document.querySelector('.line-step-three').classList.add('linear-step-gradient')
        }

        if(radioStulBool) {
        radioStul.classList.add('hide')
        radioExtra.classList.remove('hide')
        radioDone = false
        document.querySelector('.step-four').classList.add('linear-gradient')
        document.querySelector('.line-step-four').classList.add('linear-step-gradient')
    }


    if(extraStul) {
        radioExtra.classList.add('hide')
        extraParametryForm.classList.remove('hide')
        document.querySelector('.step-five').classList.add('linear-gradient')
      if(addExtraParametryStul) {
        extraParametryForm.classList.add('hide')
        over.classList.remove('hide')
    }
    }

// beds


    if(choise == 'Кровати') {

        choise = document.querySelector('.choice').lastElementChild.innerText
     
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        options.classList.add('hide')
        beds.classList.remove('hide')
        step.classList.add('linear-gradient')
        document.querySelector('.line-step-two').classList.add('linear-step-gradient')

    }

     if(choise == "Кровать с изголовьем," || choise == "Кровать без изголовья,") {
   
        let name = choise
        choise = document.querySelector('.choice').lastElementChild.innerText
        let newChoice = document.querySelectorAll('.choice')
        for(let i of newChoice) {
            i.lastElementChild.innerText = choise
        }
        order.name = name
        beds.classList.add('hide')
        radioBeds.classList.remove('hide')
        document.querySelector('.step-three').classList.add('linear-gradient')
        document.querySelector('.line-step-three').classList.add('linear-step-gradient')


    } 
    if(radioBedsBool) {
        radioBeds.classList.add('hide')
        radioExtra.classList.remove('hide')
        radioDone = false
        document.querySelector('.step-four').classList.add('linear-gradient')
        document.querySelector('.line-step-four').classList.add('linear-step-gradient')

    }
    if(extraBeds) {
        radioExtra.classList.add('hide')
        extraParametryForm.classList.remove('hide')
        document.querySelector('.step-five').classList.add('linear-gradient')
    }
      if(addExtraParametryBeds) {
        extraParametryForm.classList.add('hide')
        over.classList.remove('hide')
    }




}
}


// фунция по добавлению строки в выбор sofas
function addPlace(event) {
    console.log('amoun')
    newChoice = document.querySelectorAll('.choice')
    number.innerText = event.target.value
    let places = document.querySelector('.sofas-place')
    places.querySelector('.choisen-item').append(number)
    order.amount = event.target.value
    radioDone = true
        
}

function addExtra(event) {
 
    if(event.target.nodeName== "INPUT") {
        let choice = document.querySelectorAll('.choisen-item')
        let arrNode = []
        if(!event.target.checked) {
            for(let item of choice) {
                let arrItem = item.innerText.split(',')
                arrItem.filter((i,index) => {
                    if(i == event.target.value.slice(0, -1)){
                       arrItem.splice(index,1)
                       item.innerText = arrItem.join(',')
                 }
                    
                })
            }
          
        }else {
              for(let i of choice) {
            i.innerText += event.target.value
          }
          order.parametr = event.target.value
        }

        
          extraParametry = true
          extraChair = true
          extraStul = true
          extraBeds = true
          // result += choice[0].innerText


    }
}

function addExtraParametry() {

    if(event.target.nodeName== "INPUT") {
        // console.log('addExtra')
        let choice = document.querySelectorAll('.choisen-item')

        if(!event.target.checked) {
            for(let item of choice) {
                let arrItem = item.innerText.split(',')
                arrItem.filter((i,index) => {
                    if(i == event.target.value.slice(0, -1)){
                       arrItem.splice(index,1)
                       item.innerText = arrItem.join(',')
                 }
                    
                })
            }
          
        }else {
              for(let i of choice) {
            i.innerText += event.target.value
          }
          // for(let i of choice) {
          //   i.innerText += event.target.value
          // }
          order.dopParametr = event.target.value
          addExtraParametryBool = true
          addExtraParametryChair = true
          addExtraParametryStul = true
          addExtraParametryBeds = true
    
    }
}
}


function chairQt(event) {

     if(event.target.nodeName== "INPUT") {
        number.innerText = event.target.value
        let places = document.querySelector('.radio-buttons-chair')
        places.querySelector('.choisen-item').append(number)
        // for(let i of card) {
        //      let amount = i.querySelector('.choisen-item')
        //      amount.append(number)
        // }
      
        radioChairBool = true
        order.amount = event.target.value
    
     }
}

function stulQt(event) {
      if(event.target.nodeName== "INPUT") {
        number.innerText = event.target.value
        console.log(radioStul)
        radioStul.querySelector('.choisen-item').append(number)  
        order.amount = event.target.value
        radioStulBool = true
      }
}

function bedsQt() {
    if(event.target.nodeName== "INPUT") {

        number.innerText = event.target.value
        radioBeds.querySelector('.choisen-item').append(number) 
        order.amount = event.target.value 
        radioBedsBool = true
    }
}   

let submit = document.querySelector('.over-form')

submit.addEventListener('click', sendIt)

function sendIt(event) {

     if(event.target.nodeName == "BUTTON"){
        event.preventDefault()
        if(this.querySelector('.phone').value == '' || this.querySelector('.name').value == '') {
            alert("Введите ваши данные")
        }else {
            order.namePer = this.querySelector('.name').value
            order.phone = this.querySelector('.phone').value
            console.log(order)
            fetch('php/mail-big.php', {
             method: 'POST',
             body: ("objectData=" + JSON.stringify(order)),
             headers: {'Content-Type': 'application/x-www-form-urlencoded'
            }
            }).then(response => console.log(response))
         
        }
      
      
    }
}
