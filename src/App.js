import React, { Component } from 'react';
//import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';
import './Person/Person.css';

class App extends Component {

  state = {
    persons:[
      {Name:"Mohit Sachdeva",Age:"27"},
      {Name:"Rakesh Kumar",Age:"29"}
    ],
    showPersonList : false
  }

  switchNameHandler = (newName) => {
    this.setState ({
      persons:[
        {Name:newName,Age:"27"},
        {Name:"Rakesh",Age:"29"}
      ]
    })

  }

  nameChangedHandler = (event) => {
    this.setState ({
      persons:[
        {Name:event.target.value,Age:"27"},
        {Name:"Rakesh",Age:"29"}
      ]
    })

  }

  showPersonHandler = () => {
    const currentBoolValue =  this.state.showPersonList;
    this.setState({showPersonList: !currentBoolValue})
  }

  render() {
    return (
      <div className="App">
       <h1>Hello I am a React Page.</h1>
       <button onClick={this.showPersonHandler}>Switch Name</button>
       { this.state.showPersonList ?
         <div>
       <p><Person
            Name = {this.state.persons[0].Name} Age = {this.state.persons[0].Age} Change = {this.nameChangedHandler} Click = {this.switchNameHandler.bind(this,"Mohit Sachdeva")}
          /></p>
       <p><Person
            Name = {this.state.persons[1].Name} Age = {this.state.persons[1].Age} >I am from Delhi.
          </Person>
       </p>
       </div> : null
     }

      </div>
    );
  }
}

export default App;
