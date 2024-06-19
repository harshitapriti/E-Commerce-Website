import '../App.css';
import { Link } from 'react-router-dom';
import { fetchSliderItems } from '../services/api.js';
import { useEffect, useState } from 'react';

const Slider = () => {
  //state variables
  const [sliderItems, setSliderItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //fetching slider items
  useEffect(() => {
    const getSliderItems = async () => {
      try {
        const data = await fetchSliderItems();
        setSliderItems(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    getSliderItems();
  }, []);

  //loading components
  if (loading) return <h4 className='mb-0' style={{height: '50px', backgroundColor: '#010101', color: 'white'}}>Loading...</h4>;
  if (error) return <h4 className='mb-0' style={{height: '50px', backgroundColor: '#010101', color: 'white'}}>Error: {error}</h4>;

   // grouping slider items into chunks of 3
   const chunkedItems = [];
   for (let i = 0; i < sliderItems.length; i += 3) {
     chunkedItems.push(sliderItems.slice(i, i + 3));
   }

   //slider components
  return (
    <>
      <div className='row carousel-section' style={{ backgroundColor: '#010101' }}>
        <div className='col-md-3 col-12 the-card'>
          <div className="card custom-card">
            <div className="card-body card-tag">
              <h1 className='pacifico-regular'>Step Out</h1>
              <h1 className='pacifico-regular'>In</h1>
              <h1 className='pacifico-regular'>Style</h1>
              <h4 className='cardLine'>Explore the options...</h4>
            </div>
          </div>
        </div>
        <div className='col-md-9 col-12'>
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              {chunkedItems.map((group, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <div className='card-container d-flex justify-content-around'>
                    {group.map(item => (
                      <Link key={item._id} className='card-container' to={`/product/${item._id}`} style={{ textDecoration: 'none' }}>
                        <div className="card carousel-cards">
                          <img style={{ height: '10rem' }} src={item.img_url} className="card-img-top img-fluid" alt={item.name} />
                          <div className="card-body carousel-card-body">
                            <h5 className="card-title" style={{ color: 'white', textDecoration: 'none' }}>{item.name}</h5>
                            <p><b>${item.price}</b></p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" style={{ backgroundColor: '#960037', height: '6vh', width: '3vw', borderRadius: '50%' }} aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" style={{ backgroundColor: '#960037', height: '6vh', width: '3vw', borderRadius: '50%' }} aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
