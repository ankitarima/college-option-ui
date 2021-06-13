import React from 'react'

export default function Connectivity({Review}) {
    return (
        <div id="connectivity">
            <h3 className="mt-4">Connectivity </h3>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: Review.connectivity }}></div>
        </div>
    )
}
