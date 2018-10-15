var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class Items extends React.Component {
  render() {

    var needToBuy = this.props.list.filter(function (item) {
      return item.cart !== true;
    });
    var inMyCart = this.props.list.filter(function (item) {
      return item.cart === true;
    });
    return (
      <div>


        <hr />
        <h1> Need To Buy </h1>
        <ul>
          {needToBuy.map(function (item) {
            return <li key={item.name}>{item.name} <button>
              Move To Cart</button></li>
          })}
        </ul>

        <hr />
        <h1>In My Cart</h1>
        <ul>
          {inMyCart.map(function (item) {
            return <li key={item.name}>{item.name} <button>
              Move To Buy List</button></li>
          })}
        </ul>

      </div>
    )
  }
}

ReactDOM.render(
  <Items list={[
    { name: 'Squash', cart: true },
    { name: 'Cheese', cart: true },
    { name: 'Milk', cart: false },
    { name: 'Butter', cart: false },
    { name: 'Beef', cart: true },
    { name: 'Mushroom', cart: false }]}
  />,
  document.getElementById('app')
);