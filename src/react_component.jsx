'use strict';

class ActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.state.data = {};
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like
      </button>
    );
  }
}

let domContainer = document.querySelector('#action_button_container');
ReactDOM.render(<ActionButton />, domContainer);
