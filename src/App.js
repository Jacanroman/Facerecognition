import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
  apiKey: '7206cfcca52b4592acaa7eef86ba3e1a'
});


const particleOptions = {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#3CA9D1",
          blur: 5
        }
      }
    }
}



class App extends Component{
  constructor(){
    super();
    this.state = {
      input:'',
      imageUrl: ''
    }
  }


  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () =>{
    this.setState({imageUrl: this.state.input})
    app.models.predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(
      function(response) {
        // do something with response
        console.log(response)
      },
      function(err) {
        // there was an error
      }
  );
  }



  render(){
    return (
      <div className="App">

        <Particles className='particles'
                params={particleOptions} 
        />

        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
        />
        
        
        
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
