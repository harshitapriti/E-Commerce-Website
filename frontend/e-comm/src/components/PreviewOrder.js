import { Link } from 'react-router-dom';
import '../App.css';
import { useEffect, useState } from 'react';

const PreviewOrder = () => {
    //state variables
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [img, setImg] = useState('');
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [totalPrice, setTotalPrice] = useState('');

    //getting items from local storage and setting up state variables
    useEffect(() => {
        setFullName(localStorage.getItem('fullName') || '');
        setAddress(localStorage.getItem('address') || '');
        setPaymentMethod(localStorage.getItem('paymentMethod') || '');
        setImg(localStorage.getItem('image') || '');
        setItemName(localStorage.getItem('name') || '');
        setQuantity(localStorage.getItem('quantity') || '');
        setPrice(parseFloat(localStorage.getItem('price')) || 0);
        setTotalPrice(parseFloat(localStorage.getItem('totalPrice')) || 0);
    }, []);

    const taxCalc = totalPrice * 0.18;
     
    //preview order 
    return (
        <>
            <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: '#010101', width: '100%' }}>
                <h1 style={{ color: 'white', marginBottom: '0', padding: '1rem' }}>Preview Order</h1>
            </div>
            <div className='preview' style={{ backgroundColor: '#010101', width: '100%', padding: '4rem', justifyContent: 'center', }}>
                <div className='row details'>
                    <div className='col-md-9 col-12 mt-2'>
                        <h5 style={{ color: 'white' }}>Shipping</h5>
                        <p style={{ color: 'white' }}><b>Name: </b>{fullName}</p>
                        <p style={{ color: 'white' }}><b>Address: </b>{address}</p>
                        <Link to='/shippingAddress'>Edit</Link>
                        <hr style={{ color: 'white', width: '60%' }}></hr>
                        <h5 style={{ color: 'white' }}>Payment</h5>
                        <p style={{ color: 'white' }}><b>Payment Method: </b>{paymentMethod}</p>
                        <Link to='/payment'>Edit</Link>
                        <hr style={{ color: 'white', width: '60%' }}></hr>
                        <p style={{ color: 'white' }}><b>Product:</b></p>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', gap: '2rem' }}>
                            <img style={{ width: '7rem', height: '4rem' }} className='img-thumbnail' src={img} alt={itemName}></img>
                            <h6 style={{ color: 'white' }}>{itemName}</h6>
                            <p style={{ color: 'white' }}>{quantity}</p>
                            <p style={{ color: 'white' }}>${price}</p>
                        </div>
                    </div>
                    <hr className='hide' style={{ color: 'white', width: '100%', }}></hr>
                    <div className='col-md-3 col-12 mt-2'>
                        <h5 style={{ color: 'white' }}>Order Summary</h5>
                        <div className='row'>
                            <div className='col-6'>
                                <p style={{color: 'white'}}><b>Price:</b></p>
                            </div>
                            <div className='col-6'>
                            <p style={{color: 'white'}}>${totalPrice}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                            <p style={{color: 'white'}}><b>Shipping:</b></p>
                            </div>
                            <div className='col-6'>
                            <p style={{color: 'white'}}>$0</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                            <p style={{color: 'white'}}><b>Tax:{taxCalc}</b></p>
                            </div>
                            <div className='col-6'>
                            <p style={{color: 'white'}}>$18</p>
                            </div>
                        </div>
                        <hr style={{ color: 'white', width: '80%' }}></hr>
                        <div className='row'>
                            <div className='col-6'>
                            <p style={{color: 'white'}}><b>Order Total:</b></p>
                            </div>
                            <div className='col-6'>
                            <p style={{color: 'white'}}>${totalPrice + taxCalc}</p>
                            </div>
                            <Link className='order-total' to='/order'><button type="button" className="btn customizeButton">Place Order</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default PreviewOrder;