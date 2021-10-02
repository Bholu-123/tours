import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Loading from './Components/Loading';
import Tours from './Components/Tours';
import './Styles/style.css';
const App = () =>{
    const [loading,setLoading]=useState(true);
    const[tours,setTours]=useState([]);
    
    const fetchTours = async() =>{
        setLoading(true);
        const url="https://course-api.com/react-tours-project";
        const response = await axios.get(`${url}`);
        console.log(response.data);
        setLoading(false);
        setTours(response.data);
    }

    useEffect(()=>{
       fetchTours();
    },[])
    
    const removeTour = (id) =>{
       const newTours=tours.filter((tour)=>tour.id!==id);
       setTours(newTours);
    }
    if(loading)
    {
        return(
           <div>
               <Loading/>
           </div> 
        );
    }

    if(tours.length===0)
    {
        return(
            <div className="noTours">
                <h2>
                    No Tours Left
                </h2>
                <button className="refresh" onClick={fetchTours}>Refresh</button>
           </div> 
         );
    }

    return(
        <div>
            <Tours tours={tours} removeTour={removeTour}/>
        </div>
    );
}

export default App;