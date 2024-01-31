import ReactDOM from 'react-dom'
import React from 'react'
import BackgroundImg from './components/BackgroundImg'
import { AuthClient } from '@dfinity/auth-client'

const init = async () => {

  const authClient = await AuthClient.create();

  if (await authClient.isAuthenticated()) {
    handleAuthenticated(authClient);
  } else {
    await authClient.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess: () => {
        handleAuthenticated(authClient);
      }
    });
  }

}

async function handleAuthenticated(authClient) {
  const identity = await authClient.getIdentity();
  const userPrincipal = identity._principal.toString();
  console.log(userPrincipal);
  ReactDOM.render(<BackgroundImg />, document.getElementById("root"));
}

init();


