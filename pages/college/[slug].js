import React from 'react'
import db from '../../firebase/firebase'
import College from '../../components/college/College'

export default function college({Review}) {
    return (
        <College Review={Review} />
    )
}

export async function getServerSideProps({params:{slug}}){
    const Reviews = await db.collection('college_reviews').where('slug', '==', slug).get();
    const Review = []
    Reviews.forEach((val)=>{
        Review.push(val.data())
    })
    console.log(Review[0])
    return{
        props: {
            Review:{
                ...Review[0]
            }
        },
    }
}
