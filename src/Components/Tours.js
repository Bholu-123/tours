import React from "react";
import Tour from "./Tour";
import '../Styles/style.css';
const Tours = ({tours,removeTour}) =>{
    return(
        <div>
           <div className="title">
              <h1>Our Tours</h1>
              <div className="underline"></div>
           </div>

           {tours.map((tour)=>{
              return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
           })}
        </div>
    );
}

export default Tours;