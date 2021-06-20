import React from 'react'
import db from '../../firebase/firebase'
import College from '../../components/college/College'

export default function college({Review,Reviews}) {
    console.log(Reviews)
    return (
        <College Review={Review} Reviews={Reviews} />
    )
}

export async function getServerSideProps({params:{slug}}){
    const querySnap = await db.collection('college_reviews').where('slug', '==', slug).get();
    const Review = []
    querySnap.forEach((val)=>{
        Review.push(val.data())
    })
    const AllReviews = await  db.collection('college_reviews').get()
    const Reviews =  AllReviews.docs.map(docSnap=>{
        return {
          ...docSnap.data(),
          id:docSnap.id
        }
      })
    // console.log(Reviews)
    return{
        props: {
            Review:{
                ...Review[0]
            },
            Reviews:{
                ...Reviews
            }
        },
    }
}
