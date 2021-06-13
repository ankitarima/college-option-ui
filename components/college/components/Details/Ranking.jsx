import React from 'react'

export default function Ranking({Review}) {
    return (
        <div id="ranking">
            <h3 className="mt-4">Ranking </h3>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: Review.ranking }}></div>
        </div>
    )
}
