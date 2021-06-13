import React from 'react'

export default function Placements({Review}) {
    return (
        <div id="placement">
            <h3 className="mt-4">Placements </h3>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: Review.placements }}></div>
        </div>
    )
}
