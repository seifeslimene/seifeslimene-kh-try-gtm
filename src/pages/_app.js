import '../styles/globals.css';

import GoogleTagManager from '../components/GoogleTagManager';

/**
 * Tag Manager Integrated from
 * https://tagmanager.google.com/#/container/accounts/6274537219/containers/209332282/workspaces/2
 */
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId='GTM-TQMCH887' />
    </>
  );
}
