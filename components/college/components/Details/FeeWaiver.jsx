import React from 'react'

export default function FeeWaiver({Review}) {
    return (
        <div id="Scholarship">
            <h3 className="mt-4">Scholarship or Fee Waiver </h3>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: Review.fee_waiver }}></div>
        </div>
    )
}
