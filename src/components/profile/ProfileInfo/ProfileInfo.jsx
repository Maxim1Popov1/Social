/* eslint-disable jsx-a11y/alt-text */
import React  from 'react';
import s from './ProfileInfo.module.css'



const ProfileInfo = () => {  
return ( 

<div className = {s.content}>


         <div>
         <img src= 'https://catherineasquithgallery.com/uploads/posts/2021-02/1613225705_162-p-fon-sinii-dim-187.jpg' />
        </div>
        <div className={s.descriptionDlock}>
            ava + description
        </div>
        
        </div>
)  
}

export default ProfileInfo;
