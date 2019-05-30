import React from 'react';
import App, {Container} from 'next/app';

class NextApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
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