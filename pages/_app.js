import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import UserContext from '../src/components/UserContext';

export default class MyApp extends App {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    const user = localStorage.getItem('token');
    console.log(user);
    if (user) {
      this.setState({
        user,
      });
    } else {
      Router.push('/campgrounds');
    }
  }

  signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null,
    });
    Router.push('/');
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Yelcamp</title>
        </Head>
        <UserContext.Provider
          value={{
            user: this.state.user,
            signIn: this.signIn,
            signOut: this.signOut,
          }}
        >
          <Component {...pageProps} />
        </UserContext.Provider>
      </>
    );
  }
}
