import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../context/UserContext';

const Header = () => {
    let { users, SignOut, loading } = useContext(Authcontext)
    let handleSignout = () => {
        SignOut()
            .then(() => {

            })
    }
    console.log(users);
    return (
        <div>
            <div className="flex justify-between navbar bg-primary text-primary-content">
                <div><Link to='/' className="btn btn-ghost normal-case text-xl">Components</Link>

                </div>
                <div>
                    <Link to='/home' className="btn btn-ghost normal-case text-normal">Home</Link>
                    <Link to='/order' className="btn btn-ghost normal-case text-normal">Orders</Link>
                    <Link to='/register' className="btn btn-ghost normal-case text-normal">Register</Link>

                    {
                        users && <small className='text-white'>{users.email}</small>
                    }
                    {
                        users ? <button className="btn mx-2" onClick={handleSignout}>Log Out</button> : <button to='/login' className="btn mx-2">Login</button>
                    }
                </div>
            </div>
        </div >
    );
};

export default Header;