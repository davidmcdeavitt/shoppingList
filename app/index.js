var React = require('react');
var ReactDOM = require('react-dom');

require('./index.css');
import Items from "./components/Items"



ReactDOM.render(
  <div id="reactContainer">
    <Items />
  </div>,
  document.getElementById('app')
);