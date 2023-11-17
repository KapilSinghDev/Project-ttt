import React from 'react';
import './Postbox.scss';
// import verify from './verify.png'
import { FaThumbsUp } from 'react-icons/fa';
const Postbox = (props) => {
  return (
    <div className='post-box'>
        <div className='post-head'>
            <h3 className='heading'>{props.title}</h3>
            <FaThumbsUp className='like-post'/>
        </div>
        <div className='post-cont'>
            <p className='content'>
                {props.content} 
            </p>
        </div>
        <div className='post-det'>
            <p className='left-det'>
                {props.type}
            </p>
            <p className='right-det'>
                {props.Date}.{props.Time}.{props.Views}
            </p>
        </div>

    </div>
  )
}

export default Postbox
