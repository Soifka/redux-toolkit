import React, { useState } from 'react';
import { SpinnerCircular } from 'spinners-react';


const UserList = () => {
const [users] = useState([]);
const [isLoading] = useState(false);
const [error] = useState(null);

    return (
        <section>
            {isLoading && <SpinnerCircular />}
            {error && <div>ERROR!!!</div>}
            {users.length > 0 &&
            users.map((user) => <article key={user.id}>{JSON.stringify(user)}</article>)}
        </section>
    );
}

export default UserList;