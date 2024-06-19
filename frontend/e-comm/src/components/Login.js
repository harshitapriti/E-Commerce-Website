import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
            
            //destructuring token, first_name and id from response.data
            const { token, first_name, id } = response.data;
    
            //storing token, first_name and userId in localStorage
            localStorage.setItem('token', token);
            localStorage.setItem('first_name', first_name);
            localStorage.setItem('userId', id);
    
            //navigate to 'from' location or '/' if not set
            navigate(from, { replace: true });
    
        } catch (error) {
            setError(error.response.data.message || 'Something went wrong');
        } finally {
            setLoading(false);
            setEmail('');
            setPassword('');
        }
    };

    //login component
    return (
        <>
            <div style={{ width: '100%', backgroundColor: '#010101', padding: '2rem' }}>
                <form className='signin-form' onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 style={{ color: 'white' }}>Login</h1>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-3">
                        <label style={{ color: '#a2a2a2' }} htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label style={{ color: '#a2a2a2' }} htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn customizeButton" disabled={loading}>
                        {loading ? (
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        ) : (
                            "Login"
                        )}
                    </button>
                    <hr style={{ color: 'white', width: '40%' }}></hr>
                    <div>
                        <p style={{ color: 'white' }}><b>Don't have an account? </b><Link to='/signup' style={{ color: '#960037', textDecoration: 'none' }}><b>Sign In</b></Link></p>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Login;