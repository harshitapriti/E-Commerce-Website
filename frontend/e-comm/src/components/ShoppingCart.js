import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ShoppingCart = () => {
    //state variables
    const [img, setImg] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState(1);


    //getting data from local storage and setting up state variable
    useEffect(() => {
        const storedImg = localStorage.getItem('image');
        const storedName = localStorage.getItem('name');
        const storedPrice = localStorage.getItem('price');

        if (storedImg && storedImg !== 'undefined') {
            setImg(storedImg);
        }
        if (storedName && storedName !== 'undefined') {
            setName(storedName);
        }
        if (storedPrice && storedPrice !== 'undefined') {
            setPrice(storedPrice);
        } 
    }, []);

    localStorage.setItem('totalPrice', price * quantity);

    //handling item increment button
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    //handling item decrement button
    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    //handling delete button 
    const clearCartItem = () => {
        localStorage.removeItem('image');
        localStorage.removeItem('name');
        localStorage.removeItem('price');
        setImg('');
        setName('');
        setPrice('');
        setQuantity(0);
    };

    if (!img && !name && !price) {
        return (
            <div style={{backgroundColor: '#010101', width: '100%', height: '300px'}}>
                <div className='d-flex' style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center',}}>
                    <h1 style={{color: 'white'}}>No item in the cart</h1>
                </div>
            </div>
        );
    }

    localStorage.setItem('quantity', quantity);

    //shopping cart component
    return(
        <>
        <div style={{backgroundColor: '#010101', width: '100%'}}>
            <div className='d-flex' style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center',}}>
                <h1 style={{color: 'white'}}>Shopping Cart</h1>
            </div>
            <div style={{width: '100%', padding: '5rem'}}>
                <div className='row'>
                    <div className='col-md-9 col-12'>
                        <div className='row d-flex'>
                            <div className='col-md-3 col-12'>
                                <img className='img-thumbnail' style={{width: '10rem', height: '7rem'}} src={img} alt={name}></img>
                            </div>
                            <div className='col-md-3 col-12'>
                                <h4 style={{color: 'white'}}>{name}</h4>
                                <h6 style={{color: 'white'}}>${price}</h6>
                            </div>
                            <div className='col-md-3 col-6'>
                            <div className="input-group mb-3 quantity" style={{gap: '1vw'}}>
                                <button onClick={handleDecrement} style={{width: '3vw', fontSize: 'larger'}} className="btn customizeButton" type="button">-</button>
                                <input style={{width: '3vw'}} type="text" className="form-control" value={quantity} placeholder="" aria-label="Example text with two button addons" />
                                <button  onClick={handleIncrement} style={{width: '3vw', fontSize: 'larger'}} className="btn customizeButton" type="button">+</button>
                            </div>
                            </div>
                            <div className='col-3' style={{fontSize: '4vh',}}>
                            <FontAwesomeIcon onClick={clearCartItem} className='btn' type='submit' icon={faTrash} style={{color: "#960037", marginLeft: '3rem'}} />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-12'>
                        <div className='row'>
                            <h6 style={{color: 'white'}}>Subtotal ({quantity} item(s)): <b>${price * quantity}</b></h6>
                            <hr style={{color: 'white'}}></hr>
                        </div>
                        <div className='row checkout'>
                        <Link to='/shippingAddress' type="button" className="btn customizeButton">Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default ShoppingCart;