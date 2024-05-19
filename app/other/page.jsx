'use client';

import React from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

function Other() {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <>
          <h1>Other</h1>
          <ul>
            <li>
              <a href="https://docs.google.com/spreadsheets/d/1Bb2ITNxtO5GkJs4a-reKF5cZbhMw5AtjscHZWnXWMpA/edit#gid=1613057959">
                月々の費用
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/drive/u/0/folders/1FNXl-6_gN7PeYAJr685dtceV0EIAuQ_t">
                共有フォルダ
              </a>
            </li>
          </ul>
        </>
      )}
    </>
  );
}

export default withPageAuthRequired(Other, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
