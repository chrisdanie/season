import React from 'react';
import './FallingLeaves.css';



const Leaves = () =>{
    return (
        <div className="autumn-container">
            
            <img src={"https://pngimg.com/uploads/autumn_leaves/autumn_leaves_PNG3608.png"} alt={"autumn leaf"} style={{top: '-45px', width:'7%', left: '300px', animationDelay: '2s'}}/>
            <img src={"https://pngimg.com/uploads/autumn_leaves/autumn_leaves_PNG3608.png"} alt={"autumn leaf"} style={ {top: '-50px', left: '110px', animationDelay: '3.2s'}}/>
            
            <img src={"https://pngimg.com/uploads/autumn_leaves/autumn_leaves_PNG3608.png"} alt={"autumn leaf"} style={{top: '-18px', left: '560px', animationDelay: '2.25s'}}/>
            <img src={"https://pngimg.com/uploads/autumn_leaves/autumn_leaves_PNG3608.png"} alt={"autumn leaf"} style={{ top: '-10px', left: '401px', animationDelay: '3.8s'}}/>  
        </div>
    )

}

const FallingLeaves = () =>{
   return  <Leaves/>
}

export default FallingLeaves