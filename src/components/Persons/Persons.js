import React from 'react';

import Person from './Person/Person';

const Personss = (Props) => Props.persons.map((person,index) => {
      return <p><Person
      Change = {(event)=>Props.Changed(event,index)}
      Name = {person.Name}
      Age = {person.Age}
      Click={() => Props.Clicked(index)}
      ></Person></p>
  })


export default Personss;
