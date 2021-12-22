import React,{useState} from 'react'
import Carousel from "react-elastic-carousel";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 }
// ]

const OnlyTextCarousel = () => {

    const [items, setItems] = useState([`Celebal Tech's Team brings a great combination of Enterprise Systems knowledge along with Modern Data and Analytics Platforms.They help us serve our NorthAmerican customers on Digital Transformation projects.`,`Celebal Technologies is our strategic partner for Advanced Analytics and Business Intelligence Solutions.
    ` ,'Celebal Technologies has been our vital associate in the field of Advanced Analytics and IOT for North America and India Operations' , `We had complex Big Data Analytics challenges with daily loads of Terabytes of data.Celebal Tech helped resolve those challenges with their creative solutions on Azure data platform.They also hepled us achieve daily consumer usage metrics in our Enterprise Dashboards,which was not possible earlier.
  `,`Celebal Tech's Team brings a great combination of Enterprise Systems knowledge along with Modern Data and Analytics Platforms.They help us serve our NorthAmerican customers on Digital Transformation projects.
  `]);
return (
  <>
    <div className="carousel-wrapper">
      <Carousel>
        {items.map((item) => (
          <h4 className="carousel-text">{item}</h4>
        ))}
      </Carousel>
    </div>
  </>
);
}

export default OnlyTextCarousel
