# ANONYMOUS SLACK BOT

## PURPOSE
* This is the app for you when...
	* You want to communicate with other team member
	* But do not want to let others know who send message

## SET UP BEFORE BUILD SLACK BOT APP
* Create slack bot
	* [Add an app or integration]=>[Manage]=>[Custom Integrations]=>[Bots]=>[Add Configuration]
* Create slack channel for each person
	* e.g, annonymous_ngon,annonymous_troioi
	* then, invite slack bot
* Create slack channel for annonymous post
	* e.g, annonymous
	* then, invite slack bot

## BUILD SLACK BOT APP
* Deploy Bot app to production server or somewhere
* Set slack bot api token into .env
* Set slack annonymous channel_id into .env

## ADDITIONAL INFO
* If you want to convert each person channel to private, it is also okay.

## REFERENCE
* [slackapi/node-slack-sdk](https://github.com/slackapi/node-slack-sdk)
* [how-to-check-channel-id](https://stackoverflow.com/questions/40940327/what-is-the-simplest-way-to-find-a-slack-team-id-and-a-channel-id)
