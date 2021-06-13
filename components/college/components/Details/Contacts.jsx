import React from 'react'

export default function Contacts({Review}) {
    return (
        <div id="contact">
            <h3 className="mt-4">College Contact Details </h3>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: Review.college_contact }}></div>
        </div>
    )
}
