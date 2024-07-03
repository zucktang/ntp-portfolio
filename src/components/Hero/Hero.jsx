import React from 'react'
import styles from './Hero.module.css'
import { FaGithub , FaTwitch , FaFacebookF } from "react-icons/fa";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
        <div className={styles.container}>
            <div className={styles.hero_con}>
                <div className={styles.hero_info}>
                    <p className={styles.text_1}>Hi, It's me</p>
                    <h3 className={styles.text_2}>Nontaphat</h3>
                    <p className={styles.text_3}>I'm a Back-end Developer</p>
                    <p className={styles.text_4}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, </p>
                    <ul className={styles.hero_social}>
                        <li><a href="#"><FaTwitch  /></a></li>
                        <li><a href="#"><FaGithub  /></a></li>
                        <li><a href="#"><FaFacebookF /></a></li>
                    </ul>
                </div>
                <div className={styles.hero_img}></div>
            </div>
        </div>
    </div>
  )
}

export default Hero
