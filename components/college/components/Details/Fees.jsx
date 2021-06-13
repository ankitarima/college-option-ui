import React from 'react'

export default function Fees({Review}) {
    return (
        <div id="fees">
            <h3 className="mt-4">Fees - College Fees and Hostel Fees </h3>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: Review.fees }}></div>
        </div>
    )
}
