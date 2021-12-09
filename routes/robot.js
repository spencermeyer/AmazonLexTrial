AWS = require('aws-sdk');
var express = require('express');
var router = express.Router();

AWS.config.region = 'eu-west-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env['AWS_LEXBOT_IDENTITY_POOL_ID'],
});

var lexruntime = new AWS.LexRuntime();
var lexUserId = 'chatbot-demo' + Date.now();
var sessionAttributes = {};

/* GET robot. */
router.get('/', function(req, res, next) {
  console.log('REQUEST   ' + req.query.text );
  var params = {
      botAlias: '$LATEST',
      botName: 'spencerTestBot',
      inputText: req.query.text,
      userId: lexUserId,
      sessionAttributes: sessionAttributes
  };
  lexruntime.postText(params, function(err, data) {
      if (err) {
          console.log('this is err  ' + err, err.stack);
      }
      if (data) {
          console.log('server, showing data  ' + JSON.stringify(data));
          // capture the sessionAttributes for the next cycle
          sessionAttributes = data.sessionAttributes;
          // show response and/or error/dialog status
          res.send(JSON.stringify(data));
      }
  })
});

module.exports = router;
