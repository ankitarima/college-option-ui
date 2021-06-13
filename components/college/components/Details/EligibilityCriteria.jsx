import React from 'react'

export default function EligibilityCriteria({Review}) {
    return (
        <div id="eligibility">
            <h3 className="mt-4">Eligibility Criteria </h3>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: Review.eligibility_criteria }}></div>
        </div>
    )
}
