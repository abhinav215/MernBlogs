import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className='About'>
      <div class="container">
            <div class="circles"></div>
            <div class="details-container">
                <div class="avatar">
                    <img src="https://i.suar.me/l3zYA/l" class="img-fluid" alt=""/>
                </div>
                <div class="about">
                    <div class="name">
                        <p>
                            Hello There!
                        </p>
                        <h1>
                            I'm Abhinav Bhatnagar
                        </h1>
                    </div>
                    <div class="about-content">
                        <p>
                            Welcome to Blog$ify, your number one place to express your knowladge and view. We're dedicated to giving you the very best of expirence, with a focus on comfortability and features.
                            <br/>
                            We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                            <br/>
                            Sincerely,
                            <br/>
                            Abhinav Bhatnagar (Founder of Blog$ify)
                        </p>
                        <button>Download Resume</button>
                    </div>
                </div>
                <div class="clear"></div>
            </div>
            <div class="skills-container">
                <button>
                    Reader
                </button>
                <button>
                    Coder
                </button>
                <button>
                    Designer
                </button>
            </div>
        </div> 
    </div>
  )
}

export default About