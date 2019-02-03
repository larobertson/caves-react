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

  componentDidMount() {
    Axios.get('/')
    .then((results) => {
      console.log('successful get request', results)
    }).catch(err => alert('error in the get!'))
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
