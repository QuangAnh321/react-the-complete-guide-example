import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import Radium from 'radium'

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: 'John',
        age: '28'
      },
      {
        id: 2,
        name: 'James',
        age: '35'
      },
      {
        id: 3,
        name: 'Mary',
        age: '22'
      }
    ],
    description: 'some computer',
    isShowPerson: false
  }

  // changeNameHandler = (newName) => {
  //   this.setState(
  //     {
  //       persons: [
  //         {
  //           name: newName,
  //           age: '208'
  //         },
  //         {
  //           name: 'James12',
  //           age: '305'
  //         },
  //         {
  //           name: 'Mary12',
  //           age: '220'
  //         }
  //       ]
  //     }
  //   )
  // }

  // inputNameHandler = (event) => {
  //   this.setState(
  //     {
  //       persons: [
  //         {
  //           name: 'Max1232',
  //           age: '208'
  //         },
  //         {
  //           name: event.target.value,
  //           age: '305'
  //         },
  //         {
  //           name: 'Mary12',
  //           age: '220'
  //         }
  //       ]
  //     }
  //   )
  // }

  inputNameHandler = (event, id) => {
    const personIndex= this.state.persons.findIndex(p => {
      return p.id === id
    })

    const personToChangeName = {
      ...this.state.persons[personIndex]
    }

    personToChangeName.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = personToChangeName
    this.setState(
     {persons: persons}
    )
  }
  
  togglePersonHandler = () => {
    const doShowPerson = this.state.isShowPerson
    this.setState(
      {
        isShowPerson: !doShowPerson
      }
    )
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice()
    persons.splice(personIndex, 1)
    this.setState(
      {
        persons: persons
      }
    )
  }

  // render() {
  //   return (
  //     <div className="App">
  //      <h1>Some app 123456</h1>
  //      <button onClick={() => this.changeNameHandler('Anna')}>Change name</button>
  //      {console.log(this.state)}
  //      <Person 
  //       name={this.state.persons[0].name}
  //       age={this.state.persons[0].age}></Person>
  //      <Person 
  //       name={this.state.persons[1].name}
  //       age={this.state.persons[1].age}
  //       whenClick={this.changeNameHandler.bind(this, 'Max23232')}
  //       changed={this.inputNameHandler}>I like programming</Person>
  //      <Person 
  //       name={this.state.persons[2].name}
  //       age={this.state.persons[2].age}></Person>
  //      <p>{this.state.computer}</p>
  //     </div>
  //   );
    // return React.createElement('div', null, 'h1', 'abc')
    render() {

      const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'Lightgreen'
        }
      }

      let persons = null

      if (this.state.isShowPerson) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event) => this.inputNameHandler(event, person.id)}/>
            })}
         </div>
        )

        style.backgroundColor = 'red'
        style[':hover'] = {
          color: 'black'
        }
      }

      const classes = []
      if (this.state.persons.length <= 2) {
        classes.push('red')
      }

      if (this.state.persons.length <= 1) {
        classes.push('bold')
      }


      return (
        <div className="App">
         <h1>Some app 123456</h1>
         <p className={classes.join(' ')}>Warning here</p>
         <button
            style={style}
            onClick={this.togglePersonHandler}>Toggle Person</button>
         {persons}
        </div>
      );
  }
}

export default Radium(App);
