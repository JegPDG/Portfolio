import React from 'react'
import './main.css'
import WorkExperince from '../WorkExp/WorkExperince'

const Main = () => {
  return (
  <>
    <div className="main-banner">
      <div className="text-container">
        <p>Hi! THE</p>
        <p>NAME'S JEG</p>
        <p>I'm an aspiring web developer who wants to build dynamic and user-friendly websites. </p>
      </div>
      <div className="image-container">
        <div className="bg-main-gradient"></div>
        <img src="/bg-picture.png" alt="" />
      </div>
    </div>

    <div className="about-me-cont">
      <p>About me</p>
      <p>I’m Jeg Paduga, and just finished Bachelor of Science in Computer Science. I work with React, Django, and JavaScript to build interactive and scalable web apps. I'm always learning and exploring new tech to improve my skills.</p>
    </div>
    <p className="work-exp-title">
        Work Experience
    </p>
    <WorkExperince/>

    <p className="education-title">
      Education
    </p>
    <div className="work-exp-comp">
      <div>
        <img src="/RSHS_VI_LOGO.png" alt="" />
      </div>  
      <div className="text-cont">
        <p>Regional Science High School for Region VI</p>
        <p>Old Buswang, Kalibo, Aklan</p> 
        <p className='description'>Senior High Strand: Science, Technology, Engineering, and Mathematics</p> 
      </div> 
    </div>  

    <div className="work-exp-comp">
      <div>
        <img src="/gct.png" alt="" />
      </div>  
      <div className="text-cont">
        <p>Garcia College of Technology</p>
        <p>Osmeña Avenue, Kalibo, Aklan </p> 
        <p className='description'>Bachelor of Science in Computer Science</p> 
      </div> 
    </div>    

    <p className="contact-title">Contact me:</p>
    <div className="contact-container">
      <div>
        <p>Email</p>
        <p>padugajeg@gmail.com</p>  
      </div>
      <div>
        <p>Contact Number</p>
        <p>+9625932210</p>
      </div>  
      
    </div> 

    
  
  </>
  )
}

export default Main