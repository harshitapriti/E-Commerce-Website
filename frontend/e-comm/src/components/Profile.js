import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
    //state variables
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    //fetching user details and setting state variable
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const userId = localStorage.getItem('userId');
                const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
                const { first_name, last_name, email } = response.data;
                setFirst_name(first_name);
                setLast_name(last_name);
                setEmail(email);
            } catch (error) {
                setError(error.response?.data?.message || 'Error fetching user details');
            }
        };

        fetchUserDetails();
    }, []);

    //Profile component
    return (
        <>
            <div style={{ width: '100%', backgroundColor: '#010101', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '1rem' }}>
                <h1 className="heading" style={{ color: 'white' }}>Welcome, {first_name}</h1>
            </div>
            <div style={{ width: '100%', padding: '2rem', backgroundColor: '#010101', display: 'flex', justifyContent: 'center' }}>
                <div className='row' style={{ width: '80%' }}>
                    <div className="col-6 col-md-6">
                        <div className="row">
                            <h6 style={{color: '#a2a2a2'}}> Name: </h6>
                        </div>
                        <div className="row">
                            <h6 style={{color: '#a2a2a2'}}> Email ID: </h6>
                        </div>
                    </div>
                    <div className="col-6 col-md-6">
                        <div className="row">
                            <h6 style={{color: 'white'}}> {first_name} {last_name}</h6>
                        </div>
                        <div className="row">
                            <h6 style={{color: 'white'}}> {email} </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Profile;