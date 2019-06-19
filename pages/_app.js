import React, { useEffect } from 'react';
import App, { Container } from 'next/app';
import { register, unregister } from 'next-offline/runtime';
import withReduxStore from '../lib/with-redux-store';
import { Provider, connect } from 'react-redux';

import Lottie from 'lottie-web';
import animationData from '../static/lottie/51-preloader.json';

import 'normalize.css';
import '../styles/app.scss';

function Loading({ loading }) {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementsByClassName('lottie-loading')[0],
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData
    });
  }, []);

  return (
    <div className={`lottie-loading-wrap`} style={!loading ? { display: 'none' } : null}><div className={`lottie-loading`}></div></div>
  );
}
const mapStateToProps = ({ app: appState }) => ({ loading: appState.loading });
const AppLoading = connect(mapStateToProps, null)(Loading);

class NextApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    register();
  }

  componentWillUnmount() {
    unregister();
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <title>Sprout</title>
          <Component {...pageProps} />
          <AppLoading />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(NextApp);