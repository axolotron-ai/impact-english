import React from 'react'
import Navbar from './Navbar'
import Hero from './Home/Hero'
import About from './Home/About'
import Gallery from './Home/Gallery'
import Courses from './Home/Courses'
import Faq from './Home/Faq'
import Testimonials from './Home/Testimonials'
import Contact from './Home/Contact'
import Footer from './Footer'
import VideoReview from './Home/VideoReview'

const HomePage = () => {
  return (
    <div>
      <main className='paper bg-cover'>
        <section >
          <Navbar />
        </section>
        <section>
          <Hero />
        </section>
        <section id='about'>
          <About />
        </section>
        <section id='courses'>
          <Courses />
        </section>
        <section id='gallery'>
          <Gallery />
        </section>
        <section>
          <Faq />
        </section>
        <section>
          <VideoReview/>
        </section>
        <section>
          <Testimonials />
        </section>
        <section id='contact'>
          <Contact />
        </section>
        <section>
          <Footer/>
        </section>
      </main>
    </div>
  )
}

export default HomePage