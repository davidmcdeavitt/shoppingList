
import React, { Component } from 'react';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ['pizza', 'milk', 'cookies'],
      // itemInCart: false
    };
    this.addToList = this.addToList.bind(this);
  }
  addToList(event) {
    event.preventDefault();
    const { items } = this.state;
    const addItem = 'test';
    this.setState({ item: [...this.state.item.addItem] });
  }

  render() {
    return (

      <div className="AdditionForm">
        <form onSubmit={(event) => { this.addToList(event) }}>
          <label>
            Name:
              <input type="text" item={this.state.item.name} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

    );
  }
}

export default Items;