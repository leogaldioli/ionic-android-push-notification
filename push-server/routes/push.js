var express = require('express');
var router = express.Router();
var gcm = require('node-gcm');

var message = new gcm.Message({
    priority: 'high',
    contentAvailable: true,
    data: {
        key1: 'message1',
        key2: 'message2'
    },
    notification: {
        title: "Hello, World",
        icon: "icon",
        body: "It Works",
        image: 'https://dl.dropboxusercontent.com/u/887989/antshot.png'
    }
});


// Set up the sender with you API key
var sender = new gcm.Sender('API_KEY');


/* GET users listing. */
router.post('/', function(req, res, next) {
	var regIds = [req.body.id];
	// Now the sender can be used to send messages
	sender.send(message, { registrationIds: regIds }, function (err, result) {
	    if(err) console.error(err);
	    else    console.log(result);
	    res.send(result);
	});

});

module.exports = router;
