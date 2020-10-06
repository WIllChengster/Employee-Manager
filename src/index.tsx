import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import awsExports from './aws-exports';
import Amplify from 'aws-amplify'
import { AUTH_TYPE } from 'aws-appsync'
import { ApolloProvider, ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from '@apollo/client';
import { createAuthLink } from "aws-appsync-auth-link";

Amplify.configure(awsExports)

const config = {
  url: awsExports.aws_appsync_graphqlEndpoint,
  region: awsExports.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.API_KEY, // or type: awsExports.aws_appsync_authenticationType,
    apiKey: awsExports.aws_appsync_apiKey,
  },
}

const link = ApolloLink.from([
  // @ts-ignore
  createAuthLink(config),
  createHttpLink({uri: awsExports.aws_appsync_graphqlEndpoint})
  // @ts-ignore
  // createSubscriptionHandshakeLink(config)
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({ addTypename: false })
});



ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client as any} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
