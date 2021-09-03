// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";

// const country = "India";
// ReactDOM.render(
  // <div>
  // [
  // <React.Fragment>
  // <>
  //   <h1> Hello World! </h1>
  //   <p>Say hello to {country}</p>
  //   <p>Say hello to the world again! {2 * 3} times</p>
  // </>
  // </React.Fragment>
  // ]
  //</div> //These are not html these are XML
  // , document.getElementById("root"));
  //We cant write two tags separate we have to wrap them into a div or we can use sq bracket separating each tag with comma they will work as array of elements
  //React fragment reduce one div inside div if we not write it then it also work ie. in line 8
// We use curly braces to write javascript expressions

//Using template literals to make our work easy
// const hGreet = "Namaste";
// const eGreet = "Hello";
// var date = new Date().toLocaleDateString();
// var time = new Date().toLocaleTimeString();
// var img = "https://source.unsplash.com/300x400/?youtube icon,youtube logo";
// var link = "https://www.youtube.com/"
//Writting inline css
// var obj = {
//   color: 'aqua',
//   fontWeight:'bold',
//   fontSize: '30px',
//   margin:'20px 0px',
//   textShadow: '0px 5px 6px black'
// };
// ReactDOM.render(
// <>
// <h1 contentEditable="true">{`In Hindi we say ${hGreet}. In english we say ${eGreet}`}</h1>
// <p style={obj}>{`Today date is ${date}`}</p>
// <p>{`Current time is ${time}`}</p>
// <div className="image">
// <a href={link} target="_youtube"><img src={img} alt="Youtube"/></a>
// </div>
// </>
//   , document.getElementById("root"));

//Mini project
// let curDate = new Date();
// let curHour = curDate.getHours();
// let greet = '';
// let styleColor = {};
// if(curHour>=1 && curHour<12){
//   greet = 'Good Morning';
//   styleColor.color = 'green';
// }else if(curHour>=12 && curHour<19){
//   greet = 'Good Afternoon';
//   styleColor.color = 'orange';
// } else{
//   greet = 'Good Night';
//   styleColor.color = 'grey';
// }
// ReactDOM.render(<h1>Hello Keshav , <span style={styleColor}>{greet}</span></h1>,document.getElementById("root"));
