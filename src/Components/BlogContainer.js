import React from 'react'
import Footer from './Footer'
// import {Carousel} from 'react-bootstrap'
const BlogContainer = () => {
    return (
        <div className="blog-container">
            <div className="button-div">
            <button className="btn1">Explore More Case Studies</button>
            </div>
            <h2 className="title">WHAT PEOPLE SAY ABOUTUS</h2>
           <div className="seperation"></div>
                   <h2 className="title">EXPLORE THE BLOGS</h2>
                   <div className="blog-seperation"></div>
                   <div className="blog-card-row">
                   <div className="blog-card">
                   <h5 className="cards-heading">Celebal Technologies recognized as the winner of 2021 Microsoft India Country Partner of the Year .</h5>
                   <h6 className="cards-para-blog">Milind Pant — Jul 8, 2021</h6>
                   <a className="see-full-blog">See Full Blog</a>
                   </div>
                   <div className="blog-card">
                   <h5 className="cards-heading">Drive Enterprise Integration using SAP Connectors .</h5>
                   <h6 className="cards-para-blog">Milind Pant — Jun 11, 2021</h6>
                   <a className="see-full-blog">See Full Blog</a>
                   </div>
                   <div className="blog-card">
                   <h5 className="cards-heading">Data Lake vs Data Warehouse: Which approach should you choose for your business?</h5>
                   <h6 className="cards-para-blog">Milind Pant — May 18, 2021</h6>
                   <a className="see-full-blog">See Full Blog</a>
                   </div>
                   </div>
                   <div className="blog-div">
                       <button className="blog-button">See All Blogs</button>
                   </div>
                   <div>
                   <Footer/>
                   </div>
                   </div>  
    )
}

export default BlogContainer
