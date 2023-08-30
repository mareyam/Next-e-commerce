import React from 'react'
import styles from '../styles/header.module.css'


const Header = () => {
  return (
    <div className={styles.container}>
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
                    <div className={styles.li}><li>1</li></div>
                    <div className={styles.li}><li>2</li></div>
                    <div className={styles.li}><li>3</li></div>
                    <div className={styles.li}><li>4</li></div>
                    <div className={styles.li}><li>5</li></div>
                    <div className={styles.li}><li>6</li></div>
                    <div className={styles.li}><li>7</li></div>
                </ul>
        </div>

        </div>
       
    </div>
  )
}

export default Header;