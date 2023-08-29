import React from 'react'
import styles from '../../../styles/template.module.css'
import Navbar from '../../../components2/Navbar'
import Footer from '../../../components2/Footer'



const Template = () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <p>Template</p>
      <Footer/>
    </div>
  )
}

export default Template