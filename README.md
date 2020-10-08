## How to run this project

[Follow AWS instructions on Amplify CLI](https://aws.amazon.com/blogs/mobile/amplify-cli-adds-scaffolding-support-for-amplify-apps-and-authoring-plugins/)

### Or Follow this Guide:

Install Amplify CLI
```
$ npm install -g @aws-amplify/cli
$ amplify configure
```

Then, run this command

```
$ amplify init --app https://github.com/burninggun/Employee-Manager

```

If you do not have an AWS account set up on your local machine, you will be prompted by the CLI to set up a new AWS profile.

If you DO have an account, you will be asked which account to use.

After set up is complete, the app will be ran.


## `Available Scripts`

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Testing & Deploying

In the project directory, you can run:

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`
Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.