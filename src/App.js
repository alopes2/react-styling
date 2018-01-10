import React, { Component } from 'react';
import classes from  './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '987asd6dyf', name: 'Max', age: 28 },
      { id: '987asyhdj', name: 'Manu', age: 29 },
      { id: 'jk23g45iu32', name: 'Stephanie', age: 26 }
    ]
  };

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
      });
  }

  nameChangedHandler = (event, id) => {
    // const person = this.state.persons.find(person => person.id === id);
    const personIndex = this.state.persons.findIndex(p => p.id === id); //returns the index of the person

    const person = {...this.state.persons[personIndex]};
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    // };

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      btnClass = classes.red;
      persons = 
        <div>
          {this.state.persons.map((person, index) => {
            return (
                <Person 
                    /* click={this.deletePersonHandler.bind(this, index)} */
                    click={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    change={(event) => this.nameChangedHandler(event, person.id)}
                    />
              );
          })}
        </div> 
        ;
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2)
      assignedClasses.push(classes.red)
    if(this.state.persons.length <= 1)
      assignedClasses.push(classes.bold)

    return (
      /* <StyleRoot> */
        <div className={classes.App}>
          <h1>Hi, I'm a React app!</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button 
              /* style={style} */
              className={btnClass}
              onClick={this.togglePersonsHandler}
          >Toggle Persons</button>
          {persons}
        </div>
      // </StyleRoot>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;
// export default Radium(App);
