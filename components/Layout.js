import Navbar from "./Navbar";
import Head from 'next/head';

function Layout({ children }) {
    return (
      <div>
        <Head>
          <title>Carlaa-Car rental</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        <Navbar />
        <main>{children}</main>
      </div>
    );
  }
  
  export default Layout;