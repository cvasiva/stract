
/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import styles from "./home.module.scss";
import Link from 'next/link';
import Image from 'next/image';
const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.menu}>
        <div style={{ width: "35%" }}>
          <img
            src="/brandstract.png"
            alt="logo"
            style={{ width: "22%", marginLeft: "15%" }}
          />
        </div>
        <div className={styles.dflex}>
          <Link href="/home" className={styles.linkstle}>Home</Link>
          <Link href="/home" className={styles.linkstle}>Check ATS Score</Link>
          <Link href="/home" className={styles.linkstle}>Resume templates</Link>
          <Link href="/home" className={styles.linkstle}>Pricing</Link>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.createflx}>
          <div style={{ width: "50%", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '41%' }}>
              <div className={styles.Createfont}>Create a resume you are proud of</div>
              <div className={styles.hassleflx}>
                <div><img src='/Hourg.png' alt='Hourg' style={{ width: '75%' }} /></div>
                <div>Save time with hassle-free
                  templates</div>
              </div>
              <div className={styles.hassleflx}>
                <div><img src='/ShootingStar.png' alt='Hourg' style={{ width: '75%' }} /></div>
                <div>Beat the competition using
                  actionable, contextual advice</div>
              </div>
              <div className={styles.hassleflx}>
                <div><img src='/Target.png' alt='Hourg' style={{ width: '75%' }} /></div>
                <div>Highlight key achievements
                  with memorable visuals</div>
              </div>
              <div className={styles.inspired}>
                Get inspired by <span className={styles.freefont}>200+ Free Resume Examples and Templates</span>
              </div>
            </div>
          </div>
          <div style={{ width: "50%", display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
            <div className={styles.cardpart2}>
              <div style={{width:'80%'}}>
                <div className={styles.Signfont}>Sign in to your account</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', width: "100%", }}>
                  <div className={styles.cardlink}>
                    <div>
                      <img src='/linkdin.png' alt='Hourg' style={{ width: '75%' }} />
                    </div>
                    <div>LinkedIn</div>
                  </div>
                  <div className={styles.cardlink}>
                    <div>
                      <img src='/google.png' alt='Hourg' style={{ width: '75%' }} />
                    </div>
                    <div>Google</div>
                  </div>
                </div>
                <div className={styles.usefont}>or use your email</div>
                <div className={styles.estyleflx}>
                  <div>
                    <label className={styles.emailfont}>Email *</label><br />
                    <input className={styles.inpustyle} />
                    <div className={styles.company}>Use your official company email for sign up, sign in</div>
                  </div>
                  <div>
                    <label className={styles.emailfont}>Password *</label><br />
                    <input className={styles.inpustyle} />
                  </div>
                </div>
                <div className={styles.Forgot}>Forgot password?</div>
                <div>
                  <button className={styles.Signinbtn}>Sign In</button>
                </div>
                <div className={styles.yourfont}>Forget your password?</div>
                <div className={styles.yourfont1}>First time here? <span className={styles.yourfont}>Create an account</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
