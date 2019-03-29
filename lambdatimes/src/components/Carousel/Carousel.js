import React, { Component } from 'react';
import { carouselData } from '../../data'

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselData: [],
      carouselCounter: 0
    }
  }

  componentDidMount(){
    this.setState({
      carouselData: carouselData,
      carouselCounter: 0
    })
  }

  leftClick = (event) => {
    if(this.state.carouselCounter == 0) {
      this.setState({
        carouselCounter: 3
      })
    } else {
      this.setState({
        carouselCounter: this.state.carouselCounter - 1
      })
    }
  }

  rightClick = (event) => {
    if(this.state.carouselCounter == 3) {
      this.setState({
        carouselCounter: 0
      })
    } else {
      this.setState({
        carouselCounter: this.state.carouselCounter + 1
      })
    }
  }

  selectedImage = () => {
    return <img src={this.state.carouselData[this.state.carouselCounter]} style={{display: 'block'}} />
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

