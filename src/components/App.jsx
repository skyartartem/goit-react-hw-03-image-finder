import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    search: 'start',
    page: 1,
  };

  handleInput = ( state ) => {
    console.log(state);
    this.setState(state)
  };

  render() {
    return (
      <div>
        <Searchbar handleInput={this.handleInput} />
        <h1>{this.state.search}</h1>
      </div>
    );
  }
};
