import React from 'react';

const Cockpit = (Props) => {
  return(
      <p>
      <h1>Hello I am a React Page.</h1>
      <button style = {Props.style} onClick={Props.Clicked}>Switch Name</button>
      </p>
  );
}

export default Cockpit;
