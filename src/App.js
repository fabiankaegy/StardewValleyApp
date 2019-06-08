import React from 'react';
import logo from './logo.svg';
import './App.css';
import { fruits } from './Fruits';

class StardewValleyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: '',
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ItemList items={fruits} />
          <ItemList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-item">Add an item</label>
            <br />
            <input
              id="new-item"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <br />
            <button>
              Add item #{this.state.items.length + 1}
            </button>
          </form>
        </header>
      </div>
    );
  }
}

class ItemList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export default StardewValleyApp;
