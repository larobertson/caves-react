import React from 'react';
import Axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      length: null,
      depth: null,
      city: '',
      state: '',
      country: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    let payload = this.state;
    console.log('this is the text:',payload)
    Axios.post('/', { payload })
  }

  getText(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <input type="text" name="name" placeholder="enter cave name" value={this.state.text} onChange={this.getText.bind(this)}/>
        </div>
        <div>
          <input type="number" name="length" placeholder="enter cave length" value={this.state.length} onChange={this.getText.bind(this)}/>
          <input type="number" name="depth" placeholder="enter cave depth" value={this.state.depth} onChange={this.getText.bind(this)}/>
        </div>
        <div>
          <input type="text" name="city" placeholder="enter city" value={this.state.city} onChange={this.getText.bind(this)}/>
          <input type="text" name="state" placeholder="enter state" value={this.state.state} onChange={this.getText.bind(this)}/>
          <input type="text" name="country" placeholder="enter country" value={this.state.country} onChange={this.getText.bind(this)}/>
        </div>
        <input type="submit" value="Submit" />
    </form>
    )
  }
}

export default Search