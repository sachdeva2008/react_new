import React, { Component } from 'react';
//import logo from './logo.svg';
import Personss from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
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
            <Personss persons = {this.state.persons}
                Changed = { this.nameChangedHandler}
                Clicked = {this.deletePersonHandler}
            />

          </div>
        )
        style.border =  '3px solid red';
    }

    return (
      <div className="App">
       <Cockpit Clicked = {this.showPersonHandler} style = {style}
       />
       {Persons}

      </div>
    );
  }
}

export default App;
