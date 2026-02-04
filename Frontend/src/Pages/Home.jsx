import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <main>
        <section className='section-hero'>
          <div className='container grid grid-two-cols'>
            <div className='hero-content'>
              <p>We are the World Best IT Company</p>
              <h1>Welcome to Apna Channel</h1>
              <p>Are you ready to take your business to the next level Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi veritatis officia ipsa sunt, sed aut libero. Veniam blanditiis quibusdam voluptatibus rerum dignissimos illo, quae temporibus accusamus unde delectus sint?</p>
              <div className='btn btn-group'>
                <NavLink to="/contact">
                  <button className='btn'>connect now</button>
                </NavLink>
                <NavLink to="/services">
                  <button className='btn'>Learn more</button>
                </NavLink>

              </div>
            </div>
            <div className="hero-image">
              <img src="https://t4.ftcdn.net/jpg/02/56/60/77/360_F_256607704_MlVHLkv0m5xfVuj0a9LLcbsUUcJSBqgO.jpg" alt="" height="500" width="500"/>
            </div>

          </div>

        </section>
      </main>

    </div>
  )
}

export default Home
