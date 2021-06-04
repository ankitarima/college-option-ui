import React from 'react'
import About from '../components/about/About'
import Teams from '../components/about/Teams'

export default function about() {
    return (
        <>
         <div className="about-main section-bg">
            <About/>
            <Teams/>
         </div>
        </>
    )
}
