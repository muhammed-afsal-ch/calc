import './App.css';
import * as math from 'mathjs';
import Button from './componets/Button'
import Input from './componets/input';
import { useState } from 'react';

const  App = () => {
  const [text, setText] =useState("");
  const [result, setResult] =useState("");

  const addToText = (val)=>{
    setText((text) => [...text, val + ""])
  };

  const resetInput = ()=>{
    setText("");
    setResult("");
  }

  const calculateResult = () =>{
    const input=text.join(""); //remove commass

    setResult(math.evaluate(input));

  }

  //text color
  const ButtonColor="#f2a33a";

  return (
    <div className="App">
        <div className="calc">
          <Input text={text} result={result}/>
          <div className="row">
            <Button symbol={7} handleClick={addToText}/>
            <Button symbol={8} handleClick={addToText}/>
            <Button symbol={9} handleClick={addToText}/>
            <Button symbol={"/"} color={ButtonColor} handleClick={addToText}/>
          </div>
          <div className="row">
            <Button symbol={4} handleClick={addToText}/>
            <Button symbol={5} handleClick={addToText}/>
            <Button symbol={6} handleClick={addToText}/>
            <Button symbol={"*"} color={ButtonColor} handleClick={addToText}/>
          </div>
          <div className="row">
            <Button symbol={1} handleClick={addToText}/>
            <Button symbol={2} handleClick={addToText}/>
            <Button symbol={3} handleClick={addToText}/>
            <Button symbol={"+"} color={ButtonColor} handleClick={addToText}/>
          </div>
          <div className="row">
            <Button symbol={0} handleClick={addToText}/>
            <Button symbol={"."} handleClick={addToText}/>
            <Button symbol={"C"} handleClick={resetInput}/>
            <Button symbol={"-"} color={ButtonColor} handleClick={addToText}/>
          </div>
          <Button symbol={"="} color="green" handleClick={calculateResult}/>
        </div>
    </div>
  );
}

export default App;
