import React from 'react';

const person = (args) => {
    return ( 
    <div>
        <h1>I am a Person {args.name}</h1>
        <p1>{args.children}</p1>
    </div>);
}

export default person;