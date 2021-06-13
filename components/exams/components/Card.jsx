import React from "react";
import { useRouter } from 'next/router'

export default function Card({Exam}) {
    // console.log(Exam);
    const router = useRouter();
  return (
    <>
    
      <div className="col-lg-6"  onClick={() => router.push({
        pathname: `exam/${Exam.slug}`
        })} >
        <div className="exam-card">
          <div className="row">
            <div className="col-lg-2" style={{alignSelf: 'center'}}>
              <div className="icon">
                <img src={Exam.featured_image}alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col-lg-10">
              <h4 className="title">
                <p>{Exam.exam_name}</p>
              </h4>
              <p className="description">
                {Exam.exam_description}
              </p>
            <p className="know-more">
                know more
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
