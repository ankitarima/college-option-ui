import React from 'react'

export default function ReviewVideo({Review}) {
    return (
        <div id="review-video">
            <h3 className="mt-4">Review Video </h3>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: Review.review_video }}></div>
        </div>
    )
}
