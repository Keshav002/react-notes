import React from "react";
import * as obj from './ImportExport';

const name1 = "Keshav1";
const name2= "Keshav2";
const name3 = "Keshav3";

function fun(){
    return <p>Learning imports and exports</p>;
}
function ImportExport(){
    return(
        <>
        <ol>
    <li>{obj.default}</li>
  <li>{obj.name2}</li>
  <li>{obj.name3}</li>
  <li>{obj.fun()}</li>
  </ol>
  </>
    )
}
export default name1;   //For only one component we can use default
export {name2, name3, fun}; //other than default we have to use {}
export {ImportExport};