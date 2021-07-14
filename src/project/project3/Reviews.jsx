import React from 'react'
import './index.css'
import Reviewsdata from './Reviewsdata'
import OurReview from './OurReview'
import OurReviewcard from './OurReviewcard'
export default function Reviews() {
    // console.log(Reviewsdata)
    return (
        <div className="Review">
            <OurReview  />
            <OurReviewcard Reviewsdata={Reviewsdata} />
        </div>
    )
}
