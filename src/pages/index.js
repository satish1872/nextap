import React from 'react'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import Head from 'next/head'

function Home() {
  return (<React.Fragment>
    <Head>
    <title>Ninja List | Home</title>
    <meta name="keyword" content="ninjas"/> 
    </Head>
    <div className={styles.title}>
    <div className={styles.title}>Home</div>
    <Link className={styles.btn} href="/ninjas">
     my ninjas
    </Link>
   </div>
    </React.Fragment>);
}

export default Home