import React from 'react';


function ImageGrid(props){
    return (

        <div className="jumbotron">
            {props.imageUrls.map((image,index) => {
                return(
                    <div key={index} className="imagegrid-image">
                        <img src={image} onClick={()=> props.clickfunction(image) }/>
                    </div>
                    
                );
            })
            }
               
        </div>
    );

}

export default ImageGrid; 