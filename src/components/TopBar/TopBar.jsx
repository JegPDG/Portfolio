import React, { useState } from 'react'
import './topBar.css'

const TopBar = (props) => {
  const {setPages} = props

  const [projborder, setprojborder] = useState(false)
  const [aboutborder, setaboutborder] = useState(false)


  return (
    <div className="top-bar-cont">
      <div className="logo-cont">
        <img src="/goi logo.png" alt="" />
        <p>JPDG.goi</p>
      </div>
      <div className="nav-button-cont">
        <div onClick={
          () => {
            setPages(true)
            setaboutborder(true)
            setprojborder(false)
          }
        } className={aboutborder ? "buttborder" : " "}>ABOUT</div>
        <div onClick={
          () => {
            setPages(false)
            setprojborder(true)
            setaboutborder(false)
          }
        } className={projborder ? "buttborder":" "}>PROJECTS</div>
      </div>
      <div></div>
    </div>
  )
}

export default TopBar