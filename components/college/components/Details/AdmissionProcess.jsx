import React from 'react'

export default function AdmissionProcess({Review}) {
    return (
        <div id="admission">
            <h3 className="mt-4">Admission Proccess </h3>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: Review.admission_proccess }}></div>
        </div>
    )
}
