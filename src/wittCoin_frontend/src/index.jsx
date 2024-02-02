import React from 'react';
import { createRoot } from 'react-dom';
import BackgroundImg from './components/BackgroundImg';
import { AuthClient } from '@dfinity/auth-client';

const init = async () => {
  const authClient = await AuthClient.create();

  if (await authClient.isAuthenticated()) {
    handleAuthenticated(authClient);
  } else {
    await authClient.login({
      identityProvider: 'https://identity.ic0.app/#authorize',
      onSuccess: () => {
        handleAuthenticated(authClient);
      },
    });
  }
};

async function handleAuthenticated(authClient) {
  const identity = await authClient.getIdentity();
  const userPrincipal = identity._principal.toString();
  console.log(userPrincipal);

  const root = createRoot(document.getElementById('root'));
  root.render(<BackgroundImg loggedInPrincipal={userPrincipal}/>);
}

init();

