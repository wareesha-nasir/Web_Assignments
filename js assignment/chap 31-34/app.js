//task 1
var a=new Date();
alert(a)

//task 2
var b=new Date();
var c=b.getMonth();
var aray=['january','febuary','march','april','may','june','july','august','september'
,'october','november','december'];
alert('current month= ' +aray[c])

//task 3
var b=new Date();
var c=b.getDay();
var aray=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
var d=aray[c].slice(0,3)
alert('today is ' +d);

//task 4
var b=new Date();
var c=b.getDay();
var aray=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
if(aray[c]=='sunday' || aray[c]=='saturday'){
    alert('its fun day')
}
else{alert("sorry :(")}

//task 5
var b=new Date();
var c=b.getDate();
if(c<16){
    alert('first fifteen days of the month')
}else{
    alert('last days of the month')
}

