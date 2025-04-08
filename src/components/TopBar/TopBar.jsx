import React from 'react'
import './topBar.css'

const TopBar = (props) => {
  const {setPages} = props
  return (
    <div className="top-bar-cont">
      <div className="logo-cont">jeg</div>
      <div className="nav-button-cont">
        <div onClick={
          () => {
            setPages(true)
          }
        }>ABOUT</div>
        <div onClick={
          () => {
            setPages(false)
          }
        }>PROJECTS</div>
      </div>
      <div>empty</div>
    </div>
  )
}

export default TopBar