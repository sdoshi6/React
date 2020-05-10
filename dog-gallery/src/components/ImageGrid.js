import React from 'react';


function ImageGrid(props){
    return (

        <div className="jumbotron">
             <div  className="imagegrid-image">
            {props.imageUrls.map((image,index) => {
                return(                 
                        <img key={index} src={image} onClick={()=> props.clickfunction(image) } alt={image}/>  
                );
            })
            }
              </div>  
        </div>
    );

}

export default ImageGrid; 