import React from "react";

const PrioritieItem = ({ id, title, description, priorite, onEditClick}) => {
  return (

      <div className='ui centered card'>
        <div className='content'>
        <span
           className='ui mini right floated image'>
          <i className={`${
          priorite === 'ALTA' ? "heartbeat" : "heart"
          } icon`}/>
         </span>
          <div className='header'>
            {title}
          </div>
          <div className='meta'>
            {description}
          </div>
          <div className='extra content'>
           <span
              className='right floated edit icon'
              onClick={onEditClick}>
              <i className='edit icon' />
            </span>
          </div>
        </div>
      </div>
    );

};
export default PrioritieItem;
