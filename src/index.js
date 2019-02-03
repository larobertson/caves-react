import React from "react";
import ReactDOM from "react-dom";
import Search from "./search.js";
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      caves: []
    }
  }

  handleSubmit () {
    //need to get search state from the other page
    Axios.post('/', payload)
  }

  render() {
    return (
      <div>
        <h1>Caves Around the World</h1>
        <Search />
      </div>
    )}
};

ReactDOM.render(<App />, document.getElementById("app"));
