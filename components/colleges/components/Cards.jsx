import React from 'react'
import { useRouter } from 'next/router'

export default function Cards({review}) {
  console.log(review)
  const router = useRouter()
    return (
      <div className="col-md-6 col-lg-4 "
      onClick={() => router.push({
        pathname: `college/${review.id}`
        })} 
      >
        <div className="box">
          <div className="img">
             <img src="/assets/images/IIT-Delhi.webp" alt=""/>
          </div>
          <h4 className="title">
             {review.college_name}
          </h4>
          <p className="description">
            Fulll Name
          </p>
        </div>
      </div>
    );
}
