import React, { useState } from "react";

const IncDec = () => {
  // UseState
  let [num2, setNum2] = useState(0);
  let [myArray, setMyArray] = useState([]);
  let [name, setName] = useState();

  let num = 4;
  const Increment = () => {
    console.log("Inc Called");

    setNum2(++num2);
  };
  const Decrement = () => {
    console.log("Dec Called");

    setNum2(--num2);
  };


  function storeNames(){
    console.log("Name",name)
    // setMyArray([...myArray],name)
    // console.log("Array",myArray)
  }

  return (
    <div>
      <button onClick={() => Decrement()}>-</button>
      <h1>{num2}</h1>
      <button onClick={() => Increment()}>+</button>
      <br />
      <input type="text" name="" id="" placeholder="Enter any name" onChange={(e)=>setName(e.target.value)}/>
      <button onClick={()=>storeNames()}>Submit</button>
    </div>
  );
};

export default IncDec;
