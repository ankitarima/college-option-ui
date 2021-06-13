import React from 'react'

export default function Facilities({Review}) {
    return (
        <div id="facilities">
            <h3 className="mt-4">Facilities </h3>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: Review.facilities }}></div>
        </div>
    )
}
