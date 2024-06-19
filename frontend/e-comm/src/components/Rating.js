import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { fetchReviews } from '../services/api';

const Rating = () => {
    //state variables
    const [star, setStar] = useState('');
    const [review, setReview] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [reviews, setReviews] = useState([]);

    //fetching reviews and rendering it on screen
    useEffect(() => {
        const getReviews = async () => {
            try {
                const data = await fetchReviews();
                setReviews(data);
            } catch (error) {
                setError(error.message);
            }
        };
        getReviews();
    }, []);

    //handling review submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //posting reviews to database API
            const response = await axios.post('http://localhost:5000/api/users/rating', {
                star,
                review
            });
            setSuccess('Review submitted successfully!');
            setStar('');
            setReview('');
            setReviews([...reviews, response.data]);
            setError('');
        } catch (error) {
            setError(error.response?.data?.message || 'Something went wrong');
            setSuccess('');
        }
    };

    localStorage.setItem('reviewCount', reviews.length);

    //rating component
    return (
        <>
            <div className='row' style={{ marginTop: '2vh' }}>
                <div>
                {reviews.length > 0 ? (
                        reviews.map((rev, index) => (
                            <div key={index} className="alert alert-secondary" role="alert">
                                <strong>Review:</strong> {rev.review}
                            </div>
                        ))
                    ) : (
                        <div className="alert alert-secondary" role="alert">
                            No reviews yet
                        </div>
                    )}
                </div>
            </div>
            <div className='row review-div' style={{ marginTop: '2vh' }}>
                <h4 style={{ color: 'white' }}>Write a Review</h4>
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                {success && <div className="alert alert-success" role="alert">{success}</div>}
                <form onSubmit={handleSubmit} className=' review-div'>
                    <h6 style={{ color: 'white' }}>Rating:</h6>
                    {/* Dropdown to select rating */}
                    <select
                        style={{ margin: '8px', marginLeft: '8px', width: '97.5%' }}
                        className="form-select"
                        aria-label="Default select example"
                        value={star}
                        onChange={(e) => setStar(e.target.value)}
                    >
                        <option value="0">Rate</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                    <div className="input-group">
                        <textarea
                            style={{ marginTop: '1vh', padding: '2px' }}
                            className="form-control"
                            placeholder='Write a review'
                            aria-label="With textarea"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn customizeButton"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Rating;


