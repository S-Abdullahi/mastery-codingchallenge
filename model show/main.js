// selecting element
const openBtn = document.querySelectorAll('.btn')
const closeBtn = document.querySelector('.close')
const popup = document.querySelector('.popup--con')
const overlay = document.querySelector('.overlay')

// to open
for(let element of openBtn){
    element.addEventListener('click', open)
}

function open(){
    popup.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

// to close button
closeBtn.addEventListener('click', close)

function close(){
    popup.classList.add('hidden')
    overlay.classList.add('hidden')
}

// to close with overlay
overlay.addEventListener('click', close)


// to close the escape key
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        close()
    }
})