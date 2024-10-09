/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa"
import { symlink } from 'fs';
import styles from "../home/home.module.scss";
const Menu = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <>
     <div className={styles.dblock}>
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
      </div>
      <div className={styles.menublock}>
        <div className={styles.flxmenu}>
          <div style={{ width: "35%" }}>
            <img
              src="/brandstract.png"
              alt="logo"
              className={styles.brandstract}
            />
          </div>
          <div onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FaTimes className="" size={25} />
            ) : (
              <FaBars className="" size={25} />
            )}
            {menuOpen && (
              <>
                <div className={menuOpen ? `${styles.navpostion}` : 'bgnav'}>
                  <div className={styles.dflex}>
                    <Link href="/home" className={styles.linkstle}>Home</Link>
                    <Link href="/home" className={styles.linkstle}>Check ATS Score</Link>
                    <Link href="/home" className={styles.linkstle}>Resume templates</Link>
                    <Link href="/home" className={styles.linkstle}>Pricing</Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu