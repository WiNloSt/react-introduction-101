import React from 'react'
import style from './style.scss'
import AcceptStyleAndClassName from '../../containers/AcceptStyleAndClassName'

const Console = () => (
  <div className={style.console}>I'm a console</div>
)

export default AcceptStyleAndClassName(Console)
