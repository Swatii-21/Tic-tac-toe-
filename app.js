let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn") ; 

let turnO = true ; ///player x , player o

// let arr = ["apple" , "banana" , "litchi"];

// let arr2 = [["apple" , "litchi"] , ["potato" , "mushroom"] , ["pants " , "shirts"]];

const winpattern = [
    [0 , 1 , 2] , 
    [0 , 3 , 6] , 
    [0 , 4 , 8] ,
    [1 , 4 , 7] ,
    [2 , 5 , 8] , 
    [3 , 4 , 5] , 
    [6 , 7 , 8] ,
];

boxes.forEach((box) =>{
    box.addEventListener("click" , () => {
        console.log("box was clicked ") ; 
        
        if( turn0 ){
            //player0
            box.innerText = "0";
            turn0 = false ; 
        } else {
            //player x 
            box.innerText = "X" ; 
            turn0 = true ; 
        }
        box.disabled = true ; 

        checkwinner();
    }) ; 
}) ; 

const checkwinner =() => {
    for(pattern of winpatterns){
        console.log(pattern[0] , pattern[1] , pattern[2]);
        console.log(pattern[0].innerText , pattern[1].innerText , pattern[2].innerText);
    }
};
