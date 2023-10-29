import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from '@/components/Header';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-purple-500 to-blue-600 animate-gradient-x">
      <Head>
        <title>Desert Heart PIWC Ride Service</title>
        <meta name="description" content="Request a ride to Desert Heart PIWC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center text-white">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-yellow-300">Desert Heart PIWC</span>
        </h1>

        <p className="mt-3 text-2xl">
          Connecting members through shared rides to church.
        </p>

        <div className="mt-6">
          <Link href="/login" passHref>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </Link>
          <Link href="/register" passHref>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4">
              Register
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
