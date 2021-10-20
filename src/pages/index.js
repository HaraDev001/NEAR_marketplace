import { useState, useEffect } from "react";
import classNames from 'classnames';
import Head from 'next/head'
import Container from '../components/Container';
import Main from '../components/Main';
import Footer from '../components/Footer';

import styles from '../styles/Home.module.scss'

export default function Home() {
  // const [show, setShow] = useState(false);

  // useEffect(
  //   () => {
  //     setInterval(()=>setShow(!show), 300)
  //   }
  // )
  return (
    <Container className={styles.pzero} >
      <Head>
        <title>NearNauts</title>
        <link rel="icon" href="/Favicon.png" />

        <meta
          name="description"
          content="Use Sass to start your Next.js app with CSS superpowers!"
        ></meta>
      </Head>

      <Main className={styles.mainBoard} style={{padding:'0px'}}>
        <div className={styles.mainBoardBackground}>
          <div className={styles.positionPlatform}>
            <div className={styles.logoTextContentCenter}>
              <img src="images/TextLogo.png" className={styles.logoText}/>
            </div>
            <div className={styles.iconPosition}>
              <a href="https://discord.gg/t8d8xdPsJm" target="_blank">
                <span className={styles.cursorPointer}>
                  <img src="images/discord.webp"/>
                </span>
              </a>
              <a href="https://twitter.com/nearnauts" target="_blank">
                <span className={classNames(styles.marginLeft1rem, styles.cursorPointer)}>
                  <img src="images/twitter.webp"/>
                </span>
              </a>
            </div>
          </div>
          <p className={styles.datePosition}>
            01.12.21
          </p>
          <div className={styles.imageContentCenter}>
            <img src="images/Monkey.webp" className={ styles.rotateimg30}/>
          </div>
        </div>
      </Main>
    </Container>
  )
}
