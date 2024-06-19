import { useEffect, useState } from 'react';
import '../App.css';

const OrderHistory = () => {
    //state variables
    const [orderTotal, setOrderTotal] = useState('');
    const [orderId, setOrderId] = useState('');

    //getting items from localStorage and setting state variables
    useEffect(() => {
        setOrderTotal(localStorage.getItem('orderTotal'));
        setOrderId(parseFloat(localStorage.getItem('userId')));
    }, []);
    
    //orderHistory components
    return (
        <>
            <div style={{ backgroundColor: '#010101', width: '100%' }}>
                <div className='d-flex' style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', }}>
                    <h1 style={{ color: 'white' }}>Order History</h1>
                </div>
                <div>
                    <table className='table' style={{backgroundColor: '#010101', flexDirection: 'column', padding: '2px'}}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID</th>
                                <th scope="col">Date</th>
                                <th scope="col">Total</th>
                                <th scope="col">Paid</th>
                                <th scope="col">Delivered</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>{String(orderId).slice(0, 10)}</td>
                                <td>2024-06-14</td>
                                <td>${orderTotal}</td>
                                <td>No</td>
                                <td>No</td>
                                <td className='details-btn'>
                                    <button type='submit' className='btn customizeButton'>Details</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};

export default OrderHistory;