import React from 'react';
import db from '../../firebase/firebase'

export default function Exam({exam}) {
    // console.log(exam);
    return (
        <div className="section-bg">
            <div className="px-4 py-5 my-5 mb-2 text-center">
                <img className="d-block mx-auto mb-4" src={exam.featured_image} alt="" width="100" height="100"/>
                <h1 className="display-5 fw-bold">{exam.exam_name}</h1>
            </div>
            <div className="col-lg-10 mx-auto pb-5">
                <div dangerouslySetInnerHTML={{ __html: exam.exam_details}}></div>
                
            </div>
        </div>
    )
}

export async function getServerSideProps({params:{slug}}){
    const querry = await db.collection('exams').where('slug', '==', slug).get();
    const exam = []
    querry.forEach((val)=>{
        exam.push(val.data())
    })
    // console.log(exam[0])
    return{
        props: {
            exam:{
                ...exam[0]
            }
        },
    }
}
