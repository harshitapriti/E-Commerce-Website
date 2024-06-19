import { Link } from 'react-router-dom';
import { fetchAccessoriesItems } from '../services/api.js';
import '../App.css';
import { useEffect, useState } from 'react';

const Accessories = () => {
    //state variables
    const [accessoriesItems, setAccessoriesItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //fetching data from database and setting state data to display on page
    useEffect(() => {
        const getAccessoriesItems = async () => {
            try {
                const data = await fetchAccessoriesItems();
                setAccessoriesItems(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        getAccessoriesItems();
    }, []);

    if (loading) return <h4 className='mb-0' style={{height: '50px', backgroundColor: '#010101', color: 'white'}}>Loading...</h4>;
    if (error) return <h4 className='mb-0' style={{height: '50px', backgroundColor: '#010101', color: 'white'}}>Error: {error}</h4>;

    //accessories component
    return (
        <>
           <div style={{ width: '100%', backgroundColor: '#010101', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '1rem' }}>
                <h1 className="heading" style={{ color: 'white' }}>Accessories</h1>
            </div>
            <div style={{ width: '100%', backgroundColor: '#010101', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <div className='card-container' style={{gap: '1rem'}}>
                    {accessoriesItems.map(item => (
                        <Link className='card-container' to={`/product/${item._id}`} style={{ textDecoration: 'none' }}><div key={item._id} className="card carousel-cards">
                        <img style={{height: '9rem'}} src={item.img_url} className="card-img-top" alt={item.name} />
                        <div className="card-body carousel-card-body">
                            <h5 className="card-title" style={{ color: 'white', textDecoration: 'none' }}>{item.name}</h5>
                            <p><b>${item.price}</b></p>
                        </div>
                    </div>
                    </Link>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Accessories;