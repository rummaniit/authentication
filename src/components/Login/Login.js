import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../context/UserContext';
import { Logincontext } from '../../Main/Main';

const Login = () => {
    let [person, setPerson] = useState('')
    let navigate = useNavigate()

    console.log(person);
    let [error, setError] = useState('')
    let { signIn } = useContext(Authcontext)
    let handleForm = (e) => {
        e.preventDefault()
        let form = e.target
        let email = form.email.value
        let password = form.password.value
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setPerson(user)
                form.reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }

    return (
        <div>
            <form onSubmit={handleForm} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
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
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                {
                                    person ? <h1 className='text-success'>Successful Login</h1> : <h1
                                        className='text-error'>{error}</h1>
                                }
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;