import React from 'react';

export default class ActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.state.data = {'starting data': 'foo'};
  }

  getData() {
    // Axios would be better.
    console.log('this is getdata');
    var xhr = new XMLHttpRequest()
    xhr.addEventListener('load', () => {
      // console.log(xhr.responseText);
      this.setState({data: xhr.responseText})
    })
    // xhr.open('GET', "http://localhost:9090/users");
    xhr.open('GET', "http://localhost:9090/lookup?number=07803937331");
    xhr.send();
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    const { data } = this.state;
    console.log(data)

    return (
      <div>
        <button onClick={() => this.setState({ liked: true }) }>
          Like
        </button>
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
        </div>
        )
    }
}

