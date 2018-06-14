import React, { Component } from 'react';
//import logo from './logo.svg';
import Person from '../components/Persons/Person/Person';
import './App.css';
import '../components/Persons/Person/Person.css';

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

  nameChangedHandler = (event,index) => {
    let personsList = [...this.state.persons];
    personsList[index].Name = event.target.value;
    this.setState ({
      persons:personsList
    })

  }

  deletePersonHandler = (clickedPara) => {
    let personsList = this.state.persons;
      personsList.splice(clickedPara,1);
      this.setState({persons:personsList});
  }

  showPersonHandler = () => {
    const currentBoolValue =  this.state.showPersonList;
    this.setState({showPersonList: !currentBoolValue})
  }

  render() {
    const style = {border: '3px solid #008000'};
    //const styleRed = {border: '3px solid red'};

    let Persons = null

    if(this.state.showPersonList){
          Persons = (
          <div>
            {this.state.persons.map((person,index) => {
                return <p><Person Change = {(event)=>this.nameChangedHandler(event,index)} Name = {person.Name} Age = {person.Age} Click={() => this.deletePersonHandler(index)} ></Person></p>
            })}

          </div>
        )
        style.border =  '3px solid red';
    }

    return (
      <div className="App">
       <h1>Hello I am a React Page.</h1>
       <button style = {style} onClick={this.showPersonHandler}>Switch Name</button>
       {Persons}

      </div>
    );
  }
}

export default App;
