import React from 'react'

export default function Faq({Review}) {
    return (
        <div id="faq">
            <h3 className="mt-4">FAQ </h3>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: Review.faq }}></div>
        </div>
    )
}
