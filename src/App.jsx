import { Component } from 'react';
import './App.css';
import Button from './component/Button';
import { Input } from './component/Input';
import ClearButton from './component/ClearButton';

import * as math1 from 'mathjs';

class App extends Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      input : ""
    };

    
  }
  addToInput=val =>
  {
    //if(val is +,-,/X)
      //save the operator and input and clear the input 
    // if its number concatenate it 
    this.setState({input: this.state.input + val});

  }

  handleEqual()
  {

    this.setState({input:math1.evaluate(this.state.input)});

    
  }

  handleClear ()
    {
      this.setState({input:""});
    }

render(){
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input input={this.state.input}></Input>
      <div className="row">
       <Button handleClick={this.addToInput}>7</Button>
       <Button handleClick={this.addToInput}>8</Button>
       <Button handleClick={this.addToInput}>9</Button>
       <Button handleClick={this.addToInput}>/</Button>
      </div>
      <div className="row">
       <Button handleClick={this.addToInput}>4</Button>
       <Button handleClick={this.addToInput}>5</Button>
       <Button handleClick={this.addToInput}>6</Button>
       <Button handleClick={this.addToInput}>*</Button>
      </div>
      <div className="row">
       <Button handleClick={this.addToInput}>1</Button>
       <Button handleClick={this.addToInput}>2</Button>
       <Button handleClick={this.addToInput}>3</Button>
       <Button handleClick={this.addToInput}>+</Button>
      </div>
      <div className="row">
       <Button handleClick={this.addToInput}>.</Button>
       <Button handleClick={this.addToInput}>0</Button>
       <Button handleClick={()=> this.handleEqual()}>=</Button>
       <Button handleClick={this.addToInput}>-</Button>
      </div>
      <div className="row">
       <ClearButton handleClick={()=> this.handleClear()}>Clear</ClearButton>
      </div>
      </div>
    </div>
  );
}
}
export default App;
