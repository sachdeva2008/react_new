import React, { Component } from 'react';

const Person = (Props) => {
	return (
			<div>
				<h3 onClick={Props.click}>I am {Props.Name} and my age is {Props.Age}</h3>
				<p>{Props.children}</p>
			</div>
		);
}

export default Person;
