import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';

const PaymentMethod = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        //save selected payment method to localStorage
        localStorage.setItem('paymentMethod', paymentMethod);

        //navigate to preview order page
        navigate('/previeworder');
    }

    //paymentMethod component
    return (
        <>
            <div style={{ width: '100%', backgroundColor: '#010101', padding: '2rem' }}>
                <form onSubmit={handleSubmit} className='payment-check' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{color: 'white'}}>Payment Method</h1>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="PayPal" onChange={(e) => setPaymentMethod(e.target.value)} name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1" style={{ color: 'white' }}>
                            PayPal
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="Stripe" onChange={(e) => setPaymentMethod(e.target.value)} name="flexRadioDefault" id="flexRadioDefault2" />
                        <label className="form-check-label" for="flexRadioDefault2" style={{ color: 'white' }}>
                            Stripe
                        </label>
                        
                    </div>
                    <button type="submit" className="btn mt-2 customizeButton">Continue</button>
                    

                </form>
            </div>
        </>
    )
};

export default PaymentMethod;