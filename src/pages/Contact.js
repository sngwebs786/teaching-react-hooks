import React, { useEffect, useState } from "react";

const Contact = () => {
  // let a;
  const [myVar, setMyVar] = useState();
  const [a, setA] = useState();
  //useeffects

  // 1. Refresh & change

  useEffect(() => {
    console.log("Run on every render");
  });

  // 2. One time
  useEffect(() => {
    console.log("One time");
  }, []);

  // 3. Specific Variable
  useEffect(() => {
    console.log("myVar ki value change ho gayi hai");
  }, [myVar]);

  function change() {
    setMyVar("Abc");
  }
  function nochange() {
    setA(5)
  }
  return (
    <>
      <h1>Contact</h1>
      <button onClick={() => change()}>Change</button>
      <button onClick={() => nochange()}>No Change in myVar</button>
    </>
  );
};

export default Contact;
