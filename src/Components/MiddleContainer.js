import React from 'react'
import Navbar from './Navbar'
import CardContainer from './CardContainer'
const MiddleContainer = () => {
    return (
        <div>
            <Navbar/>
            <h2 className="title">OUR  COMPETENCIES</h2>
            <div className="seperation"></div>
            <div className="alphabets">
                <div>
                <p className="a">A</p>
                <p className="text-under">Artificial Intelligence</p>
                </div>
                <div>
                <p className="b">B</p>
                <p className="text-under-b">Big Data</p>
                </div>
                <div>
                <p className="c">C</p>
                <p className="text-under">Cloud Innovation</p>
                </div>
                <div>
                <p className="d">D</p>
                <p className="text-under">Dynamics 365</p>
                </div>
            </div>
           <section className="image-container">
               <div className="image-div">
                <h3 className="title-inside-div">We Manage Your Enterprise Needs, so You Can Manage Your Business</h3>
               </div>
           </section>
           <CardContainer/>
        </div>
    )
}

export default MiddleContainer
