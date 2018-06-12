import React, { Component } from 'react';
//import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons:[
      {Name:"Mohit Sachdeva",Age:"27"},
      {Name:"Rakesh Kumar",Age:"29"}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState ({
      persons:[
        {Name:newName,Age:"27"},
        {Name:"Rakesh",Age:"29"}
      ]
    })

  }

  render() {
    return (
      <div className="App">
       <h1>Hello I am a React Page.</h1>
       <button onClick={()=>this.switchNameHandler("Mohit")}>Switch Name</button>
       <p><Person
            Name = {this.state.persons[0].Name} Age = {this.state.persons[0].Age} click = {()=>this.switchNameHandler("Mohit Sachdeva")} 
          /></p>
       <p><Person
            Name = {this.state.persons[1].Name} Age = {this.state.persons[1].Age} >I am from Delhi.
          </Person>
       </p>
      </div>
    );
  }
}

export default App;
