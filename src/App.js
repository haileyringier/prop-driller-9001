import React from 'react';
import TransformersSection from './Containers/TransformersSection.js'

import './App.css';

import Header from './Components/Header';

export default class App extends React.Component {
  state = {
    transformersRendered: true,
    whichIsRendered: 93,
    proptimusLogo: 'https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png',
    proptimusii: [
      {
        rendered: false,
        id: 93,
        name: 'alpha',
        url: 'https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726'
      },
      {
        rendered: false,
        id: 307,
        name: 'beta',
        url: 'https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png' },
      {
        rendered: false,
        id: 9001,
        name: 'omega',
        url: 'http://pngimg.com/uploads/transformers/transformers_PNG3.png'
      }
    ]
  }

  handleHeaderClick = (event) => {
    this.setState({
      transformersRendered: !this.state.transformersRendered
    })
  }

  changeTransformer = () => {
    const currentState = this.state.whichIsRendered;
    const nextState = this.state.proptimusii.find(entry => entry.id > currentState);
    nextState ? this.setState({
      whichIsRendered: nextState.id
    }) : this.setState({
      whichIsRendered: 93
    })
  }


  render() {
    return ( 
      <div className="App">
        <Header eventHandle={this.handleHeaderClick} imgData={this.state.proptimusLogo}/>
        {this.state.transformersRendered ? null : <TransformersSection eventHandle={this.changeTransformer} data={this.state} />}
      </div>
    );
  }
}
