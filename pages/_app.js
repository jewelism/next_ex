import React from 'react';
import App, {Container} from 'next/app';
import {register, unregister} from 'next-offline/runtime';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';

import 'normalize.css';

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
    const {Component, pageProps, reduxStore} = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <title>Next</title>
          {/* <style>{`html { font-size: 15px; }`}</style> */}
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(NextApp);