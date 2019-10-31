import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


// function App() {
//   return (
//     <div className="App">
//      <h1> Hi! I'm a React App </h1>
//     </div>
//   );
// }
class App extends Component {

  state = {
    persons: [
      { name: 'Max' },
      { name: 'Mani' },
      { name: 'Satnam' }
    ]
  }

  switchNameHandler = () => {
    this.setState(
      {
        persons: [
          { name: 'Maxiam' },
          { name: 'Mani' },
          { name: 'Satnam' }
        ]
      }
    )
  }


  render() {
    return (
      <div className="App">
        <h1>Hi!</h1>
        <button onClick={this.switchNameHandler}>Switch</button>
        <Person name={this.state.persons[0].name}> My hobbies: Cricket</Person>
        <Person name={this.state.persons[1].name} />

        <Person name={this.state.persons[2].name} />
      </div>
    );
    // return React.createElement('div', { class: 'App' }, React.createElement('h1', null, 'Hello'));
  }


}

export default App;
