import React  from 'react';
import UserCard from '../UserCard/UserCard';

const UsersList = ({users}) => {
    return (
        // User List goes here...
        <div>
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    )
}

export default UsersList;