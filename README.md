READ ME

Please go through doc and watch the videos Ive included.

Front-End dev environment

To get the app to run you must be in the client folder.

In the terminal type: cd client.

Then type: npm run

This should produce the project on Localhost 3000

Back-End

Still working on getting everything set up. Go to bottom to see instructions.

To create react app

https://legacy.reactjs.org/docs/create-a-new-react-app.html

WATCH

How to use Tailwind CSS in React JS for Beginners | Install Tailwind CSS in React App from Scratch

Pay attention to the components section at the end.

https://www.youtube.com/watch?v=1WdL1TLfkYo
fasdfasd

PLEASE WATCH

How to use GIT when working with a team?

This will teach you about git commit from the terminal. You may want

https://www.youtube.com/watch?v=jhtbhSpV5YA

Here is a cheat sheet

https://training.github.com/downloads/github-git-cheat-sheet/

BACK END INSTRUCTIONS & SETUP

Feel free to confirm i set up the environment correctly. I completed up to STEP 4.

If text below doesnt show up well follow this link: https://chatgpt.com/share/67353100-80d4-8005-a086-cb676648cf70

Here’s a step-by-step guide to setting up your development environment in VS Code for your React/React Native and Express app with Firebase Auth and either MongoDB or AWS for database management.

1. Install Necessary Tools

Node.js: Download and install Node.js. This will include npm, the Node Package Manager.

VS Code: Ensure you have the latest version of VS Code.

Git: Install Git if you haven’t yet, as version control is crucial. Download it from Git's official site.

MongoDB CLI (optional): If you're using MongoDB, install the MongoDB CLI to interact with MongoDB.

2. Set Up Your VS Code Workspace

Open VS Code and create a folder for your project. You can name it something like my-app.

Inside your project folder, open the Integrated Terminal (Ctrl + ~ on Windows/Linux, Cmd + ~ on macOS).

3. Initialize Git and Create a Monorepo (Optional)

If you want your front and backends in the same repo, create separate folders for each:

bash

Copy code

mkdir client backend

Initialize Git:

bash

Copy code

git init

4. Set Up Frontend (React + Tailwind)

Navigate to your client folder:

bash

Copy code

cd client

Create a new React app:

bash

Copy code

npx create-react-app .

Install Tailwind CSS:

bash

Copy code

npm install -D tailwindcss
npx tailwindcss init

Configure tailwind.config.js and your CSS file. You can follow Tailwind’s guide to integrate it with Create React App.

5. Set Up React Native

Navigate back to the root directory:

bash

Copy code

cd ..

Use the expo CLI for easier setup (recommended for beginners):

bash

Copy code

npm install -g expo-cli
expo init mobile

Choose a template, then install NativeWind for Tailwind-style design in React Native:

bash

Copy code

cd mobile
npm install nativewind

6. Set Up Backend (Express + Firebase Auth)

Navigate to the backend folder:

bash

Copy code

cd ../backend

Initialize a new Node.js project and install dependencies:

bash

Copy code

npm init -y
npm install express mongoose dotenv firebase-admin cors

Create a file structure for your backend:

bash

Copy code

mkdir src
touch src/index.js .env

Set up a basic Express server in src/index.js:

javascript

Copy code

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
res.send('Hello from Express!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

Configure .env to add sensitive data (e.g., MongoDB URI, Firebase credentials).

7. Firebase Auth Setup

Go to Firebase Console, create a project, and enable Authentication for web and mobile.

Install Firebase in both client and mobile folders:

bash

Copy code

npm install firebase

In your React and React Native code, configure Firebase Auth using Firebase SDK. You’ll use different configurations for each platform (web/mobile).

8. Configure Database (MongoDB or AWS DynamoDB)

MongoDB Atlas: If you choose MongoDB, create an account on MongoDB Atlas and set up a cluster. Add your MongoDB URI to .env:

plaintext

Copy code

MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mydatabase

AWS DynamoDB: Alternatively, you could configure DynamoDB with the AWS SDK.

9. Add Scripts to Package.json

In each package.json, add scripts to start your app. In client/package.json:

json

Copy code

"scripts": {
"start": "react-scripts start",
"build": "react-scripts build"
}

In backend/package.json:

json

Copy code

"scripts": {
"start": "node src/index.js"
}

10. Test Your Environment

Run the React app:

bash

Copy code

cd client
npm start

Run the Express server:

bash

Copy code

cd ../backend
npm start

11. VS Code Extensions for a Better Workflow

ESLint and Prettier: Code linting and formatting.

REST Client: Test your APIs within VS Code.

MongoDB (optional): Manage MongoDB data directly in VS Code.

Firebase and AWS extensions: Handy for working with Firebase/AWS directly from VS Code.
