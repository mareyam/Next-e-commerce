import React from 'react'
import styles from '../styles/Home.module.css'



const Footer = () => {
  return (
    <container className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <h1>Candleaf</h1>
          <p> Your natural candle made for your home and for your wellness.</p>
        </div>
        <div className={styles.HStack} spacing="10" column={{ base: 1, md: 2 }}>
          <div className={styles.VStack} align="flex-start">
            <p color="gray.300">Discovery</p>
            <p>New season</p>
            <p>Most searched</p>
            <p>Most sold</p>
          </div>
          <div className={styles.VStack} align="flex-start">
            <p color="gray.300">Discovery</p>
            <p>New season</p>
            <p>Most searched</p>
            <p>Most sold</p>
          </div>
          <div className={styles.VStack} align="flex-start">
            <p color="gray.300">Discovery</p>
            <p>New season</p>
            <p>Most searched</p>
            <p>Most sold</p>
          </div>
        </div>

      </div>
    </container>
  )
}

export default Footer