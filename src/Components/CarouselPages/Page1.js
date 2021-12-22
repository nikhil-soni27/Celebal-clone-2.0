import React from 'react'
import {Carousel} from 'react-bootstrap'
const Page1 = () => {
    return (
        <>
 <Carousel>
        <Carousel.Item>
          <Carousel.Caption>
            <div className="carousel-caption  justify-content-md-space-between">
              <div className='row rowslide  align-middle justify-content-md-space-between'>
                <h2 class="text-winner">Winner</h2>
                <h2 class="text-micro">2021 Microsoft </h2>
                <h2 class="text-partner">Partner Of the Year</h2>
                <h2 class="text-india">India</h2>
                <img src="https://celebaltech.com/assets/img/Website%20Carousel%20Assets/1(2).png" class="slideimg1" />
              </div>
              <div class="col-lg-6 align-items left">
                <img src="https://celebaltech.com/assets/img/Website%20Carousel%20Assets/trophy4.svg" class="slideimg2" />
              </div>
            </div>

          </Carousel.Caption>
          <img
            className="d-block w-100"
            src="https://celebaltech.com/assets/img/Website%20Carousel%20Assets/bg1.png"
            alt="First slide"
          />

        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://celebaltech.com/assets/img/Website%20Carousel%20Assets/bg2.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div class="carousel-caption ">
              <div class="carousel-caption ">
                <div className='row rowslide row1 align-middle'>
                  <div class="col-lg-6">
                  <h1 className="micro">
          Digital Technological <br></br>Innovation to Build <br></br>Enterprise
          of the<br></br> Future
        </h1>
        <p className="text">Expertise in SAP Extend and Innovate</p>
                    <div class="align-items">
                    </div>  </div>
                  <div class="col-lg-2 align-middle">
                    <img src="https://celebaltech.com/assets/img/Website%20Carousel%20Assets/2.png" class="img3" />
                  </div>
                </div>
              </div>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <div className="carousel-caption  justify-content-md-center">
              <div className='row rowslide  align-middle justify-content-md-center'>
              <h1>Competencies on cloud</h1>
               <p className="third-page-text">We are a Microsoft AI Inner Circle Partner with 10 Gold competencies and Advanced Specialization in Analytics on Azure</p>
              </div>
              <div class="col-lg-6 align-items left">
                <img src="https://celebaltech.com/assets/img/Website%20Carousel%20Assets/3.png" class="slideimg2" />
              </div>
            </div>

          </Carousel.Caption>
          <img
            className="d-block w-100"
            src="https://celebaltech.com/assets/img/Website%20Carousel%20Assets/bg3.png"
            alt="First slide"
          />

        </Carousel.Item>
      </Carousel >

        </>
    )
}

export default Page1
