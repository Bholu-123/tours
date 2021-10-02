import React, { useState } from "react";
import '../Styles/style.css';
const Tour = ({id,image,name,info,price,removeTour}) =>{
    const [readMore,setReadMore]=useState(false);
    return(
       <div className="tourCard">
          <img src={image} alt={name} />
          <div className="tourContent">
            <div className="tourInfo">
                <h4>{name}</h4>
                <h4 className="tourPrice">${price}</h4>
            </div>
            <p>
              {readMore ? info : `${info.substring(0, 200)}...`}
              <button onClick={() => setReadMore(!readMore)}>
                 {readMore ? 'show less' : '  read more'}
              </button>
            </p>
            <button className="tourCardBtn" onClick={()=>removeTour(id)}>Not Interested</button>
          </div>
       </div>
    );
}

export default Tour;