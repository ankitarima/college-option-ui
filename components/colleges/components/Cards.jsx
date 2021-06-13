import React from 'react'
import { useRouter } from 'next/router'

export default function Cards({review}) {
  // console.log(review)
  const router = useRouter()
    return (
      <div className="col-md-6 col-lg-4 "
      onClick={() => router.push({
        pathname: `college/${review.slug}`
        })} 
      >
        <div className="box">
          <div className="img">
             <img src={review.featured_image} alt=""/>
          </div>
          <p className="title">
             {review.college_name}
          </p>
          {/* <p className="description">
            Fulll Name
          </p> */}
        </div>
      </div>
    );
}
