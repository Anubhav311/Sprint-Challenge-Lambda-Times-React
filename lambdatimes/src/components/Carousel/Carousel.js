import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselData: [],
    }
  }

  componentDidMount(){
    this.setState({
      carouselData: carouselData,
    })
  }

  leftClick = (event) => {

    console.log(event)
  }

  rightClick = (event) => {
    console.log(this.state.carouselData[0])
  }

  selectedImage = () => {
    return <img src={this.state.carouselData[0]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel" >
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}

