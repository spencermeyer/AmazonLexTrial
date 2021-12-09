import React from 'react';
import Robot from './Robot'

export default class ActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.data = {};
  }

  getData() {
    console.log('this is getdata');
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      this.setState({data: xhr.responseText})
    })
    // xhr.open('GET', "http://localhost:9090/users");
    xhr.open('GET', "http://localhost:9090/lookup?number=07803937331");
    xhr.send();
  }

  render() {
    // const { data } = this.state;
    // console.log(data)

    return (
      <div>
        <button onClick={() => this.getData() }>
          GetData
        </button>
        <TextEntryArea data = {this.state.data}/>
      </div>
    );
  }
}

class TextEntryArea extends React.Component {
    constructor(props){
      super(props)
    }

    render() {
      return(
        <div className="text-entry">
          <p>{ JSON.stringify(this.props.data) }</p>
          <Robot/>
        </div>
        )
    }
}

