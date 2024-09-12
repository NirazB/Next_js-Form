import Home from "./index"
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Home/>
    </>
    
  );
}

export default MyApp;
