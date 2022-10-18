import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../context/UserContext';


const Register = () => {

    let { createUser, signWithGoogle, sendauthenticationemail } = useContext(Authcontext)
    console.log(signWithGoogle);
    let [email, sendEmail] = useState('')
    let [bug, setBug] = useState('')
    let [user, setuser] = useState('')

    let handleForm = (e) => {
        e.preventDefault()
        let form = e.target
        let email = form.email.value
        let password = form.password.value
        let username = form.name.value
        console.log(email, password, username);
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log('registered', user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    let handleGoogleSignIn = (e) => {
        e.preventDefault()
        signWithGoogle()
            .then(result => {
                let user = result.user
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    let handleverification = () => {
        sendauthenticationemail()
            .then(result => {
                let user = result.user
                alert('sendeing verification key')
                sendEmail(user)
            })
            .catch(error => {
                console.log(error.message);
                setBug(error.message)
            })
    }
    return (
        <div>
            <div>

                <form onSubmit={handleForm} className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <small>Already have Account? <Link to='/login' href="#" className="label-text-alt link link-hover">Login Please</Link></small>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button onClick={handleverification} className="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <FontAwesomeIcon onClick={handleGoogleSignIn} icon={faCoffee} className='text-white' />
                     */}
                </form>
                <div>
                    <button onClick={handleGoogleSignIn} className=" btn btn-success">Google Signin</button>
                </div>

            </div>
        </div>
    );
};

export default Register;