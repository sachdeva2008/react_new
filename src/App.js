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

    let Persons = null

    if(this.state.showPersonList){
          Persons = (
          <div>
            {this.state.persons.map(person => {
                return <p><Person Name = {person.Name} Age = {person.Age} ></Person></p>
            })}
            
          </div>
        )
    }

    return (
      <div className="App">
       <h1>Hello I am a React Page.</h1>
       <button onClick={this.showPersonHandler}>Switch Name</button>
       {Persons}

      </div>
    );
  }
}

export default App;
