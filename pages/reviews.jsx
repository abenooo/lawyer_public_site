import React, { useState, useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Importing star icons

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'https://vgf59b03-5001.uks1.devtunnels.ms/api/review/all'; // Adjust this URL as necessary
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Sort reviews by rating in descending order and then by helpful count
                const sortedReviews = data.sort((a, b) => b.review - a.review || b.helpfulCount - a.helpfulCount);
                setReviews(sortedReviews);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError('Failed to fetch reviews');
            });
    }, []);

    const renderStars = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(i <= rating ? <FaStar key={i} color="gold" /> : <FaRegStar key={i} color="gold" />);
        }
        return <div style={{ display: 'flex', flexDirection: 'row' }}>{stars}</div>;
    };

    return (
      <div className='container mx-auto'>
        <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
            <div style={{ flex: 1 }}>
                <h2>Top 5 Reviews</h2>
                {error && <p>{error}</p>}
                {reviews.slice(0, 5).map(review => (
                    <div key={review._id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                        <h3>{review.reviewPostId || 'Review Item Unspecified'}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            {renderStars(review.review)}
                            <span>({review.review || 'No Rating'})</span>
                        </div>
                        <p style={{ fontStyle: 'italic', marginTop: '10px' }}>{review.comment || 'No comment provided'}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
                            <p>Helpful: {review.helpfulCount || 0}</p>
                            <p>Not Helpful: {review.notHelpfulCount || 0}</p>
                            <p>Reviewed on: {new Date(review.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ flex: 1 }}>
                <h2>Other Reviews</h2>
                {error && <p>{error}</p>}
                {reviews.slice(5).map(review => (
                    <div key={review._id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                        <h3>{review.reviewPostId || 'Review Item Unspecified'}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            {renderStars(review.review)}
                            <span>({review.review || 'No Rating'})</span>
                        </div>
                        <p style={{ fontStyle: 'italic', marginTop: '10px' }}>{review.comment || 'No comment provided'}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
                            <p>Helpful: {review.helpfulCount || 0}</p>
                            <p>Not Helpful: {review.notHelpfulCount || 0}</p>
                            <p>Reviewed on: {new Date(review.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Reviews;
