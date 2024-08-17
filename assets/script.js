// Onclick Function uses

function clickFunction(){
    document.getElementById("demo").innerHTML = "Ok onclick function is working, change color and font size";
    document.getElementById("demo").style.color = "red"; 
    document.getElementById("demo").style.fontSize = "30px"; 
}

// copy reference vlaues

let  a = [1, 2, 3, 4, 5, 6, 7];
let b = [...a];  // this ...  use for copy 

var obj = {name: "shakib"}; // copy obj
var obj2 = {...obj}

//  =============== if elase related ( truthy vs falsy)

// Truthy VS Falsy : ( JS er modde ja e likha hoy ta hoy Truthy value hoy noyto Falsy value hoy)
//     Truthy:- all values are Truthy without Falsy values;
//     Falsy:- all are falsy vlue ( 0, false, Undefined, NaN, null, document.all) 

// if("shakib"){
//     console.log("ok")
// }else{
//     console.log("not ok")
// }

// =============== forEach loop  

// var arr = [1, 3, 5, 7, 9, 22, 24, 26, 31, 33];

// arr.forEach(function(value){
//     console.log(value + 2 );
// })


// ============== forin loop
// var info = {
//     name: "Mobarok",
//     age: 25,
//     mobile: "01837875027",
// }

// for(var key in info ){
//     console.log(key, ":", info[key])
// }


// ============= first class funciton
// let val = function(a){};
// console.log(val);

// function test(a){
//     a();
// }
// test(function(){
//     console.log("hello check first class function")
// })




