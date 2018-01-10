import React from 'react';
import classes from './Person.css';
// import Radium from 'radium';

const person = (props) => {
    // When using class-based components, it`s this.props
    // like <p>My name is {this.props.name}</p>
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }
    return (
        /* <div className="Person" style={style}> */
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    );
};

export default person;
// export default Radium(person);