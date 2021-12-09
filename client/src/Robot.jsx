import React from 'react';
import axios from 'axios';

export default class Robot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.data = {};
    this.pushChat = this.pushChat.bind(this);
    this.showResponse = this.showResponse.bind(this);
    this.showRequest = this.showRequest.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  pushChat() {
    console.log('this is push chat');
    var wisdomText = document.getElementById('wisdom');

    if (wisdomText && wisdomText.value && wisdomText.value.trim().length > 0) {
      var wisdom = wisdomText.value.trim();
      console.log('this is wisdom   ' + wisdom); // all good
      wisdomText.value = '...';
      wisdomText.locked = true;
      // this.showRequest(wisdom);
      console.log('about to request');

      const url = "http://localhost:9090/robot?text="+wisdom;
      const newData = async () => {
        const resp = await axios.get(url);
        this.setState({data: resp})
      }
      newData();
    }
    return false;
  }

  showRequest(daText) {
    console.log('this is show request  ' + daText);
    var conversationDiv = document.getElementById('conversation');
    var requestPara = document.createElement("P");
    requestPara.className = 'userRequest';
    requestPara.appendChild(document.createTextNode(daText));
    conversationDiv.appendChild(requestPara);
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
  }

  showResponse(lexResponse) {
    console.log('this is show response' + lexResponse);
    var conversationDiv = document.getElementById('conversation');
    var responsePara = document.createElement("P");
    responsePara.className = 'lexResponse';
    if (lexResponse.message) {
        console.log(lexResponse);
        // here we have access to lexResponse.slots.number
        responsePara.appendChild(document.createTextNode(lexResponse.message));
        responsePara.appendChild(document.createElement('br'));
    }
    if (lexResponse.dialogState === 'ReadyForFulfillment') {
        responsePara.appendChild(document.createTextNode(
            'Ready for fulfillment'));
    } else {
        responsePara.appendChild(document.createTextNode(
            '(' + lexResponse.dialogState + ')'));
    }
    conversationDiv.appendChild(responsePara);
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
  }

  showError(daText) {
    var conversationDiv = document.getElementById('conversation');
    var errorPara = document.createElement("P");
    errorPara.className = 'lexError';
    errorPara.appendChild(document.createTextNode(daText));
    conversationDiv.appendChild(errorPara);
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
  }

  render() {
    return (
      <div>
        <div id="conversation"></div>
        <form id="chatform" onSubmit={this.pushChat}>
          <input type="text" id="wisdom" size="80" defaultValue="" placeholder="Ask me things"/>
        </form>
      </div>
    );
  }
}


