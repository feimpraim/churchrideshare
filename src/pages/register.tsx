import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';

const Register: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-purple-500 to-blue-600 animate-gradient-x">
      <Head>
        <title>Register - Desert Heart PIWC Ride Service</title>
        <meta name="description" content="Register for a ride to Desert Heart PIWC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center text-white">
        <h1 className="text-6xl font-bold mb-6">
          Register for a Pick Up
        </h1>

        {/* Registration Form */}

        <form className="bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4 w-full max-w-lg">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
      Full Name
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Full Name"/>
  </div>

  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
      Email Address
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
  </div>

  <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
      Phone Number
    </label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Phone Number"/>
  </div>

  <div className="flex items-center justify-between">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Register
    </button>
    <Link href="/login">
      <span className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer">
        Already have an account?
      </span>
    </Link>
  </div>
</form>


        {/* .Registtration form End. */}
      </main>
    </div>
  );
};

export default Register;
