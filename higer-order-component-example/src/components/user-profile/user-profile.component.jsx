import React from 'react';

import withData from '../../with-data';

const UserProfile = ({data,name,email}) => (
    <div className='container'>
        <h1>{name}</h1>
        <h1>{email}</h1>
        post: 
        {data.map(post => (
            <div className='post' key ={post.id}>
                <h1>{post.title}</h1>
                <h1>{post.body}</h1>
            </div>
        ))}
    </div>
);

export default withData(UserProfile);