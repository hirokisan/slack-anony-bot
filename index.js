/**
 * Example for creating and working with the Slack RTM API.
 */

/* eslint no-console:0 */

var RtmClient = require('@slack/client').RtmClient;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

require('dotenv').config();

var token = process.env.SLACK_API_TOKEN || '';
var channel = process.env.ANONYMOUS_CHANNEL_ID;

var rtm = new RtmClient(token, { logLevel: 'debug' });
rtm.start();

rtm.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(message) {
  console.log('Message:', message);
	rtm.sendMessage(message.text, channel);
});

