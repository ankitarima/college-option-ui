import React from 'react'

export default function CoursesOffered({Review}) {
    return (
        <div id="courses">
        <h3 className="mt-4">Courses Offered </h3>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: Review.offered_courses }}></div>
        </div>
    )
}
