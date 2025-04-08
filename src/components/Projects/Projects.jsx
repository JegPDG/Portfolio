import React from 'react'
import './projects.css'

const Projects = () => {
  const projectItems = [
    { img:'/icons8-javascript.svg',
      title:'Javascript'
    },
    { img:'/icons8-css.svg',
      title:'CSS'
    },
    { img:'icons8-react-native.svg',
      title:'React'
    },
    { img:'/vscode-svgrepo-com.svg',
      title:'VS Code'
    },
    { img:'/Photoshop_logos-world_(15).svg',
      title:'Photoshop'
    }

  ]
  
  
  return (
    <>
      <p className='tech-skill-title'>Technical Skills</p>
      <div className="tech-skll-cont">
        <ul>
          {projectItems.map((items, index) => (
            <li key={index}>
                <div className="tech-skll-component">
                  <img src={items.img} alt="" />  
                  <p>{items.title}</p>
                </div>  
            </li>
          ))}
        </ul>
      </div>

      <p className="projects-title">Projects</p>
      <div className="proj-upper-main">
        <div className="projects-main-cont">
              <img src="/website-test.png" alt="" />
            <div className="prj-lower-part">
              <p>Project 1</p>
              <p>Description of the project, cpuld be anything really.</p>
            </div>
        </div>
      </div>

    </>
  )
}

export default Projects