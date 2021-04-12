import React from "react";

const Member = ({id, name, lastname,imageUrl}) => (
  <div className="column">
    <div className='ui fluid card'>
        <div className='image'>
          <img href="#" src={imageUrl}/>
        </div>
        <div className='content'>
          <a className='header'>{name} {lastname}</a>
        </div>
    </div>
    </div>
);

export default Member;
