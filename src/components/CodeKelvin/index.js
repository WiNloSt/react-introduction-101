import React from 'react'
import style from './style.scss'

const CodeKelvin = () => (
  <div className={style.banner}>
    <div className={style.text}>Powered by CodeKelvin © 2016</div>
    <a href='//codekelvin.com' target='_blank'>
      <img src='/codekelvin-logo.png' alt='CodeKelvin Logo' className={style.logo} />
    </a>
  </div>
)


export default CodeKelvin
