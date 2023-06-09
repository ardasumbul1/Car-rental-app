import App from 'next/app';
import Layout from '../components/Layout';
import 'tailwindcss/tailwind.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import '../styles/global.css'



function MyApp({ Component, pageProps }) {
    return (

      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
  
  export default MyApp;