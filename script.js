var colira=document.getElementById('1')
var colirb=document.getElementById('2')
var colirc=document.getElementById('3')

colira.addEventListener('mouseenter', function () {
    document.body.style.backgroundColor='khaki'
})
colirb.addEventListener('mouseenter',function () {
    document.body.style.backgroundColor='palegreen'
})
colirc .addEventListener('mouseenter',function () {
    document.body.style.backgroundColor='silver'
})

var t= document.getElementById('txt')
var btn1= document.getElementsByTagName('button')

btn1[0].addEventListener('click', function () {
        t.style.visibility ='hidden'
})

btn1[1].addEventListener('click', function () {
        t.style.visibility ='inherit'
})