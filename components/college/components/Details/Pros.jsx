import React from 'react'

export default function Pros({Review}) {
    return (
        <div id="pros">
            <h3 className="mt-4">College Pros </h3>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: Review.college_pros }}></div>
        </div>
    )
}
