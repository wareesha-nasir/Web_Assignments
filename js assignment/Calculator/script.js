const btn=document.querySelectorAll('.btn')
const screen=document.querySelector('.screen')
const clear=document.querySelector('.clear')
const equal=document.querySelector('.green')

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        let num=btn[i].getAttribute('data-num')
        screen.value +=num
    })
}
equal.addEventListener('click',function(){
if(screen.value === ''){
    alert('there is no value !!!')
}
else{
    let value=eval(screen.value);
    screen.value=value;
}
})
clear.addEventListener('click',function(){
    screen.value=" ";
})