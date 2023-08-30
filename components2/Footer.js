import React from 'react'
import styles from '../styles/footer.module.css'



const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div>
            <h1 className={styles.heading}>Candleaf</h1>
            <p className={styles.para}>
              Your natural candle made for your home and for your wellness.
            </p>
        </div>
        <div className={styles.hstack}>
         <div className={styles.vstack}>
            <p color="gray.300">Discovery</p>
            <p>New season</p>
            <p>Most searched</p>
            <p>Most sold</p>
          </div>
          <div className={styles.vstack}>
            <p color="gray.300">Discovery</p>
            <p>New season</p>
            <p>Most searched</p>
            <p>Most sold</p>
          </div>
          <div className={styles.vstack}>
            <p color="gray.300">Discovery</p>
            <p>New season</p>
            <p>Most searched</p>
            <p>Most sold</p>
          </div>
        </div>
      </div>  
    </div>


    // <container className={styles.container}>
      //<div className={styles.wrap}> 
       

      // </div>
    // </container>
  )
}

export default Footer