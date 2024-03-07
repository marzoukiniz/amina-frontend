import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import UserProvider from '../../context/user';

const Layout = ({ user, loading = false, children }) => (
    <UserProvider>
        <Head>
            <title>Printemps Doha</title>
            <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Use Sass to start your Next.js app with CSS superpowers!"
        ></meta>
        </Head>
        <Navbar />
        <main></main>
        <Footer />
    </UserProvider>
    );
    export default Layout;