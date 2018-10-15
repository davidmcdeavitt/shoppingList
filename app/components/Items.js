
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
    const addItem = this.addItem.value;
    this.setState({ item: [...this.state.item.addItem] });
    console.log(this.state.item);
  }

  render() {
    return (

      <div className="AdditionForm">
        <form onSubmit={(event) => { this.addToList(event) }}>
          <label>
            Name:
              <input type="text" ref={(input) => { this.addItem = input }} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

    );
  }
}

export default Items;