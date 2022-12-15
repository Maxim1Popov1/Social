/* eslint-disable jsx-a11y/alt-text */

import React  from 'react';
import s from './Profile.module.css'

import ProfileInfo from './ProfileInfo/ProfileInfo';

import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {  
        
return <div className = {s.content}>
          
            <div><ProfileInfo />
         </div>

        
        
        <MyPosts data={props.data} />
        
        </div>
        
}

export default Profile;
