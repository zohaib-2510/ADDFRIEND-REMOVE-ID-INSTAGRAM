var h1 = document.querySelector('h1')
 var btn = document.querySelector('button')

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