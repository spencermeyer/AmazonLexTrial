import React from 'react';
import AWS from 'aws-sdk';

export default class Robot extends React.Component {
  constructor(props) {
    super(props);
    this.pushChat = this.pushChat.bind(this);
    this.showResponse = this.showResponse.bind(this);
    this.showRequest = this.showRequest.bind(this);
    // this.state.data = {'starting data': 'foo'};
  }

  pushChat() {
    AWS.config.region = 'eu-west-2'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'eu-west-2:4d686157-07e1-4861-a408-01111f511a15',
    });
    var lexruntime = new AWS.LexRuntime();
    var lexUserId = 'chatbot-demo' + Date.now();
    var sessionAttributes = {};
    console.log('this is push chat');

    var wisdomText = document.getElementById('wisdom');

    if (wisdomText && wisdomText.value && wisdomText.value.trim().length > 0) {
      var wisdom = wisdomText.value.trim();
      console.log('this is wisdom   ' + wisdom); // all good
      wisdomText.value = '...';
      wisdomText.locked = true;
      // send it to the Lex runtime
      var params = {
          botAlias: '$LATEST',
          botName: 'spencerTestBot',
          inputText: wisdom,
          userId: lexUserId,
          sessionAttributes: sessionAttributes
      };
      this.showRequest(wisdom);


      lexruntime.postText(params, function(err, data) {
          if (err) {
              console.log('this is err  ' + err, err.stack);
              this.showError('Error:  ' + err.message + ' (see console for details)')
          }
          if (data) {
              console.log('showing data  ' + data);
              // capture the sessionAttributes for the next cycle
              sessionAttributes = data.sessionAttributes;
              // show response and/or error/dialog status
              this.showResponse(data);
          }
          // re-enable input
          wisdomText.value = '';
          wisdomText.locked = false;
      });
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


