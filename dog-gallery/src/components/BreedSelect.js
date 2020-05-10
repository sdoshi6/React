import React from 'react';
import Select from 'react-select';

function BreedSelect(props){
 
    return (
        <div className="jumbotron">
          <h1 className="display-4"> Dog Gallery</h1>
          <p className="lead">ITMD 565 - sodhis6@hawk.iit.edu</p>
          <select onChange={(e)=> props.changefunction(e.target.value) }> 
                <option  value="frise">frise</option>
                <option  value="pug">pug</option>
                <option  value="akita">akita</option>
          </select>         
        </div>
    );    
}

export default BreedSelect;