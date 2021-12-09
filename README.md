An exercise in using APIs
-------------------------

I'm using AWS Lex and the Nexmo phone number lookup.


The server was created using:
  `express AmazonLexTrial --no-view`
and the front end was created using `create-react-app`.

INSTRUCTIONS FOR START UP
-------------------------
(if this is the first time, run `yarn install` / `npm install`)

Server
------
Run it like this:
  `npm start`  / `yarn start`
or
  `DEBUG=AmazonlexTutorial:* npm start`
it also runs with `node app.js` and `yarn start` (the latter because of the start script in package.json).

The server app appears in `localhost:9090`

Client
------
Run it like this:
`cd client`
`yarn start`

The client app appears in `localhost:9091`


Compiling JSX
-------------
On the server side, we need to run `npx babel --watch src --out-dir public/ --presets react-app/prod` in a separate process to hot re-compile jsx.  (see https://reactjs.org/docs/add-react-to-a-website.html)

There are really good documents about node here:
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment

ToDo:
-----

Fix the problem with the client side re-rendering and cancelling the ajax call when the first aws call is made.

Info
----

The client serves on http://192.168.0.34:9091  or http://localhost:9091/
The server serves on http://192.168.0.34:9090  or http://localhost:9090/


