import React from "react";

function add(a, b){
let sum = a+b;
return sum;
}
function sub(a, b){
    let sub = a-b;
    return sub;
}
function multiply(a, b){
    let product = a*b;
    return product;
}
function divide(a, b){
    let division = a/b;
    return division.toFixed(2);
}
function Calc(){
    return(
        <>
        <ul>
            <li>Sum of two numbers is {add(4, 7)}</li>
            <li>Difference of two numbers is {sub(4, 7)}</li>
            <li>Product of two numbers is {multiply(4, 7)}</li>
            <li>Division of two numbers is {divide(4, 7)}</li>
        </ul>
        </>
    )
}
export default Calc;