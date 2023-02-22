import './App.css';
import React, { useState } from 'react';
import Button from './components/Button';

function App() {
  // let title = props.title;

  // const [title, setTitle] = useState("Changed!");

  // const clickHandler = () => {
  //   setTitle("Changed!")
  //   console.log('Changed!')
  // };


  // return (
  //   <div className="button">
  //     <button onClick={clickHandler}>Change Me!</button>
  //   </div>
  // );

  // const sayHello = () => {
  //   alert('You clicked me!');
  // }
  // // Usage
  // return (
  //   <button onClick={sayHello}>Default</button>
  // );


  const [buttonText, setButtonText] = useState("Next"); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

  const changeText = () => setButtonText();

  return (
    <Button onClick={changeText}></Button>
  )
}

export default App;
