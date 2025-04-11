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
    },
    {
      img: "/djano-logo.png",
      title: "Django"
    },
    {
      img: '/python-logo.svg',
      title: 'Python'
    }
  ]
  
  const projComp = [
    {
      image: '/website-test.png',
      title: 'Project 1',
      description: 'Description of the project',
    },
    {
      image: '/fitness-website.png',
      title: 'Fitness',
      description: 'Description of the project',
    },
    {
      image: '/movie-website.jpg',
      title: 'Movie',
      description: 'Description of the project',
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

      <ul className="all-proj-cont">
        { projComp.map((proj, index) =>(
          <li key={index}>
              <div className="proj-upper-main">
                <div className="projects-main-cont">
                      <img src={proj.image} alt="" />
                    <div className="prj-lower-part">
                      <p>{proj.title}</p>
                      <p>{proj.description}</p>
                      <p><span>Javascript</span></p>
                    </div>
                </div>
              </div>
          </li>
        ))}
      </ul>

    </>
  )
}

export default Projects