import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  getText(event) {
    this.setState({
      text: event.target.value
    })
    console.log('now state is:', this.state)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="enter cave name" value={this.state.text} onChange={this.getText.bind(this)}></input>
        <input type="submit" value="Submit" />
    </form>
    )
  }
}

export default Search