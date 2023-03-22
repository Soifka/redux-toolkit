import React, { useEffect, useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from 'store/slices/usersSlice';


const UserList = () => {
    const {users, isLoading, error} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers('Hello'));
    }, [])

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