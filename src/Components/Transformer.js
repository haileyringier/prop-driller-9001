import React from 'react';

function Transformer(props) {
  const whichIsRendered = props.props.data.whichIsRendered
  const proptimusii = props.props.data.proptimusii;
  const transformerToRender = proptimusii.find(element => element.id == whichIsRendered)
  console.log(transformerToRender);
  return (
    <img
      className = 'transformer'
      src = {transformerToRender.url}
      alt = {transformerToRender.name}
      onClick={props.props.eventHandle}
    />
  );
}

export default Transformer;
