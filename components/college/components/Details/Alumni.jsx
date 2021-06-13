import React from 'react'

export default function Alumni({Review}) {
    return (
        <div id="alumi">
            <h3 className="mt-4">Alumni </h3>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: Review.alumni }}></div>
        </div>
    )
}
