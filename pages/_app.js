import nProgress from "nprogress";
import Router from "next/router";
import "../style/index.css";
import "nprogress/nprogress.css";
import "../style/nprogress.css";


function MyApp({ Component, pageProps }) {
  nProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", nProgress.start);
  Router.events.on("routeChangeError", nProgress.done);
  Router.events.on("routeChangeComplete", nProgress.done);

  return <Component {...pageProps} />
}

export default MyApp
