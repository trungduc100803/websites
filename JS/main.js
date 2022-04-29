var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)


var fagItem    = $$('.fag-item')
var menu       = $('.header-top__menu')
var nav        = $('#navbar')

fagItem.forEach( item => {
    item.addEventListener('click', function() {
        var fagItemToggle = this.querySelector('.fag-item__toggle')
        var fagItemText   = this.querySelector('.fag-item__text')

        fagItemToggle.classList.toggle('active')
        fagItemText.classList.toggle('click')
    })
})

// console.log(nav)


menu.addEventListener('click', function() {

    // if(nav.style.display == 'block'){
    //     nav.style.display = 'none'
    // }
    // if(nav.style.display === 'none'){
    //     nav.style.display = 'block'
    // }
    nav.classList.toggle('block')
})