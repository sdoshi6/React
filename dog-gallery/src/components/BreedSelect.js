import React from 'react';

function BreedSelect (props){

    return (
        <React.Fragment>
         Select Breed:  <select onChange={(e)=> props.changefunction(e.target.value) } defaultValue={props.selectedBreedName} > 
                <option  value="frise">Frise</option>
                <option  value="pug">Pug</option>
                <option  value="akita">Akita</option>
          </select>         
          </React.Fragment>
    );
     
    
}
export default BreedSelect;