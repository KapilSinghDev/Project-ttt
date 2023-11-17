import React from 'react';
import './Postbox.scss';
// import verify from './verify.png'
import { FaThumbsUp } from 'react-icons/fa';
const Postbox = (props) => {
    const blue = {
        color: 'blue',
        marginLeft:'5%',
      };
      const marginer = {
        paddingLeft: '2px'
        // marginTop: '4%',
      };
    
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
            <div className='left-det'>
               <p  style={blue}> {props.type} </p> <p style={marginer}> {' '} by Anuj Gosalia </p>
            </div>
            <p className='right-det'>
                {props.Date}.{props.Time}.{props.Views}
            </p>
        </div>
        <hr className='border-line'/>
    </div>
  )
}

export default Postbox
