'use client';

import React from 'react';

import Hero from '../components/Hero';
import Loading from '../components/Loading';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Index() {
  const { user, isLoading } = useUser();
  return (
    <>
      {isLoading && <Loading />}
      <Hero />
      {user ? <div>
        <p>Hello {user.name}</p>
      </div>
        : <div>
          <a href="/api/auth/login">
            Login
          </a>
        </div>
      }
    </>
  );
}
