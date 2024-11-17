import React from 'react';
 import './spec.css';



const Spec=(props)=>{
    return(
        <div className="spec">
            <img src={props.src} alt=" Clock icon"/>
            <p className="specHead">{props.head}</p>
            {/* <hr/> */}
            <p className="specContent">{props.content}</p>
        </div>
    );
}

export default Spec;