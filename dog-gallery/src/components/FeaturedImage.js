import React from 'react';

function FeaturedImage(props){
    return (
        <div className="jumbotron">                
                <img src={props.imgsrc} className="featured-image" alt={props.imgsrc}/> 
        </div>
    );
}

export default FeaturedImage; 