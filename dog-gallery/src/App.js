import React from 'react';
import './App.css';
import './components/dog-gallery.css';
import BreedSelect from './components/BreedSelect';
import FeaturedImage from './components/FeaturedImage';
import ImageGrid from './components/ImageGrid';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: [],
      featuredImage: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg', 
      selectedBreed:''
    };
    
    this.handleSelectedBreed = this.handleSelectedBreed.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }
 

  render () { 
       return (
          <div className="App">
            <div className="container">
            
              <BreedSelect  changefunction = {this.handleSelectedBreed} />
              <FeaturedImage imgsrc={this.state.featuredImage}/>
              <ImageGrid clickfunction={this.handleImageClick}  imageUrls={this.state.imageUrls}/> 
            </div>
          </div>
        );
  }

  handleImageClick(url){
      this.setState( currentState => {
        return {
          featuredImage: url
        }
      });
  }

  handleSelectedBreed(breedname){
    this.setState(currentState => {
      return {
       selectedBreed: breedname
      };
    });

  }

  componentDidMount(){
    fetch('https://dog.ceo/api/breed/hound/images').then(res => {
        return res.json();
        }).then(json => {
        this.setState({
          imageUrls: json.message
      });
    });
    // fetch('https://dog.ceo/api/breeds/list/all').then(res => {
    //   return res.json();
    //   }).then(json => {
    //   this.setState({
    //     BreedOptions: json.message
    // });
  // });
  }

  componentDidUpdate(){
    
  }

}


export default App;
