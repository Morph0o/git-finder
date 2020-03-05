import React from 'react'


const UserItem = (props) => {
    const {login, avatar_url, html_url} = props.user
  
   
        return (
            <div className='card text-center'>
              <img src={avatar_url} className='round-img' style={{width: '60px'}}/>  
              <h3></h3>
              <div>
              <a href='' className='btn btn-dark btn-sm my-1'>More</a>
              </div>
            </div>
        )
    
}

export default UserItem
