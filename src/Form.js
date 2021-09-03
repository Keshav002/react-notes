import React, { useState } from "react";

const Form = () => {
  const [fullName, changeFullName] = useState({
    fname: "",
    lname: "",
  });

  const handelInput = (event) => {
    const {name, value} = event.target;

    changeFullName((preValue) => {
      return{
        ...preValue,
        [name]:value,
      };
      
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //   };

      // }
    });

  };

  const submitForm = (event) => {
    event.preventDefault();
  }
  return (

    <>
      <div className="main_div">
        <form onSubmit={submitForm}>
          <h1>Hello {fullName.fname} {fullName.lname}</h1>
          <input name="fname" type="text" placeholder="Enter your name" onChange={handelInput}
            value={fullName.fname}
          />
          <input type="text" name="lname" placeholder="Enter your last name" onChange={handelInput}
            value={fullName.lname}
          />
          <button>Click Me:</button>
        </form>
      </div>

    </>
  );
};

export default Form;