import React from 'react';

const Person = (Props) => {
	return (
			<div className="Person">
				<h3 onClick={Props.Click}>I am {Props.Name} and my age is {Props.Age}</h3>
				<p>{Props.children}</p>
				<input type="text" onChange={Props.Change} />
			</div>
		);
}

export default Person;
