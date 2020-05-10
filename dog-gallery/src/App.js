import React from 'react';
import './App.css';
import './components/dog-gallery.css';
import AppHeader from './components/AppHeader';
import FeaturedImage from './components/FeaturedImage';
import ImageGrid from './components/ImageGrid';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: [],
      featuredImage: '', 
      selectedBreed:'akita'
    };
    
    this.handleSelectedBreed = this.handleSelectedBreed.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }
 

  render () { 
       return (
          <div className="App">
            <div className="container">
              <AppHeader selectedBreedName={this.state.selectedBreed} changefunction = {this.handleSelectedBreed} />
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
       selectedBreed: breedname,
      };
    });

  }

  componentDidMount(){
    const currentBreedName= this.state.selectedBreed; 
    const featureImageFetchUrl = 'https://dog.ceo/api/breed/' + currentBreedName +  '/images/random'
    const galleryImageFetchUrl = 'https://dog.ceo/api/breed/' + currentBreedName +  '/images'
    fetch(featureImageFetchUrl).then(res => {
      return res.json();
      }).then(json => {
      this.setState({
        featuredImage: json.message
      });
      });
  
  fetch(galleryImageFetchUrl).then(res => {
    return res.json();
    }).then(json => {
    this.setState({
      imageUrls: json.message
  });
  });



  }



  componentDidUpdate(prevProps, prevState){
       
    if (this.state.selectedBreed !== prevState.selectedBreed){
     
      const currentBreedName= this.state.selectedBreed; 
      const featureImageFetchUrl = 'https://dog.ceo/api/breed/' + currentBreedName +  '/images/random'     
      const galleryImageFetchUrl = 'https://dog.ceo/api/breed/' + currentBreedName +  '/images'
      
      fetch(featureImageFetchUrl).then(res => {
        return res.json();
        }).then(json => {
        this.setState({
          featuredImage: json.message
      });
    });
    
    fetch(galleryImageFetchUrl).then(res => {
      return res.json();
      }).then(json => {
      this.setState({
        imageUrls: json.message
    });
    });
  

    }
  }

}

export default App;
