import React, { Component } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TodoRows from './components/TodoRows';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: 'Phuc',
      todoItems: [
        { action: 'Buy Milk', done: false },
        { action: 'Dentist at 5pm', done: false },
        { action: 'GO to gyn', done: false },
      ],
      newTodo: '',
    };
  }

  updateValue = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  addButton = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, done: false },
      ],
    });

    this.setState({
      newTodo: '',
    });
  };

  toggleDone = (action) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === action ? { ...item, done: !item.done } : item
      ),
    });
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <NavBar name={this.state.userName} />
          <div className='col-12'>
            <input
              className='form-control'
              onChange={this.updateValue}
              value={this.state.newTodo}
            />
            <button className='btn btn-primary' onClick={this.addButton}>
              Add
            </button>
          </div>
          <div className='col-12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todoItems.map((item) => (
                  <TodoRows
                    key={item.action}
                    action={item.action}
                    done={item.done}
                    toggleDone={this.toggleDone}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
