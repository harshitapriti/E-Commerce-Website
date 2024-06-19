import {  useNavigate } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';

const ShippingAddress = () => {
    //state variables
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
    const navigate = useNavigate();

    //handling form submission with user shipping address and setting up local storage
    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('fullName', fullName);
        localStorage.setItem('address', address);
        localStorage.setItem('city', city);
        localStorage.setItem('postalCode', postalCode);
        localStorage.setItem('country', country);

        //navigate to payment page after form submission
        navigate('/payment');
    }
    
    //shipping address component
    return (
        <>
            <div style={{ width: '100%', backgroundColor: '#010101', padding: '2rem' }}>
                <form className='signin-form' onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 style={{color: 'white'}}>Shipping Address</h1>
                    <div className="mb-3">
                        <label style={{color: '#a2a2a2'}} for="exampleInputEmail1" className="form-label">Full Name</label>
                        <input type="text" className="form-control" value={fullName} onChange={(e) => setFullName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label style={{color: '#a2a2a2'}} for="exampleInputEmail1" className="form-label">Address</label>
                        <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label style={{color: '#a2a2a2'}} for="exampleInputEmail1" className="form-label">City</label>
                        <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label style={{color: '#a2a2a2'}} for="exampleInputPassword1" className="form-label">Postal Code</label>
                        <input type="number" className="form-control" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3">
                        <label style={{color: '#a2a2a2'}} for="exampleInputPassword1" className="form-label">Country</label>
                        <input type="text" className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} id="exampleInputPassword1" required />
                    </div>
                    {/* <Link className='signin-form' to='/payment'><button type="submit" className="btn customizeButton">Continue</button></Link> */}
                    <button type="submit" className="btn customizeButton">Continue</button>
                    
                </form>
            </div>
        </>
    )
};

export default ShippingAddress;