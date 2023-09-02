var h1 = document.querySelector('h1')
 var btn = document.querySelector('button')
 var img = document.querySelector('img')
var i =document.querySelector('i')
img.addEventListener('dblclick',function(){

    i.style.opacity=1
    
    setTimeout(function(){
    i.style.opacity=0

},1000)
})



var flag = 1

 btn.addEventListener('click',function(){
if(flag==1){
    h1.innerHTML='FRIENDS'
    btn.innerHTML='REMOVE'
    btn.style.backgroundColor='red'
    btn.style.Color='black'
    h1.style.color='green'
    h1.style.fontWeight='700'
    flag = 0
}
else{
    h1.innerHTML='STRANGER'
    btn.innerHTML='ADD-FRIEND'
    btn.style.backgroundColor='GREEN'
    h1.style.color='RED'
    h1.style.fontWeight='700'
    flag = 1
}

 })
 