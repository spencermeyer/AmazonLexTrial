'use strict';

class ActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.state.data = {};
  }

  getData() {
    console.log('this is getdata');
  }



  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <div>
        <button onClick={() => this.setState({ liked: true }) }>
          Like
        </button>
        <button onClick={() => this.getData() }>
          GetData
        </button>
      </div>
    );
  }
}

let domContainer = document.querySelector('#action_button_container');
ReactDOM.render(<ActionButton />, domContainer);
