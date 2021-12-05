var express = require('express');
var router = express.Router();
const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: process.env['VONAGE_NEXMO_KEY'],
  apiSecret: process.env['VONAGE_NEXMO_SECRET']
});

/* lookup with Vonage Number Insight API */
router.get('/', function(req, res, next) {
  vonage.numberInsight.get({level: 'advancedSync', number: "447803937331"}, (error, result) => {
    if(error) {
      console.error(error);
    }
    else {
      // console.log(result);
      res.send(result);
    }
  });
});

module.exports = router;
