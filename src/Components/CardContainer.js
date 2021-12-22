import React from 'react'
import ThirdContainer from './ThirdContainer'
const CardContainer = () => {
    return (
        <div>
            <h2 className="title">CHECK OUR SERVICES</h2>
           <div className="seperation"></div>
           <div className="card-container">
           <div className="card-row1">
               <div className="card">
                   <img className="card-image" src="https://celebaltech.com/assets/img/Supply-Chain-Analytics-Hero.webp"></img>
                   <h5 className="card-heading">Supply Chain</h5>
                   <p className="card-para">The Supply Chain Analytics gives an insight on reforming planning and procurement activities along with intelligent chartering and dispatching of the material.</p>
               </div>
               <div className="card">
                   <img className="card-image" src="https://celebaltech.com/assets/img/Sales%20And%20Marketing%20Analytics%20Hero.webp"></img>
                   <h5 className="card-heading">Analytics</h5>
                   <p className="card-para">AI and machine learning technologies has brought a new revolution in the marketing and sales industry majorly because they excel at pattern recognition, enabling sales teams.</p>
               </div>
               <div className="card">
                   <img className="card-image" src="https://celebaltech.com/assets/img/6660.webp"></img>
                   <h5 className="card-heading">Chatbot</h5>
                   <p className="card-para">Our SAP Chatbots on Microsoft Teams™ become an extension of your persona to keep you abreast during the day-to-day business.</p>
               </div>
               <div className="card">
                   <img className="card-image" src="https://celebaltech.com/assets/img/Power%20BI%20Hero.webp"></img>
                   <h5 className="card-heading">Power BI</h5>
                   <p className="card-para">Power BI is a collection of software services, apps, and connectors that work together to turn your unrelated sources of data into coherent, visually immersive, and interactive insights.</p>
               </div>
           </div>
           <div className="card-row2">
               <div className="card">
                   <img className="card-image" src="https://celebaltech.com/assets/img/Power%20Apps%20Hero.webp"></img>
                   <h5 className="card-heading">Power Apps</h5>
                   <p className="card-para">PowerApps is a “citizen application development platform” – allowing anyone to build web and mobile applications without writing code.</p>
               </div>
               <div className="card">
                   <img className="card-image" src="https://celebaltech.com/assets/img/O699PC0.webp"></img>
                   <h5 className="card-heading">Data Bricks</h5>
                   <p className="card-para">Data and analytics implementations are at the heart of what we do, so teaming with an analytics platform leader like Databricks is a natural fit for Celebal and for our customers.</p>
               </div>
               <div className="card">
                   <img className="card-image" src="https://celebaltech.com/assets/img/SAP%20Surround%20Hero.webp"></img>
                   <h5 className="card-heading">SAP Surround</h5>
                   <p className="card-para">SAP manages the core data and core business process and helps in running a business effectively.</p>
               </div>
               <div className="card">
                   <img className="card-image" src="https://celebaltech.com/assets/img/20873.webp"></img>
                   <h5 className="card-heading">MS Teams</h5>
                   <p className="card-para">Microsoft Teams, also referred to as simply Teams, is a unified communication and collaboration platform that combines persistent workplace chat, video meetings, file storage and application integration.</p>
               </div>
           </div>
           </div>
           <ThirdContainer/>
        </div>
    )
}

export default CardContainer
