import React from 'react'

export default function Cons({Review}) {
    return (
        <div id="cons">
            <h3 className="mt-4">College Cons </h3>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: Review.college_cons }}></div>
        </div>
    )
}
