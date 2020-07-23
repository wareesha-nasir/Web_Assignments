// //CHAPTER#38-42

// //Q#1:
// function power(a, b) {
//     var result = 1;
//     if (b == undefined)
//         b = 2;
//     for (var i = 1; i <= b; i++) {
//         result = result * a;
//     }
//     return result;
// }

// console.log(power(2, 4));

// //Q#2:
// // in html file

// //Q#3:
// function perimeter(side1, side2, side3) {
//     var s = (side1 + side2 + side3) / 2;
//     return s;
// }

// function area(s, side1, side2, side3) {
//     var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
//     return area;
// }
// s = perimeter(5, 6, 7);
// console.log(area(s, 5, 6, 7));

// //Q#4:
// function mainfn(m1, m2, m3) {
//     var sum = m1 + m2 + m3;
//     var avg = average(sum);
//     var p = percentage(sum);
//     return p;
// }
// function average(sum) {
//     var average = sum / 3;
//     return average;
// }
// function percentage(sum) {
//     var per = (sum / 300) * 100;
//     return per;
// }
// console.log(mainfn(60, 70, 90));

// //Q#5:
// var s = prompt("Enter string: ");
// var ch = prompt("enter character in string to find it's index: ");
// function findIndex(s, ch) {
//     for (var i = 0; i < s.length; i++) {
//         if (s[i] === ch) {
//             return i;
//             break;
//         }
//         else if (s[i] != ch & i < s.length) {
//             continue;
//         }
//     }
//     return -1;
// }
// console.log(findIndex(s, ch));

// //Q#6:
// function disemvowel(str) {
//     let newString = " ";
//     if (str.length <= 25) {
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u") {
//                 newString += str[i];
//             };
//         };
//         return newString;
//     }
//     else{
//         return "Too Long!!Please Enter string of max. 25 characters."
//     }

// };
// inputString = prompt("Enter a string to remove vowels(Max. 25 chars long): ")
// console.log(disemvowel(inputString));           

//TASK 8
// var dis=+prompt("Enter the distance between two cities (in km)");
// var meters= dis*1000;
// var feet= meters*3.28;
// var inches=feet*12;
// var cm= inches*30;
// alert("The distance in meters is " + meters + " meters");
// alert("The distance in feet is " + feet+" feet.");
// alert("The distance in inchess is " + inches+" inches.");
// alert("The distance in centimeters is " + cm+ " centimeters.");

//TASK 9
// var hours=+prompt("Enter the number of hours employee worked?");
// if(hours>40){
//     hours=hours-40;
//     hours=hours*12.0;
//     alert("The overtime pay of employee is "+ hours);
// }
// else{
//     alert("You have to work for more than 40 hours to get overtime pay.")
// }

//TASK 10
// var amount =+ prompt("Enter the amount to withdraw:");
// alert("You will have "+Math.floor(amount/100)+" hundred notes, "+Math.floor((amount%100)/50)+" fifty notes and "+Math.floor((amount%50)/10)+" ten notes.");


//CHAPTER 43 - 48
//TASK 1
// function Click()
// {
//     alert("You clicked the link");
// }

//TASK 2
// function phone(){
//     alert("Thanks for purchasing a phone from us.");
// }

//TASK 3
// function SomeDeleteRowFunction() {
//    var td = event.target.parentNode; 
//    var tr = td.parentNode; 
//    tr.parentNode.removeChild(tr);
// }

//TASK 4
// function neww(){
//     var pic1= document.getElementById("car");
//     pic1.src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLE8PDUfSWZ0-N3VuNf3xy9sToaahxSFSuNw&usqp=CAU";
// }
// function prev(){
//     var pic2=document.getElementById("car")
//     pic2.src="data:image/jpeg;base64,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";
// }

//TASK 5
// var clicks = 0;
// function clickie() {
//         clicks += 1;
//         document.getElementById("clickse").innerHTML = clicks;
//     };