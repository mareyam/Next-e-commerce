import React from 'react'
import styles from '../styles/header.module.css'


const Header = () => {
  return (
    <div className={styles.container}>
       <div className={styles.aestroid}>
        <div className={styles.stone}>11</div>
        <div className={styles.stone}>2</div>
        <div className={styles.stone}>3</div>
        <div className={styles.stone}></div>
        <div className={styles.stone}></div>
        <div className={styles.stone}></div>
        <div className={styles.stone}></div>
    </div>
    
        <h1 className={styles.heading}>Global Warming Disasters</h1>
        <ul className={styles.ul}>
            <li>Temperature</li>
            <li>Frost-free season</li>
            <li>Hurricanes</li>
            <li>Health</li>
            <li>Sea Level</li>
            <li>Weather</li>
            <li>Economy</li>
        </ul>
        <div className={styles.earth}>
            <img src={'/earth.png'}/>
            <div className={styles.circle}>
                <ul>
                    <div className={styles.li}>
                      <img src={'/climate.png'}/>
                    </div>
                    <div className={styles.li}>
                      <img src={'/bio.png'}/>
                    </div>
                    <div className={styles.li}>
                      <img src={'/environment.png'}/>
                    </div>
                    <div className={styles.li}>
                      <img src={'/holding-hand.png'}/>
                    </div>
                    <div className={styles.li}>
                      <img src={'/eco-energy.png'}/>
                    </div>
                    <div className={styles.li}>
                      <img src={'/diwali.png'}/>
                    </div>
                    <div className={styles.li}>
                      <img src={'/env.png'}/>
                    </div>
                    <div className={styles.li}>
                      <img src={'/environment.png'}/>
                    </div>
                </ul>
        </div>

        </div>
       
    </div>
  )
}

export default Header;