import React from 'react';
import App, {Container} from 'next/app';
import {register, unregister} from 'next-offline/runtime';

class NextApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  componentDidMount() {
    register()
  }

  componentWillUnmount() {
    unregister()
  }

  render() {
    const {Component, pageProps} = this.props;

    return (
      <Container>
        <title>Next</title>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default NextApp;