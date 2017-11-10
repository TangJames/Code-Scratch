
<h1 align="center">
  <br>
  <a href="https://code-scratch.herokuapp.com/"><img src="https://i.imgur.com/jstu8sO.png" alt="GO-ceries" width="700"></a>
  <br>

  <br>
</h1>

<h4 align="center"> Capture, Organize and Search your private vault of code. </h4>

  </a>
</p>
<br>


- https://code-scratch.herokuapp.com/

<a><img src="https://i.imgur.com/w5DQOwg.png" alt="Login" width="700"></a>
<a><img src="https://i.imgur.com/GQQvn0T.png" alt="Add" width="700"></a>
<a><img src="https://i.imgur.com/Za3bSKc.png" alt="View" width="700"></a>


## Key Features

* GITHUB Login
* Have your code anywhere you go!
* Easy access
* Simplistic design

## Required dependencies

- "dotenv": "^4.0.0",
- "firebase": "^4.6.1",
- "react": "^16.0.0",
- "react-dom": "^16.0.0",
- "react-js-pagination": "^3.0.0",
- "react-router-dom": "^4.2.2",
- "react-scripts": "1.0.16",
- "scss": "^0.2.4"


## How To Use / Setup

### Web App Needs
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.  You will also need a .env file to store your database environent variables. 

### Database Needs
You will need to create a Firebase account and project for your database.  
1. Sign up and create a new Firebase Project (database) here: https://firebase.google.com/  
2. From project overview, fire up your first "realtime database" by going to:
    Develop -> Database -> Realtime Database -> Get Started.
3. Return to Project Overview -> Choose 'Add Firebase to Your Web App' - a pop-up will come up with all the database env variables you will need. These will need to find their way into your .env file as shown below. 

``` Your CodeScratch Project Folder/.env 
  -REACT_APP_API_KEY="<< your Firebase API Key here >>"
  -REACT_APP_AUTH_DOMAIN="<< your firebase project domain here >>.firebaseapp.com"
  -REACT_APP_DATABASE_URL="<< your Firebase Database URL >>.firebaseio.com"
  -REACT_APP_STORAGE_BUCKET="<< your Firebase Storage Bucket >>.appspot.com"
  -REACT_APP_MESSAGING_SENDER_ID="<< your Firebase Messaging Sender ID here>>"
```

### Authentication Needs
To enable github user login authentication, a github developer API must be created. 
1. Start by authorizing your Firebase account to talk to Github API. 
From Firebase project overview go to Developer -> Authentication - Setup Sign In Method, choose Github and Enable. (Keep this screen up). 
2. In a new window go to github.com and login (or create an account). Once logged in from your profile drop down select Settings. From the github settings page go to Developer Settings. 
3. Choose oAuth Apps and click 'New oAuth App'
4. Give your developer app a name.  For homepage url, choose "http://localhost:3000"
5. Back on Github in the auth screen, you will find a Firebase callback url provided.  Copy/paste this callback url to your new Github app as the "Authorization callback URL" so the two apps can speak to each other.  On github, Click "register application".
6. Github will create a Client ID and Client Secret.  Copy/paste these back in your github authentication screen on Firebase and click "Save" 
7. On the Firebase Authentication menu, scroll down to Authorized Domains and ensure localhost is listed.  

## Install Instructions via Command Line

From your command line:

```bash (or terminal(mac))
# Clone this repository
$ git clone https://github.com/TangJames/Code-Scratch

# Go into the repository
$ cd Code-Scratch

# Install dependencies
$ npm install

# Setup dotenv for your local environment
$ npm install dotenv
$ touch .env  // refer to the Firebase Section above to add the Environment Variables for your database.
$ touch .gitignore   // Add .env and node_modules to your .gitignore file 

# Run the app
$ npm start
```

## Contributors
- <a href="https://github.com/Lazercat">Jesse Lewis</a>
- <a href="https://github.com/dev-ry">Devin Ryan</a>
- <a href="https://github.com/tangjames">James Tang</a>
- <a href="https://github.com/sleeptightiger">Gerry Morales Meza</a>

