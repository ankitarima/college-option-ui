import React from 'react';
import db from '../firebase/firebase'
import Colleges from '../components/colleges/colleges'

export default function colleges({Reviews}) {
    // console.log(Reviews)
    return (
        <>
            <Colleges Reviews = {Reviews}/>        
        </>
    )
}

export async function getServerSideProps({query}) {
  // console.log(query.topColleges);
  let querySnap
  if( query.topColleges == 'true'){
    querySnap = await  db.collection('college_reviews').where('tags','array-contains','top college').get()
  }else{
    querySnap = await  db.collection('college_reviews').get()
  }
    
    
    const Reviews =  querySnap.docs.map(docSnap=>{
      return {
        ...docSnap.data(),
        id:docSnap.id
      }
    })
    // console.log(Reviews);
  
    return {
      props: {Reviews},
    }
  }
