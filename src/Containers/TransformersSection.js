import React, { Component } from 'react';
import Transformer from '../Components/Transformer';

class TransformersSection extends Component {


  render() {
    // console.log(this.props);
    return (
      <section className = "transformers-section">
        <Transformer props={this.props} />
        {/* {this.mapTransformers(this.props)} */}
      </section>
    );
  }
}

export default TransformersSection;
