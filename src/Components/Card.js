import React from 'react'

const Card = ({loading,users}) => {
    return loading ? (
        <div>
            <img src="https://c.tenor.com/w5DF_eXs5S4AAAAC/cardano-logo.gif" alt="Loading..." className="loading" height="200px" width="200px" />
        </div>
    ):
    (
        <div id="main">
            {users.map(user => 
                <div>
                    {
                    console.log(user)
                    }
                <div className='userProfile'>
                    <img src={user.avatar} alt={user.avatar}></img>
                    <p>User ID: {user.id}</p>
                    <h1>{user.first_name} {user.last_name}</h1>
                    <p>User ID: {user.email}</p>
                </div>                
                </div>    
            )}
        </div>
    )
} 
export default Card