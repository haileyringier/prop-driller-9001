import React from 'react';



function Header(props) {


  return (
    <header>
      <img
        src = {props.imgData}
        alt = "logo"
        onClick = {props.eventHandle}
      />
    </header>
  );
}

export default Header;
