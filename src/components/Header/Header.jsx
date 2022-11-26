import React from 'react'
import MyImg from '../UI/img/MyImg'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <MyImg src={'https://ih1.redbubble.net/image.2953598097.1711/st,small,507x507-pad,600x600,f8f8f8.jpg'}/>
    </div>
  )
}
