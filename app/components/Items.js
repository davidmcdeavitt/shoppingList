
import React, { Component } from 'react';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [{ name: '', itemInCart: false }]
    };
    this.addToList = this.addToList.bind(this);
  }
  addToList(event) {
    this.setState({ item: event.target.item.name });
    console.log(this.state.item.name);
  }
  render() {
    return (

      <div className="AdditionForm">
        <form onSubmit={this.addToList}>
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