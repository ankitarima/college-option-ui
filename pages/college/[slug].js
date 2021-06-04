import React from 'react'
import db from '../../firebase/firebase'
import College from '../../components/college/College'

export default function college({Review}) {
    return (
        <College Review={Review} />
    )
}

export async function getServerSideProps({params:{slug}}){
    const Review = await db.collection('college_review').doc(slug).get();

    return{
        props: {
            Review:{
                ...Review.data()
            }
        },
    }
}
