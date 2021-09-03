import React from "react";
import { Router } from "react-router-dom";
import RouterTest from "./React Router/RouterTest";
import { BrowserRouter } from "react-router-dom";

// import ChangeTitle from "./ChangeTitle";
// import Heading from "./Heading";
// import Paragraph from "./Paragraph";
// import Calc from "./Calc";
// import ImportExport from "./ImportExport";
// import * as obj from './ImportExport';
// import name1, {name2, name3, fun} from './ImportExport';
// import Card from "./Card";
// import SeriesData from "./SeriesData";
// import "./SeriesStyle.css";
// import ClickCounter from "./ClickCounter";
// import BootstrapUse from "./BootstrapUse";
// import GettingTime from "./GettingTime";
// import EventHandeling from "./EventHandeling";
// import Form from "./Form";
// import TestContext from "./ContextApi/TestContext";
// import UseEffect from "./UseEffect";
// import CallingApi from "./CallingApi";

//  const nCard = (val) => {     //We can also write this function inside map method
//     return (
//         <Card
//                   key={val.id}
//                  imgsrc={val.imgsrc}
//                 title={val.title}
//                 sname={val.sname}
//                 link={val.link} />
//     )
// }


function App2() {
    return (
        <>
            {/* <h1 className="heading_style"> List of Top 5 Netflix Series </h1> */}
            {/* <Heading/>
        <Paragraph/>
        {obj.ImportExport()}; */}
            {/* <Calc/> */}
            {/* {SeriesData.map(nCard)} */}
            {/* <ClickCounter/> */}
            {/* <BootstrapUse /> */}
            {/* <GettingTime/> */}
            {/* <EventHandeling/> */}
            {/* <Form /> */}
            {/* <TestContext /> */}
            {/* <UseEffect /> */}
            {/* <ChangeTitle /> */}
            {/* <CallingApi /> */}
            <BrowserRouter>
                <RouterTest />

            </BrowserRouter>


        </>
    )
}
export default App2;

// fat arrow function

// const myName = (a,b) => a+b;   //It will return a+b