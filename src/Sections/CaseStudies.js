import React from 'react'
import CompanyReview from './CompanyReview'
const CaseStudies = () => {
    return (
        <div>
              <section className="third-image-container">
               <div className="third-image-div">
                <h3 className="third-title-inside-div">We deliver Enduring Results</h3>
                <p className="third-para">We combine Celebal Tech's global expertise with deep local insights to help our clients achieve their biggest goals. As lenders we understand the importance of transparency, accuracy and accountability in the services we offer and take pride in the quality of work we provide.</p>
               </div>
           </section>
           <h2 className="title">LOOK INTO OUR CASE STUDIES</h2>
           <div className="seperation"></div>
           <div className='card-row'>
             <div className="cards">
                   <img className="card-image" src="https://celebaltech.com/assets/img/realtime.webp"></img>
                   <h5 className="cards-heading">Real-Time Loyalty Management</h5>
                   <p className="cards-para">We provide customized Loyalty Points Management solutions</p>
                   <button className="read-more">Read more</button>
               </div>
               <div className="two-cards">
               <div className="cards-without-image">
                   <h5 className="cards-heading">Lead Scoring</h5>
                   <p className="cards-para">We provide Lead Scoring solutions as per the customer’s requirement</p>
                   <button className="read-more">Read more</button>
               </div>
               <div className="cards-without-image">
                   <h5 className="cards-heading">Predictive Maintanence</h5>
                   <p className="cards-para">We provide customized IoT and Predictive Maintenance solutions</p>
                   <button className="read-more">Read more</button>
               </div>
               </div>
               <div className="cards">
                   <img className="card-image" src="https://celebaltech.com/assets/img/damage.webp"></img>
                   <h5 className="cards-heading">Automated Vehicle Damage Detection</h5>
                   <p className="cards-para">We provide customized computer vision solutions as per the customer’s requirement</p>
                   <button className="read-more">Read more</button>
               </div>
           </div>
           <div className="card-row">
              <div className="long-card">
           <img className="cards-image" src="https://celebaltech.com/assets/img/BMC1.webp"></img>
                   <h5 className="cards-heading">One of the largest Paints manufacturing Company in North America</h5>
                   <p className="cards-para">It is an American based paint retailing company which deals with supplying paints.</p>
                   <button className="read-more">Read more</button>
           </div>
           <div className="cards">
                   <img className="card-image" src="https://celebaltech.com/assets/img/Blog1.webp"></img>
                   <h5 className="cards-heading">Reliance General Insurance</h5>
                   <p className="cards-para">Reliance General Insurance is one the leading general insurance companies of India</p>
                   <button className="read-more">Read more</button>
               </div>
                  </div> 
                  <CompanyReview/>
        </div>
    )
}

export default CaseStudies
