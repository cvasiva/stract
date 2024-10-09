
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import styles from "./home.module.scss";
import Menu from '../stract/menu';

const Home: React.FC = () => {

  return (
    <div className={styles.home}>
      <Menu />
      <div className={styles.card}>
        <div className={styles.createflx}>
          <div>Home</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
