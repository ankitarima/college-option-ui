import React from 'react'
import db from '../firebase/firebase'
import Exams from '../components/exams/Exams'

export default function exams({exams}) {
    return (
        <>
            <Exams exams={exams}/>
        </>
    )
}


export async function getServerSideProps(context) {
    const querySnap = await  db.collection('exams').where('status','==','public').get()
    
    const exams =  querySnap.docs.map(docSnap=>{
      return {
        ...docSnap.data(),
        id:docSnap.id
      }
    })
    // console.log(exams);
  
    return {
      props: {exams},
    }
  }