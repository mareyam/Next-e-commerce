import React from 'react'
import styles from '../styles/header.module.css'


const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aestroid}>
          <div className={styles.stone}></div>
          <div className={styles.stone}></div>
          <div className={styles.stone}></div>
          <div className={styles.stone}></div>
          <div className={styles.stone}></div>
          <div className={styles.stone}></div>
          <div className={styles.stone}></div>        
          <div className={styles.stone}></div>
          <div className={styles.stone}></div>
          <div className={styles.stone}></div>
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
                <ul className={styles.ul}>
                    <div className={styles.li}>
                      <img src={'/image.png'}/>
                    </div>
                    <div className={styles.li}>
                      <img src={'/image (1).png'}/>
                    </div>
                    <div className={styles.li}>
                      <img src={'/image (2).png'}/>
                    </div>
                    <div className={styles.li}>
                      <img src={'/image (3).png'}/>
                    </div>
                    <div className={styles.li}>
                      <img src={'/image (4).png'}/>
                    </div>
                    <div className={styles.li}>
                      <img src={'/image (5).png'}/>
                    </div>
                    <div className={styles.li}>
                      <img src={'/image (6).png'}/>
                    </div>
                    <div className={styles.li}>
                      <img src={'/image (7).png'}/>
                    </div>
                </ul>
        </div>

        </div>
    </div>
  )
}

export default Header;