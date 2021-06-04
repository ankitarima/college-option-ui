import React from "react";
import { useRouter } from 'next/router'

export default function Card() {
    const router = useRouter();
  return (
    <>
    
      <div className="col-lg-6"  onClick={() => router.push({
        pathname: 'exam/exam-slug'
        })} >
        <div className="exam-card">
          <div className="row">
            <div className="col-lg-2" style={{alignSelf: 'center'}}>
              <div className="icon">
                <img src="/assets/images/jee-main.png" alt="" className="img-fluid"/>
              </div>
            </div>
            <div className="col-lg-10">
              <h4 className="title">
                <a href="">JEE Main</a>
              </h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
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
