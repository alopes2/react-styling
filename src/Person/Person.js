import React from 'react';
import './Person.css';

const person = (props) => {
    // When using class-based components, it`s this.props
    // like <p>My name is {this.props.name}</p>
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
};

export default person;