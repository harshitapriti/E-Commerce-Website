import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    //state variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    

    //function to handle signin form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            //sending user data to database using API
            const response = await axios.post('http://localhost:5000/api/users/signin', {
                first_name: firstName,
                last_name: lastName,
                email,
                password,
            });
            setLoading(false);
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (error) {
            setError(error.response.data.message || 'Something went wrong');
            setLoading(false);
        }
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };

    //signin component
    return (
        <>
            <div style={{ width: '100%', backgroundColor: '#010101', padding: '2rem' }}>
                <form className='signin-form' onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 style={{ color: 'white' }}>Sign Up</h1>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-3">
                        <label style={{ color: '#a2a2a2' }} htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label style={{ color: '#a2a2a2' }} htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label style={{ color: '#a2a2a2' }} htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label style={{ color: '#a2a2a2' }} htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn customizeButton" disabled={loading}>
                        {loading ? (
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : (
                            "Sign Up"
                        )}
                    </button>
                    <hr style={{ color: 'white' }}></hr>
                    <div>
                        <p style={{ color: 'white' }}><b>Already have an account? </b><Link to='/login' style={{ color: '#960037', textDecoration: 'none' }}><b>Login</b></Link></p>
                    </div>
                </form>
            </div>
        </>
    )
};

export default SignUp;