import {React,useState} from 'react'
import user from './profile.json'
import cover from './coverpicc.png'
import './Profiles.scss'
import profilepic from './profilepic.png'
import approval from './approval.png'
import verify from './verify.png'
import { FaGem } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { BiShow } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';
const Profiles = () => {
    const [userData,setUserData] = useState(user)   
  return (
    <div className='profile'>
        <div className='top'>
            <img className='cov-pic' src={cover} alt=''/>
        </div>
        <div className='mid'>
            <div className="prof-pic">
                <img className='prof-img'src={profilepic} />
            </div>
            <div className='mid-right'>
                <p className='user-name'>
                    {userData.username}
                    <img className='approval' src={verify} alt=''/>
                    <FaGem className='diamond' />
                </p>
                <div className='fol'>
                    <div className="tabs">
                        {userData.followers}
                    </div>
                    <div className="tabs">
                        {userData.following}
                    </div>
                </div>
                <div className="fols">
                    <p>
                        Followers
                    </p>
                    <p>
                        Following
                    </p>
                </div>
            </div>
        </div>
        <div className='btm'>
            <p className='btm-desc'> {userData.description}<br/>
                <a className='btm-link'>http://www.instagram.com/anujgosalia</a>
            </p>
            <div className='specs'>
                <p>
                <FaStar style={{ color: 'skyblue', fontSize: '15px' }} />
                    {userData.starred}
                </p>
                <p>
                <FaThumbsUp style={{ color: 'yellow', fontSize: '14px' }} />
                    {userData.likes}
                </p>
                <p>
                <BiShow style={{ color: 'grey', fontSize: '14px' }} />
                    {userData.views}
                </p>
                <p>
                <FaHeart style={{ color: 'red', fontSize: '14px' }} />
                    {userData.heart}
                </p>
            </div>
        </div>
        <div className='post-box'> 
            <p className='post-count'>134 Posts</p>
            <hr className='line'/>
        </div>
    </div>
  )
}

export default Profiles
