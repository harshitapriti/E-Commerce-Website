import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProductById } from '../services/api';
import Rating from './Rating';

const ViewProduct = () => {
  // state variables
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviewCount, setReviewCount] = useState('');

  // for fetching product data and setting up local storage with some data
  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        localStorage.setItem('name', data.name);
        localStorage.setItem('price', data.price);
        localStorage.setItem('image', data.img_url);
        setReviewCount(localStorage.getItem('reviewCount'));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);  

  //loading component
  if (loading) return <h4 className='mb-0' style={{ height: '50px', backgroundColor: '#010101', color: 'white' }}>Loading...</h4>;
  if (error) return <h4 className='mb-0' style={{ height: '50px', backgroundColor: '#010101', color: 'white' }}>Error: {error}</h4>;

  //viewProduct component with product rendering
  return (
    <>
      {product && (
        <div style={{ width: '100%', backgroundColor: '#010101', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className='container-fluid' style={{ width: '80%', height: '80%', padding: '4vh' }}>
            <div className='row'>
              <div className='col-md-6 col-12'>
                <img className='img-thumbnail' style={{ width: '25rem', height: '20rem', marginTop: '1vh' }} src={product.img_url} alt={product.name} />
              </div>

              <div className='col-md-6 col-12' style={{ marginTop: '1vh' }}>
                <h2 style={{ color: 'white', marginLeft: '1vw' }}>{product.name}</h2>
                <hr style={{ color: 'white' }}></hr>
                <div className='rating d-flex' style={{ marginLeft: '1vw' }}>
                  <FontAwesomeIcon icon={faStar} style={{ color: "#960037", marginTop: '0.8vh' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#960037", marginTop: '0.8vh' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#960037", marginTop: '0.8vh' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#960037", marginTop: '0.8vh' }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff", marginTop: '0.8vh' }} />
                  <p style={{ color: 'white', marginLeft: '1vw' }}>{reviewCount} Reviews</p>
                </div>
                <hr style={{ color: 'white' }}></hr>
                <div>
                  <p style={{ color: 'white', marginLeft: '1vw' }}>Price: <b>${product.price}</b></p>
                </div>
                <hr style={{ color: 'white' }}></hr>
                <div>
                  <p style={{ color: 'white', padding: '8px' }}><b>Description: </b>{product.description}</p>
                </div>
                <div>
                  <p className='d-flex' style={{ color: 'white', marginLeft: '1vw' }}><b>Status: </b><span style={{ color: product.count_in_stock > 0 ? 'green' : 'red', marginLeft: '1vw' }}>
                    {product.count_in_stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span></p>
                </div>
                <div>
                  <Link className='cart-btn' to='/cart'><button className='btn customizeButton'>Add To Cart</button></Link>
                </div>
              </div>

            </div>
            <hr style={{ color: 'white' }}></hr>
            <Rating></Rating>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewProduct;

