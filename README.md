An exercise in using APIs
-------------------------

This was created using:
  `express AmazonLexTrial --no-view`

Run it like this:
  `npm start`
or
  `DEBUG=AmazonlexTutorial:* npm start`
it also runs with `node app.js` and `yarn start` (the latter because of the start script in package.json).

The app appears in `localhost:9090`

Compiling JSX
-------------
Need to run `npx babel --watch src --out-dir public/ --presets react-app/prod` in a separate process to hot re-compile jsx.  (see https://reactjs.org/docs/add-react-to-a-website.html)

There are really good documents about node here:
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment

ToDo:
-----

To get the reading of the response into react, will have to install the library into react, using npm.  i.e. need to create a react app.  https://www.npmjs.com/package/aws-sdk

To create a react app in the project:
https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/

(the proxy thing is the trick)

For some reason the client serves on http://192.168.0.34:9091  (not localhost)






