import React from 'react';
import BreedSelect from './BreedSelect';

function AppHeader (props){

    return (
        <div className="jumbotron">
        <h1 className="display-4">{props.selectedBreedName} Dog Gallery</h1>
        <h2 className="lead">ITMD 565 - sodhis6@hawk.iit.edu</h2>
        <hr></hr>
        <BreedSelect  selectedBreedName={props.selectedBreenName} changefunction = {props.changefunction} />         
      </div>
    );
     
    }
    export default AppHeader;